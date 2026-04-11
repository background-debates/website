import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		title: 'Über uns',
		description:
			'Erfahre mehr über Background und unser Team. Wir setzen uns für mehr Verständnis und Zusammenhalt innerhalb der Gesellschaft ein.'
	};
};
