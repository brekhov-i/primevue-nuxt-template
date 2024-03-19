import type { PassThrough } from 'primevue/ts-helpers';
import type { CardPassThroughOptions } from 'primevue/card';

export default {
	root: () => ({
		class: ['shadow p-4 min-w-[300px] rounded'],
	}),
	title: () => ({
		class: ['font-bold text-xl mb-3'],
	}),
	subtitle: () => ({
		class: ['text-sm'],
	}),
} as PassThrough<CardPassThroughOptions>;
