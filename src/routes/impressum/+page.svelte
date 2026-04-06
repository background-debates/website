<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Impressum | Background</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-[#0A192F] text-white">
	<Header active="impressum" />

	<main class="flex-grow py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="max-w-3xl mx-auto">
				<h1 class="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Impressum</h1>

				<div class="bg-white/5 border border-white/10 p-10 rounded-2xl space-y-10">
					<section>
						<h2 class="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">Angaben gemäß § 5 TMG</h2>
						<div class="text-xl text-white/90 leading-relaxed">
							<p class="font-bold text-2xl text-white mb-2">Background by Fulton & Bock GbR</p>
							<p>Josefstraße 192</p>
							<p>52080 Aachen</p>
						</div>
					</section>

					<section>
						<h2 class="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">Gesellschafter</h2>
						<p class="text-xl text-white/90">Lawrence Fulton und Sebastian Bock</p>
					</section>

					<div class="grid md:grid-cols-2 gap-10">
						<section>
							<h2 class="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">Kontakt</h2>
							<div class="space-y-2 text-lg text-white/90">
								<p><span class="text-white/40 inline-block w-20">Telefon:</span> 0179 6132220</p>
								<p>
									<span class="text-white/40 inline-block w-20">E-Mail:</span>
									<a href="mailto:info@background-app.de" class="text-[#00D4FF] hover:underline">info@background-app.de</a>
								</p>
							</div>
						</section>

						<section>
							<h2 class="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">Umsatzsteuer-ID</h2>
							<p class="text-lg text-white/90">
								<span class="text-white/40">Umsatzsteuer-Identifikationsnummer gem. § 27a UStG:</span><br />
								DE452930508
							</p>
						</section>
					</div>

					<section class="pt-8 border-t border-white/10">
						<h2 class="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">Inhaltlich Verantwortlicher</h2>
						<p class="text-lg text-white/90">Lawrence Fulton</p>
					</section>
				</div>
				
				<p class="mt-12 text-sm text-white/40 leading-relaxed max-w-2xl">
					Hinweis: Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
				</p>
			</div>
		</div>
	</main>

	<Footer />
</div>
