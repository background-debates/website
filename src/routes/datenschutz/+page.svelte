<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Datenschutz | Background</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-[#0A192F] text-white">
	<Header active="datenschutz" />

	<main class="grow py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="max-w-3xl mx-auto">
				<h1 class="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Datenschutz</h1>

				<div class="prose prose-invert prose-blue max-w-none space-y-12">
					<section>
						<h2 class="text-2xl font-bold text-[#00D4FF] mb-6">ALLGEMEINER TEIL</h2>
						<div class="bg-white/5 border border-white/10 p-8 rounded-2xl">
							<h3 class="text-xl font-semibold mb-4">Verantwortlicher und Datenschutzbeauftragter</h3>
							<div class="space-y-4 text-white/70">
								<p>
									<strong class="text-white block">Verantwortlicher</strong>
									Background by Fulton & Bock GbR<br />
									Josefstraße 192<br />
									52080 Aachen
								</p>
								<p>
									<strong class="text-white block">Kontaktdaten des Datenschutzbeauftragten:</strong>
									<a href="mailto:info@background-app.de" class="text-[#00D4FF] hover:underline">info@background-app.de</a>
								</p>
							</div>
						</div>
					</section>

					<section>
						<h3 class="text-xl font-semibold mb-4">Erfassung allgemeiner Daten und Informationen</h3>
						<p class="text-white/70 leading-relaxed mb-4">
							Sofern Du unsere Webseite besuchst, werden die Internetverbindungsdaten, die Dein Browser an unseren Server übermittelt, verarbeitet. Unsere Webseite erfasst mit jedem Aufruf eine Reihe von allgemeinen Daten und Informationen. Erfasst werden dabei:
						</p>
						<ul class="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
							{#each ['IP-Adresse', 'Internet-Service-Provider', 'Verwendete Software (Betriebssystem, Browser)', 'Referenz-Daten', 'Datum und Uhrzeit'] as item (item)}
								<li class="flex items-center gap-3 bg-white/3 p-3 rounded-lg border border-white/5 text-sm text-white/80">
									<span class="text-[#00D4FF]">→</span> {item}
								</li>
							{/each}
						</ul>
					</section>

					<section>
						<h3 class="text-xl font-semibold mb-4">Links</h3>
						<p class="text-white/70 leading-relaxed">
							Unsere Webseite enthält Links auf andere Internetseiten. Bedenke, dass diese externen Webseiten ihre eigenen Datenschutzhinweise haben. Bitte informiere Dich dort über die jeweiligen Bestimmungen.
						</p>
					</section>

					<section>
						<h3 class="text-xl font-semibold mb-4">Rechte</h3>
						<p class="text-white/70 leading-relaxed">
							Neben unseren Datenschutzhinweisen gelten auch die Datenschutzhinweise gemäß EU-Datenschutz-Grundverordnung Kapitel 3 – Rechte der betroffenen Person – Datenschutz-Grundverordnung (DSGVO) (<a href="https://dsgvo-gesetz.de" target="_blank" class="text-[#00D4FF] hover:underline">dsgvo-gesetz.de</a>). Dort findest Du eine Auflistung über Deine Rechte. Wenn Du Fragen betreffend Deiner Rechte bezüglich der Erhebung, Verarbeitung und/oder der Nutzung Deiner personenbezogenen Daten hast, kontaktiere uns bitte.
						</p>
					</section>

					<section>
						<h3 class="text-xl font-semibold mb-4">Änderung der Datenschutzhinweise</h3>
						<p class="text-white/70 leading-relaxed italic">
							Um zu gewährleisten, dass unsere Datenschutzhinweise stets den aktuellen gesetzlichen Vorgaben entsprechen, behalten wir uns jederzeit Änderungen vor. Letzte Änderung: April 2022
						</p>
					</section>

					<section class="border-t border-white/10 pt-12">
						<h2 class="text-2xl font-bold text-[#00D4FF] mb-6">Newsletter</h2>
						<div class="space-y-6 text-white/70 leading-relaxed">
							<p>
								Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
							</p>
							<p>
								Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung können Sie jederzeit widerrufen.
							</p>
							<div class="bg-[#00D4FF]/5 border-l-4 border-[#00D4FF] p-6 rounded-r-xl">
								<p class="text-sm">
									Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden bis zu Ihrer Austragung gespeichert. Nach Ihrer Austragung wird Ihre E-Mail-Adresse ggf. in einer Blacklist gespeichert, um künftige Mailings zu verhindern (Art. 6 Abs. 1 lit. f DSGVO).
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

<style>
	/* Custom styling to ensure prose looks good on the dark background */
	:global(.prose h3) {
		color: white !important;
	}
</style>
