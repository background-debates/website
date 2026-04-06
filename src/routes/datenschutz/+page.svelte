<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Datenschutz | Background</title>
</svelte:head>

<div class="flex min-h-screen flex-col bg-white text-slate-900 selection:bg-blue-100">
	<Header />

	<main class="grow py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="mx-auto max-w-3xl">
				<h1 class="mb-12 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
					Datenschutz
				</h1>

				<div class="prose max-w-none space-y-12">
					<section>
						<h2 class="mb-6 text-2xl font-bold text-blue-600">ALLGEMEINER TEIL</h2>
						<div class="rounded-2xl border border-slate-200 bg-white p-8">
							<h3 class="mb-4 text-xl font-semibold text-slate-900">
								Verantwortlicher und Datenschutzbeauftragter
							</h3>
							<div class="space-y-4 text-slate-600">
								<p>
									<strong class="block text-slate-900">Verantwortlicher</strong>
									Background by Fulton & Bock GbR<br />
									Josefstraße 192<br />
									52080 Aachen
								</p>
								<p>
									<strong class="block text-slate-900"
										>Kontaktdaten des Datenschutzbeauftragten:</strong
									>
									<a href="mailto:info@background-app.de" class="text-blue-600 hover:underline"
										>info@background-app.de</a
									>
								</p>
							</div>
						</div>
					</section>

					<section>
						<h3 class="mb-4 text-xl font-semibold text-slate-900">
							Erfassung allgemeiner Daten und Informationen
						</h3>
						<p class="mb-4 leading-relaxed text-slate-600">
							Sofern Du unsere Webseite besuchst, werden die Internetverbindungsdaten, die Dein
							Browser an unseren Server übermittelt, verarbeitet. Unsere Webseite erfasst mit jedem
							Aufruf eine Reihe von allgemeinen Daten und Informationen. Erfasst werden dabei:
						</p>
						<ul class="grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2">
							{#each ['IP-Adresse', 'Internet-Service-Provider', 'Verwendete Software (Betriebssystem, Browser)', 'Referenz-Daten', 'Datum und Uhrzeit'] as item (item)}
								<li
									class="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700"
								>
									<span class="text-blue-600">→</span>
									{item}
								</li>
							{/each}
						</ul>
					</section>

					<section>
						<h3 class="mb-4 text-xl font-semibold text-slate-900">Links</h3>
						<p class="leading-relaxed text-slate-600">
							Unsere Webseite enthält Links auf andere Internetseiten. Bedenke, dass diese externen
							Webseiten ihre eigenen Datenschutzhinweise haben. Bitte informiere Dich dort über die
							jeweiligen Bestimmungen.
						</p>
					</section>

					<section>
						<h3 class="mb-4 text-xl font-semibold text-slate-900">Rechte</h3>
						<p class="leading-relaxed text-slate-600">
							Neben unseren Datenschutzhinweisen gelten auch die Datenschutzhinweise gemäß
							EU-Datenschutz-Grundverordnung Kapitel 3 – Rechte der betroffenen Person –
							Datenschutz-Grundverordnung (DSGVO) (<a
								href="https://dsgvo-gesetz.de"
								target="_blank"
								class="text-blue-600 hover:underline">dsgvo-gesetz.de</a
							>). Dort findest Du eine Auflistung über Deine Rechte. Wenn Du Fragen betreffend
							Deiner Rechte bezüglich der Erhebung, Verarbeitung und/oder der Nutzung Deiner
							personenbezogenen Daten hast, kontaktiere uns bitte.
						</p>
					</section>

					<section>
						<h3 class="mb-4 text-xl font-semibold text-slate-900">
							Änderung der Datenschutzhinweise
						</h3>
						<p class="leading-relaxed text-slate-600 italic">
							Um zu gewährleisten, dass unsere Datenschutzhinweise stets den aktuellen gesetzlichen
							Vorgaben entsprechen, behalten wir uns jederzeit Änderungen vor. Letzte Änderung:
							April 2022
						</p>
					</section>

					<section class="border-t border-slate-200 pt-12">
						<h2 class="mb-6 text-2xl font-bold text-blue-600">Newsletter</h2>
						<div class="space-y-6 leading-relaxed text-slate-600">
							<p>
								Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir
								von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung
								gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem
								Empfang des Newsletters einverstanden sind.
							</p>
							<p>
								Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt
								ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die
								erteilte Einwilligung können Sie jederzeit widerrufen.
							</p>
							<div class="rounded-r-xl border-l-4 border-blue-600 bg-blue-50 p-6">
								<p class="text-sm">
									Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden
									bis zu Ihrer Austragung gespeichert. Nach Ihrer Austragung wird Ihre
									E-Mail-Adresse ggf. in einer Blacklist gespeichert, um künftige Mailings zu
									verhindern (Art. 6 Abs. 1 lit. f DSGVO).
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</div>
