<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { Snippet } from 'svelte';

	let openIndex = $state<number | null>(null);

	const faqs: { question: string; answer: Snippet }[] = [
		{ question: 'Wie kann ich meinen Account löschen?', answer: deleteAccount },
		{ question: 'Welche Daten werden gespeichert und warum?', answer: dataStored },
		{ question: 'Wie funktioniert die Ende-zu-Ende Verschlüsselung?', answer: encryptionDetails },
		{ question: 'Wie finde ich Freunde in der App?', answer: findFriends },
		{ question: 'Wie funktioniert das anonyme Matching?', answer: anonymityMatching },
		{ question: 'Welche Rolle spielt KI in der App?', answer: aiGemini },
		{ question: 'Was sind "Creator" und wie folge ich ihnen?', answer: creatorsInfo }
	];

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}

	const faqJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'Wie kann ich meinen Account löschen?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Du kannst deinen Account innerhalb der Background-App unter Profil > Einstellungen > Account löschen entfernen. Die vollständige Löschung dauert bis zu 90 Tage.'
				}
			},
			{
				'@type': 'Question',
				name: 'Welche Daten werden gespeichert und warum?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Wir speichern Abstimmungsverhalten für das KI-Matching, E2E-verschlüsselte Nachrichten (temporär), anonymisierte Metadaten und Telefonnummer-Hashes.'
				}
			},
			{
				'@type': 'Question',
				name: 'Ist meine Kommunikation privat?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Ja, wir nutzen RSA 2048-bit Ende-zu-Ende Verschlüsselung. Nur Sender und Empfänger können Nachrichten lesen.'
				}
			}
		]
	};

	const faqJsonLdScript =
		`<script type="application/ld+json">${JSON.stringify(faqJsonLd).replace(/</g, '\\u003c')}` +
		`</` +
		`script>`;
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html faqJsonLdScript}
</svelte:head>

