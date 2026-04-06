<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import peopleTalking from '$lib/assets/people_talking.png';
	import heroIllustration from '$lib/assets/Erste-seite-Foto-Background.png';
	import appStoreLogo from '$lib/assets/app-store/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
	import playStoreLogo from '$lib/assets/app-store/GetItOnGooglePlay_Badge_Web_color_English.svg';
	import { goto } from '$app/navigation';

	// Supporter Logos
	import enactusLogo from '$lib/assets/supporter/EnactusAachen_weiß_gelb2.png';
	import rwthInnoLogo from '$lib/assets/supporter/rwth-inno.svg';
	import klausTschiraLogo from '$lib/assets/supporter/KlausTschira.svg';
	import msfLogo from '$lib/assets/supporter/MSF.png';

	const features = [
		{
			title: 'Diskutiere über das, was dir wichtig ist.',
			description:
				'Folge Akteuren aus Politik, Gesellschaft, Wissenschaft und mehr – sei es aus deiner Stadt, deinem Land oder weltweit. Jeder Creator-Account stellt täglich maximal eine Debatte an die Community. So sorgen wir für Qualität statt Quantität.',
			icon: '💬',
			color: 'bg-blue-100 text-blue-600'
		},
		{
			title: 'Mehr als nur kontroverse Themen.',
			description:
				'Neben Debatten zu aktuellen Themen stellen wir auch allgemeine Fragen zu deinem Welt- und Menschenbild. Diese Informationen helfen uns, dein Diskussionserlebnis nachhaltig zu verbessern.',
			icon: '🌍',
			color: 'bg-green-100 text-green-600'
		},
		{
			title: 'Platze deine Filterblase.',
			description:
				'Wie kann hier jemand anderer Meinung sein?! Filterblasen sind schwer zu erkennen – bis sie aufeinandertreffen. Wir vernetzen dich anonym in einen 1-zu-1-Chat und lassen deine Filterblase platzen. Gib Feedback zu deinen Chats und sorge damit dafür, dass du immer mit Menschen verbunden wirst, die ernsthaft diskutieren möchten.',
			icon: '🫧',
			color: 'bg-slate-100 text-slate-600'
		},
		{
			title: 'Eine neue Art zu diskutieren.',
			description:
				'Meinungsverschiedenheiten sind Alltag, aber häufig schwierig zu überwinden. Du möchtest zum Beispiel über das Thema Erbschaftssteuer diskutieren, aber dein Gegenüber findet die Ungleichheit gar nicht zu groß? Wir weisen euch auf solche tief liegenden Auslöser von Konflikten hin. Mit diesem Wissen könnt ihr dann besser und produktiver in den Meinungsaustausch treten.',
			icon: '💡',
			color: 'bg-blue-50 text-blue-500'
		}
	];

	const supporters = [
		{ name: 'Enactus Aachen', logo: enactusLogo, url: 'https://www.enactusaachen.de/background' },
		{ name: 'Klaus Tschira Stiftung', logo: klausTschiraLogo, url: 'https://klaus-tschira-stiftung.de' },
		{ name: 'Media Service Forschungsstiftung', logo: msfLogo, url: 'https://www.media-lab.de/de/startups-experts/startups/background/' },
		{ name: 'RWTH Innovation', logo: rwthInnoLogo, url: 'https://www.rwth-innovation.de/en/' }
	];
</script>

