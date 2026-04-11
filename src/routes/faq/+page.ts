import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		title: 'Häufig gestellte Fragen (FAQ)',
		description:
			'Antworten auf häufig gestellte Fragen zur Background-App, Datenschutz und Funktionen.'
	};
};
