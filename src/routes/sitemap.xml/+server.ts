export const prerender = true;

export async function GET() {
	const siteUrl = 'https://background-app.de';
	const pages = [
		'',
		'/about',
		'/faq',
		'/impressum',
		'/datenschutz',
		'/privacy-policy-app',
		'/terms-and-conditions'
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map((page) => {
		return `  <url>
    <loc>${siteUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
	})
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
