<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import ogImage from '$lib/assets/Erste-seite-Foto-Background.svg';
	import { page } from '$app/state';

	let { children } = $props();

	// Default SEO values
	const siteName = 'Background';
	const baseUrl = 'https://background-app.de';

	const title = $derived(
		page.data.title
			? `${page.data.title} | ${siteName}`
			: 'Background – Deine App für kontroversen Dialog'
	);
	const description = $derived(
		page.data.description ||
			'Diskutiere auf einem neuen Niveau, ohne Populismus und Filterblasen. Background vernetzt dich anonym in 1-zu-1-Chats und nutzt moderne KI-Technologie für produktivere Gespräche.'
	);
	const canonicalUrl = $derived(`${baseUrl}${page.url.pathname === '/' ? '' : page.url.pathname}`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="icon" href={favicon} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={canonicalUrl} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={ogImage} />
</svelte:head>

{@render children()}
