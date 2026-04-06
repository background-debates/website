<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<title>Background – Deine App für kontroversen Dialog</title>
	<meta
		name="description"
		content="Diskutiere auf einem neuen Niveau, ohne Populismus und Filterblasen. Background vernetzt dich anonym in 1-zu-1-Chats und nutzt moderne KI-Technologie für produktivere Gespräche."
	/>
	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
