import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		title: 'Datenschutzerklärung',
		description: 'Informationen darüber, wie Background mit deinen persönlichen Daten umgeht.'
	};
};
