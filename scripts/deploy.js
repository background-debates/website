import 'dotenv/config';
import { readdirSync } from 'node:fs';
import { relative, sep } from 'node:path';
import { Client } from 'basic-ftp';

const { FTP_USER, FTP_PASSWORD, DOMAIN } = process.env;

if (!FTP_USER || !FTP_PASSWORD || !DOMAIN) {
	console.error('Missing FTP_USER, FTP_PASSWORD or DOMAIN in .env');
	process.exit(1);
}

const [host, remoteDir] = DOMAIN.split(':');
if (!host || !remoteDir) {
	console.error('DOMAIN must be in the form "host:remote/path" (got: ' + DOMAIN + ')');
	process.exit(1);
}

// Everything the new build contains, as remote-style relative paths ("_app/x.js").
const localFiles = new Set();
const localDirs = new Set();
for (const entry of readdirSync('build', { recursive: true, withFileTypes: true })) {
	const path = relative('build', entry.parentPath)
		.split(sep)
		.concat(entry.name)
		.filter(Boolean)
		.join('/');
	(entry.isDirectory() ? localDirs : localFiles).add(path);
}
if (!localFiles.has('index.html')) {
	console.error('build/index.html not found. Run `npm run build` first.');
	process.exit(1);
}

// Delete remote files/folders that are not part of the new build.
// Dotfiles (.htaccess, .well-known, ...) are never touched.
async function prune(dir) {
	for (const entry of await client.list(dir)) {
		if (entry.name.startsWith('.')) continue;
		const path = dir ? `${dir}/${entry.name}` : entry.name;
		if (entry.isDirectory) {
			if (localDirs.has(path)) await prune(path);
			else await client.removeDir(path);
		} else if (!localFiles.has(path)) {
			await client.remove(path);
		}
	}
}

const client = new Client();
client.ftp.verbose = false;

try {
	console.log(`Connecting to ${host} via FTPS...`);
	await client.access({ host, user: FTP_USER, password: FTP_PASSWORD, secure: true });

	console.log(`Ensuring remote directory ${remoteDir} exists...`);
	await client.ensureDir(remoteDir);

	const pwd = await client.pwd();
	if (!pwd.endsWith('/' + remoteDir.replace(/^\/+|\/+$/g, ''))) {
		throw new Error(
			`Safety check failed: expected to be inside "${remoteDir}" but cwd is "${pwd}". Aborting before any changes.`
		);
	}

	// Upload first (overwriting in place), so a failed upload leaves the old site online.
	console.log(`Uploading ./build → ${pwd}...`);
	await client.uploadFromDir('build');

	console.log('Removing files no longer in the build...');
	await prune('');

	console.log('Deploy complete.');
} catch (err) {
	console.error('Deploy failed:', err.message);
	process.exitCode = 1;
} finally {
	client.close();
}
