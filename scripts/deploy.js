import 'dotenv/config';
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

const normalizedTarget = '/' + remoteDir.replace(/^\/+|\/+$/g, '');
if (normalizedTarget === '/') {
	console.error(
		`Refusing to deploy to FTP root "${normalizedTarget}". ` +
			`DOMAIN must specify a target directory (e.g. host:/svelte-app).`
	);
	process.exit(1);
}

const client = new Client();
client.ftp.verbose = false;

try {
	console.log(`Connecting to ${host} via FTPS...`);
	await client.access({
		host,
		user: FTP_USER,
		password: FTP_PASSWORD,
		secure: true,
		secureOptions: { rejectUnauthorized: false }
	});

	console.log(`Ensuring remote directory ${remoteDir} exists...`);
	await client.ensureDir(remoteDir);

	const pwd = await client.pwd();
	if (!pwd.endsWith('/' + remoteDir.replace(/^\/+|\/+$/g, ''))) {
		throw new Error(
			`Safety check failed: expected to be inside "${remoteDir}" but cwd is "${pwd}". Aborting before any deletion.`
		);
	}

	console.log(`Clearing contents of ${pwd} (siblings are untouched)...`);
	await client.clearWorkingDir();

	console.log(`Uploading ./build → ${pwd}...`);
	await client.uploadFromDir('build');

	console.log('Deploy complete.');
} catch (err) {
	console.error('Deploy failed:', err.message);
	process.exitCode = 1;
} finally {
	client.close();
}
