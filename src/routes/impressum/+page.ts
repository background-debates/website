import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		title: 'Impressum',
		description: 'Rechtliche Informationen und Kontaktangaben von Background.'
	};
};
