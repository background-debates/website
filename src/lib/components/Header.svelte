<script lang="ts">
	import { resolve } from '$app/paths';
	import logo from '$lib/assets/Background-svf.svg';

	let { active = 'home' } = $props();
</script>

<header class="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
	<div class="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
		<div class="flex items-center gap-2">
			<img src={logo} alt="Background Logo" class="h-8 w-auto" />
			<a href={resolve('/')} class="text-2xl font-bold tracking-tighter text-slate-900"> BACKGROUND </a>
		</div>

		<nav class="hidden items-center gap-8 md:flex">
			<a
				href={resolve('/')}
				class="text-sm font-medium {active === 'home'
					? 'text-blue-600'
					: 'text-slate-600 transition-colors hover:text-slate-900'}"
			>
				Home
			</a>
			<a
				href={resolve('/app')}
				class="text-sm font-medium {active === 'app'
					? 'text-blue-600'
					: 'text-slate-600 transition-colors hover:text-slate-900'}"
			>
				App
			</a>
			<a
				href={resolve('/faq')}
				class="text-sm font-medium {active === 'faq'
					? 'text-blue-600'
					: 'text-slate-600 transition-colors hover:text-slate-900'}"
			>
				FAQ
			</a>
		</nav>

		<div class="flex items-center gap-4">
			<a
				href={resolve('/signup')}
				class="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-blue-700 active:scale-95"
			>
				Jetzt mitmachen
			</a>
		</div>
	</div>
</header>
