<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Impressum | Background</title>
</svelte:head>

<div class="flex min-h-screen flex-col bg-white text-slate-900 selection:bg-blue-100">
	<Header />

	<main class="grow py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="mx-auto max-w-3xl">
				<h1 class="mb-12 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
					Impressum
				</h1>

				<div class="space-y-10 rounded-2xl border border-slate-200 bg-white p-10">
					<section>
						<h2 class="mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
							Angaben gemäß § 5 TMG
						</h2>
						<div class="text-xl leading-relaxed text-slate-600">
							<p class="mb-2 text-2xl font-bold text-slate-900">Background by Fulton & Bock GbR</p>
							<p>Josefstraße 192</p>
							<p>52080 Aachen</p>
						</div>
					</section>

					<section>
						<h2 class="mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
							Gesellschafter
						</h2>
						<p class="text-xl text-slate-600">Lawrence Fulton und Sebastian Bock</p>
					</section>

					<div class="grid gap-10 md:grid-cols-2">
						<section>
							<h2 class="mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
								Kontakt
							</h2>
							<div class="space-y-2 text-lg text-slate-600">
								<p><span class="inline-block w-20 text-slate-400">Telefon:</span> 0179 6132220</p>
								<p>
									<span class="inline-block w-20 text-slate-400">E-Mail:</span>
									<a href="mailto:info@background-app.de" class="text-blue-600 hover:underline"
										>info@background-app.de</a
									>
								</p>
							</div>
						</section>

						<section>
							<h2 class="mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
								Umsatzsteuer-ID
							</h2>
							<p class="text-lg text-slate-600">
								<span class="text-slate-400"
									>Umsatzsteuer-Identifikationsnummer gem. § 27a UStG:</span
								><br />
								DE452930508
							</p>
						</section>
					</div>

					<section class="border-t border-slate-200 pt-8">
						<h2 class="mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
							Inhaltlich Verantwortlicher
						</h2>
						<p class="text-lg text-slate-600">Lawrence Fulton</p>
					</section>
				</div>

				<p class="mt-12 max-w-2xl text-sm leading-relaxed text-slate-400">
					Hinweis: Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
					Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr
					übernehmen.
				</p>
			</div>
		</div>
	</main>

	<Footer />
</div>