{#snippet deleteAccount()}
	<p class="mb-4">
		Du kannst deinen Account nur innerhalb der Background-App löschen. Diese Aktion ist
		unwiderruflich.
	</p>
	<p class="mb-2 font-semibold">So löschst du deinen Account:</p>
	<ol class="mb-4 ml-6 list-decimal space-y-1">
		<li>Öffne die Background-App.</li>
		<li>Gehe zu deinem Profil.</li>
		<li>Öffne die Einstellungen (drei Punkte oben rechts).</li>
		<li>Wähle "Account löschen" und bestätige den Vorgang.</li>
	</ol>
	<p class="mb-2 font-semibold">Wichtige Hinweise:</p>
	<ul class="ml-6 list-disc space-y-1 text-slate-600">
		<li>Sofortiger Verlust des Account-Zugriffs.</li>
		<li>Vollständige Datenlöschung innerhalb von 90 Tagen.</li>
		<li>Bereits auf Endgeräten von Kontakten gespeicherte Nachrichten bleiben dort erhalten.</li>
	</ul>
{/snippet}

{#snippet dataStored()}
	<p class="mb-4">
		Wir minimieren die Datenspeicherung auf das notwendige Minimum für die Funktionalität.
	</p>
	<div class="overflow-x-auto rounded-xl border border-slate-200">
		<table class="w-full text-left text-sm">
			<thead class="bg-slate-50 text-slate-900">
				<tr>
					<th class="px-4 py-3 font-semibold">Datentyp</th>
					<th class="px-4 py-3 font-semibold">Zweck</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-slate-200 text-slate-600">
				<tr>
					<td class="px-4 py-3 font-medium text-slate-900">Abstimmungen</td>
					<td class="px-4 py-3">Training der KI für präziseres User-Matching.</td>
				</tr>
				<tr>
					<td class="px-4 py-3 font-medium text-slate-900">Metadaten</td>
					<td class="px-4 py-3">Anonymisierte Analyse zur Verbesserung der App-Erfahrung.</td>
				</tr>
				<tr>
					<td class="px-4 py-3 font-medium text-slate-900">Nachrichten</td>
					<td class="px-4 py-3">E2E-verschlüsselt; Löschung nach Zustellung an den Empfänger.</td>
				</tr>
				<tr>
					<td class="px-4 py-3 font-medium text-slate-900">Kontakte</td>
					<td class="px-4 py-3">SHA-256 Hashes zur sicheren Identifizierung von Kontakten.</td>
				</tr>
			</tbody>
		</table>
	</div>
{/snippet}

{#snippet encryptionDetails()}
	<p class="mb-4">
		Deine Privatsphäre ist technisch garantiert. Background App nutzt eine echte **Ende-zu-Ende (E2E) Verschlüsselung**.
	</p>
	<ul class="ml-6 list-disc space-y-2 text-slate-600">
		<li><strong>RSA 2048-bit:</strong> Beim ersten Start generiert dein Gerät ein individuelles Schlüsselpaar.</li>
		<li><strong>Privater Schlüssel:</strong> Dieser verlässt niemals dein Handy.</li>
		<li><strong>Sicherheit:</strong> Niemand außer dir und deinem Chatpartner kann die Inhalte lesen – auch wir als Betreiber nicht.</li>
	</ul>
{/snippet}

{#snippet findFriends()}
	<p class="mb-4">
		Du kannst Freunde sicher über Einladungen hinzufügen:
	</p>
	<ul class="ml-6 list-disc space-y-2 text-slate-600">
		<li>Navigiere zu <strong>Profil > Kontakte</strong>.</li>
		<li>Erstelle einen Einladungs-Link (Token) und teile ihn mit Freunden.</li>
		<li>Nach Annahme der Einladung könnt ihr die Antworten des jeweils anderen sehen.</li>
	</ul>
{/snippet}

{#snippet anonymityMatching()}
	<p class="mb-4">
		Das Herzstück der App ist das anonyme Diskussions-Matching:
	</p>
	<ul class="ml-6 list-disc space-y-2 text-slate-600">
		<li>Du wirst basierend auf deiner Meinung zu spezifischen Fragen gematcht.</li>
		<li>Dein Profil bleibt für den Gegenüber komplett anonym.</li>
		<li>Dies ermöglicht einen ehrlichen Austausch ohne Vorurteile.</li>
	</ul>
{/snippet}

{#snippet aiGemini()}
	<p class="mb-4">
		Wir setzen modernste KI-Technologie ein, um den Dialog zu bereichern:
	</p>
	<ul class="ml-6 list-disc space-y-2 text-slate-600">
		<li><strong>Google Gemini 2.0 Flash:</strong> Unsere KI analysiert komplexe Fragen und schlägt relevante Diskussionsthemen vor.</li>
		<li><strong>Argumentationshilfe:</strong> Die KI kann Pro- und Contra-Argumente generieren, um dir zu helfen, eine fundierte Meinung zu bilden oder andere Sichtweisen zu verstehen.</li>
	</ul>
{/snippet}

{#snippet creatorsInfo()}
	<p class="mb-4">
		Creators sind Nutzer, die aktiv zur Community beitragen:
	</p>
	<ul class="ml-6 list-disc space-y-2 text-slate-600">
		<li>Jeder Nutzer kann zum Creator werden und eigene Fragen veröffentlichen.</li>
		<li>Du kannst Creatoren folgen, um sofort über neue Fragen und Diskussionsthemen informiert zu werden.</li>
		<li>In deinem Feed siehst du priorisiert die Inhalte der Creatoren, denen du folgst.</li>
	</ul>
{/snippet}

<div class="flex min-h-screen flex-col bg-white text-slate-900 selection:bg-blue-100">
	<Header active="faq" />

	<main class="grow py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="mx-auto max-w-3xl">
				<div class="mb-12 text-center">
					<h1 class="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
						Häufig gestellte Fragen
					</h1>
					<p class="text-lg text-slate-600">
						Hier findest du Antworten auf technische Details und Funktionen der Background-App.
					</p>
				</div>

				<div class="space-y-4">
					{#each faqs as faq, i (i)}
						<div
							class="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-blue-200"
						>
							<button
								onclick={() => toggle(i)}
								class="flex w-full items-center justify-between p-6 text-left"
								aria-expanded={openIndex === i}
							>
								<span class="text-lg font-semibold text-slate-900">{faq.question}</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									class="h-5 w-5 text-slate-500 transition-transform duration-200 {openIndex === i
										? 'rotate-180'
										: ''}"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</button>
							{#if openIndex === i}
								<div class="px-6 pb-6 text-slate-600">
									<div class="prose max-w-none prose-slate">
										{@render faq.answer()}
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div>

				<div class="mt-16 rounded-2xl bg-slate-50 p-8 text-center">
					<h2 class="mb-4 text-xl font-bold text-slate-900">Hast du weitere Fragen?</h2>
					<p class="mb-6 text-slate-600">
						Schreib uns gerne eine E-Mail, wir helfen dir gerne weiter.
					</p>
					<a
						href="mailto:info@background-app.de"
						class="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
					>
						Kontakt aufnehmen
					</a>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</div>
