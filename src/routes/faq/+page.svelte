<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { Snippet } from 'svelte';

	let openIndex = $state<number | null>(null);

	const faqs: { question: string; answer: Snippet }[] = [
		{ question: 'Wie kann ich meinen Account löschen?', answer: deleteAccount },
		{ question: 'Welche Daten werden gespeichert und warum?', answer: dataStored },
		{ question: 'Wie finde ich Freunde in der App?', answer: findFriends }
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
					text: 'Du kannst deinen Account innerhalb der Background-App unter Profil > Einstellungen (drei Punkte) > Account löschen entfernen. Die vollständige Löschung kann bis zu 90 Tage dauern.'
				}
			},
			{
				'@type': 'Question',
				name: 'Welche Daten werden gespeichert und warum?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Wir speichern Abstimmungsverhalten für das KI-Matching, anonymisierte Metadaten zur Erfolgsmessung, Crash-Logs zur Fehlerbehebung und Telefonnummer-Hashes für die Kontaktsynchronisierung.'
				}
			},
			{
				'@type': 'Question',
				name: 'Wie finde ich Freunde in der App?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Gehe zum Tab Profil > Kontakte, um jemanden einzuladen. Dein Gegenüber muss die Einladung annehmen, bevor ihr interagieren könnt.'
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
		unwiderruflich, auch wenn sie versehentlich erfolgt.
	</p>
	<p class="mb-2 font-semibold">So löschst du deinen Account:</p>
	<ol class="mb-4 ml-6 list-decimal space-y-1">
		<li>Öffne die Background-App.</li>
		<li>Klicke auf dein Profil-Icon.</li>
		<li>Klicke auf die drei Punkte in der oberen rechten Ecke.</li>
		<li>Klicke auf "Account löschen".</li>
		<li>Bestätige, dass du deinen Account löschen möchtest.</li>
	</ol>
	<p class="mb-2 font-semibold">Was passiert, wenn du deinen Account löschst:</p>
	<ul class="ml-6 list-disc space-y-1 text-slate-600">
		<li>Du verlierst sofort den Zugriff auf deinen Account.</li>
		<li>
			Die vollständige Löschung deiner Daten kann bis zu 90 Tage dauern. Während dieser Zeit sind
			deine Informationen nicht verfügbar.
		</li>
		<li>
			Informationen zu von dir erstellten Gruppen oder Nachrichten, die andere Nutzer über dich
			haben, bleiben bestehen.
		</li>
		<li>
			Nachrichten und Abstimmungsverhalten, die bereits auf den Geräten deiner Kontakte geladen
			sind, werden nicht sofort gelöscht.
		</li>
	</ul>
{/snippet}

{#snippet dataStored()}
	<p class="mb-4">
		Unser Ziel ist es, so wenig Daten wie möglich zu speichern und gleichzeitig eine gute
		Nutzererfahrung zu bieten.
	</p>
	<div class="overflow-x-auto rounded-xl border border-slate-200">
		<table class="w-full text-left text-sm">
			<thead class="bg-slate-50 text-slate-900">
				<tr>
					<th class="px-4 py-3 font-semibold">Datentyp</th>
					<th class="px-4 py-3 font-semibold">Grund für die Speicherung</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-slate-200 text-slate-600">
				<tr>
					<td class="px-4 py-3 font-medium text-slate-900">Abstimmungsverhalten</td>
					<td class="px-4 py-3">
						Vergangene Abstimmungen werden gespeichert, um die für das User-Matching erforderliche
						KI zu trainieren und zu verbessern.
					</td>
				</tr>
				<tr>
					<td class="px-4 py-3 font-medium text-slate-900">Metadaten</td>
					<td class="px-4 py-3">
						Daten wie Account-Erstellung und letzte Online-Zeit werden verwendet, um die
						Effektivität von Kampagnen zu messen. Dies erfolgt aggregiert und anonymisiert.
					</td>
				</tr>
				<tr>
					<td class="px-4 py-3 font-medium text-slate-900">Google Crashalytics</td>
					<td class="px-4 py-3">
						Wird zur Auswertung von Crash-Logs und zur Behebung technischer Probleme verwendet, um
						die App zu verbessern.
					</td>
				</tr>
				<tr>
					<td class="px-4 py-3 font-medium text-slate-900">Nachrichten</td>
					<td class="px-4 py-3">
						Nachrichten werden gelöscht, sobald sie vom Empfänger geladen wurden. Sie sind derzeit
						nicht Ende-zu-Ende (E2E) verschlüsselt, woran jedoch gearbeitet wird.
					</td>
				</tr>
				<tr>
					<td class="px-4 py-3 font-medium text-slate-900">Kontakte</td>
					<td class="px-4 py-3">
						Telefonnummern werden als Hashes (SHA-256) gespeichert, um dich zu benachrichtigen, wenn
						ein Kontakt der App beitritt, wobei die Daten sicher und anonym bleiben.
					</td>
				</tr>
			</tbody>
		</table>
	</div>
{/snippet}

{#snippet findFriends()}
	<p class="mb-4">
		Um die Antworten deiner Freunde in der App zu sehen, musst du sie zuerst hinzufügen:
	</p>
	<ul class="ml-6 list-disc space-y-2 text-slate-600">
		<li>
			Gehe zum Tab <strong>Profil</strong> und dann auf <strong>"Kontakte"</strong>, um jemanden
			einzuladen.
		</li>
		<li>
			Dein Freund muss die Einladung annehmen, bevor ihr interagieren oder die Antworten des anderen
			sehen könnt.
		</li>
		<li>Du kannst Freunde jederzeit im selben Tab "Kontakte" wieder entfernen.</li>
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
						Hier findest du Antworten auf die am häufigsten gestellten Fragen zur Background-App.
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
