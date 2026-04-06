<script lang="ts">
	import logo from '$lib/assets/Background-svf.svg';

	let { active = 'home' } = $props();
</script>

<header class="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
	<div class="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
		<div class="flex items-center gap-2">
			<a href="/" class="flex gap-1 text-2xl font-bold tracking-tighter text-slate-900">
				<img src={logo} alt="Background Logo" class="h-8 w-auto" />
				BACKGROUND
			</a>
		</div>

		<nav class="hidden items-center gap-8 md:flex">
			<a
				href="/"
				class="text-sm font-medium {active === 'home'
					? 'text-blue-600'
					: 'text-slate-600 transition-colors hover:text-slate-900'}"
			>
				Home
			</a>
			<a
				href="/about"
				class="text-sm font-medium {active === 'about'
					? 'text-blue-600'
					: 'text-slate-600 transition-colors hover:text-slate-900'}"
			>
				Über uns
			</a>
		</nav>
	</div>
</header>