<div class="flex min-h-screen flex-col bg-white text-slate-900 selection:bg-blue-100">
	<Header />

	<main class="grow">
		<!-- Hero Section -->
		<section class="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
			<div class="container mx-auto px-4 sm:px-6">
				<div class="flex flex-col items-center gap-12 lg:flex-row">
					<div class="max-w-2xl flex-1 text-center lg:text-left">
						<h2
							class="animate-in fade-in slide-in-from-bottom-4 mb-4 font-semibold tracking-wide text-blue-600 uppercase duration-700"
						>
							Background – Deine App für kontroversen Dialog
						</h2>
						<h1
							class="animate-in fade-in slide-in-from-bottom-6 mb-8 text-5xl font-bold tracking-tighter text-slate-900 duration-1000 md:text-7xl"
						>
							Level up your <span class="text-blue-600">dialog.</span>
						</h1>
						<p
							class="animate-in fade-in slide-in-from-bottom-8 mb-12 text-xl text-slate-600 duration-1000 md:text-2xl"
						>
							Diskutiere auf einem neuen Niveau, ohne Populismus und Filterblasen. Nutze moderne
							KI-Technologie für produktivere Gespräche.
						</p>

						<div
							class="animate-in fade-in slide-in-from-bottom-10 flex flex-wrap justify-center gap-6 duration-1000 lg:justify-start"
						>
							<a
								href="https://apps.apple.com/de/app/background/id6474905103"
								class="transition-transform hover:scale-105 active:scale-95"
								aria-label="Download on the App Store"
							>
								<img src={appStoreLogo} alt="App Store" class="h-20 w-auto" />
							</a>
							<a
								href="https://play.google.com/store/apps/details?id=com.background.background"
								class="transition-transform hover:scale-105 active:scale-95"
								aria-label="Get it on Google Play"
							>
								<img src={playStoreLogo} alt="Google Play" class="h-20 w-auto" />
							</a>
						</div>
					</div>
					<div class="animate-in fade-in zoom-in flex-1 duration-1000">
						<img
							src={heroIllustration}
							alt="Background App Illustration"
							class="mx-auto w-full max-w-xl"
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- Supporter Section -->
		<section class="border-y border-slate-100 bg-slate-50/50 py-12">
			<div class="container mx-auto px-4 sm:px-6">
				<p class="mb-10 text-center text-sm font-semibold tracking-widest text-slate-400 uppercase">
					Unterstützt durch
				</p>
				<div class="flex flex-wrap items-center justify-center gap-12 grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100 md:gap-20">
					{#each supporters as supporter (supporter.name)}
						<a href={supporter.url} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center">
							<img src={supporter.logo} alt={supporter.name} class="h-12 w-auto object-contain md:h-16" title={supporter.name} />
						</a>
					{/each}
				</div>
			</div>
		</section>

		<!-- Features Grid -->
		<section class="bg-slate-50 py-24">
			<div class="container mx-auto px-4 sm:px-6">
				<div class="mb-16 text-center">
					<h2 class="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
						Warum Background?
					</h2>
				</div>
				<div class="grid gap-8 md:grid-cols-2">
					{#each features as feature (feature.title)}
						<div
							class="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-300 hover:shadow-xl"
						>
							<div
								class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl text-4xl transition-transform duration-300 group-hover:scale-110 {feature.color}"
							>
								{feature.icon}
							</div>
							<h3 class="mb-4 text-2xl font-bold text-slate-900">
								{feature.title}
							</h3>
							<p class="leading-relaxed text-slate-600">
								{feature.description}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Mission Statement -->
		<section class="py-24">
			<div class="container mx-auto px-4 sm:px-6">
				<div class="flex flex-col items-center gap-16 lg:flex-row">
					<div class="order-2 flex-1 lg:order-1">
						<img src={peopleTalking} alt="People talking" class="mx-auto w-full max-w-lg" />
					</div>
					<div class="order-1 max-w-2xl flex-1 lg:order-2">
						<h2 class="mb-8 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
							Ein Team. Eine Vision.
						</h2>
						<p class="text-xl leading-relaxed text-slate-600 md:text-2xl">
							Wir glauben, dass ein guter Austausch über kontroverse Themen, gerade in Zeiten von
							Populismus und zunehmender gesellschaftlicher Spaltung extrem wichtig ist. Daher
							setzen wir uns für mehr Verständnis und Zusammenhalt innerhalb der Gesellschaft ein.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Data Privacy Banner -->
		<section class="border-y border-blue-100 bg-blue-50 py-16">
			<div class="container mx-auto px-4 sm:px-6">
				<div class="flex flex-col items-center justify-between gap-8 md:flex-row">
					<div class="max-w-2xl text-center md:text-left">
						<h3 class="mb-2 text-2xl font-bold text-slate-900">Deine Daten bleiben sicher.</h3>
						<p class="text-slate-600">
							Wir respektieren deine Privatsphäre. Deine Daten bleiben sicher und werden nicht an
							Dritte weitergegeben. Anonyme 1-zu-1-Chats schützen deine Identität.
						</p>
					</div>
					<a
						href="/datenschutz"
						class="font-semibold whitespace-nowrap text-blue-600 hover:underline"
					>
						Erfahre mehr über Datenschutz →
					</a>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
