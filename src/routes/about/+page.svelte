<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import lawImg from '$lib/assets/about-us/law.jpg';
	import seboImg from '$lib/assets/about-us/sebo.jpg';
</script>

<svelte:head>
	<title>Über uns | Background</title>
</svelte:head>

<div class="flex min-h-screen flex-col bg-white text-slate-900 selection:bg-blue-100">
	<Header active="about" />

	<main class="grow">
		<!-- Hero Section -->
		<section class="bg-slate-50 py-20">
			<div class="container mx-auto px-4 sm:px-6">
				<div class="mx-auto max-w-3xl text-center">
					<h1 class="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
						Über Background
					</h1>
					<p class="text-xl leading-relaxed text-slate-600">
						Unsere Mission ist es, den digitalen Diskurs zu verbessern. Mit KI-gestützten Tools und
						nicht-populistischem Dialog helfen wir Nutzerinnen und Nutzern, ihre Filterblasen zu
						durchbrechen und hochwertige, perspektiverweiternde Gespräche zu führen.
					</p>
				</div>
			</div>
		</section>

		<!-- Founders Section -->
		<section class="py-24">
			<div class="container mx-auto px-4 sm:px-6">
				<div class="mb-16 text-center">
					<h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Die Gründer</h2>
					<div class="mt-4 flex justify-center">
						<div class="h-1.5 w-24 rounded-full bg-blue-600"></div>
					</div>
				</div>

				<div class="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
					<!-- Lawrence Fulton -->
					<div
						class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-xl hover:ring-blue-500/50"
					>
						<div class="mb-6 flex justify-center">
							<div
								class="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-slate-50 transition-transform group-hover:scale-105"
							>
								<img src={lawImg} alt="Lawrence Fulton" class="h-full w-full object-cover" />
							</div>
						</div>
						<div class="text-center">
							<h3 class="mb-1 text-2xl font-bold text-slate-900">Lawrence Fulton</h3>
							<p class="mb-4 font-medium text-blue-600">Co-Founder & Software Lead</p>
							<p class="mb-6 leading-relaxed text-slate-600">
								Lawrence hat Artificial Intelligence an der University of Groningen (B.Sc.) und
								Computational Social Systems an der RWTH Aachen (M.Sc.) studiert — mit Schwerpunkten
								in Data Science, Machine Learning, NLP und Netzwerkanalyse. Aktuell arbeitet er als
								Specialist bei PD - Berater der öffentlichen Hand im Bereich Consulting, Digitale
								Transformation und Fullstack-Entwicklung. Bei Background verantwortet er die
								komplette technische Umsetzung — von der Cross-Platform-App (Flutter, iOS & Android)
								über die serverlose Cloud-Architektur bis hin zum erfolgreichen Launch in den App
								Stores.
							</p>
						</div>
					</div>

					<!-- Second Founder (Mock) -->
					<div
						class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-xl hover:ring-blue-500/50"
					>
						<div class="mb-6 flex justify-center">
							<div
								class="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-slate-50 transition-transform group-hover:scale-105"
							>
								<img src={seboImg} alt="Sebastian Bock" class="h-full w-full object-cover" />
							</div>
						</div>
						<div class="text-center">
							<h3 class="mb-1 text-2xl font-bold text-slate-900">Sebastian Bock</h3>
							<p class="mb-4 font-medium text-blue-600">Co-Founder & Product</p>
							<p class="mb-6 leading-relaxed text-slate-600">
								Sebastian hat Philosophie und Sinologie an der Universität Heidelberg (B.A.) sowie
								Computational Social Systems an der RWTH Aachen (M.Sc.) studiert. Sein
								interdisziplinärer Hintergrund — zwischen Geisteswissenschaften,
								Sozialwissenschaften und Informatik — prägt seine Herangehensweise an digitale
								Produkte. Bei Background verantwortet er die Produktentwicklung: von der
								Feature-Konzeption über das Frontend-Design bis hin zur nutzerzentrierten
								Weiterentwicklung der Plattform. Er sorgt dafür, dass jede Funktion den Anspruch von
								Background widerspiegelt — einen Raum für durchdachten, perspektiverweiternden
								Dialog zu schaffen.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
