import type { PassThrough } from 'primevue/ts-helpers';
import type { CalendarPassThroughOptions } from 'primevue/calendar';

export default {
	root: () => ({
		class: ['flex h-7'],
	}),
	input: ({ state }) => ({
		class: [
			'border-2 border-surface-200 rounded focus:border-primary-400 outline-none pl-1 transition duration-300',
			{ 'border-primary-400': state.overlayVisible },
		],
	}),
	panel: () => ({
		class: ['bg-white shadow p-4'],
	}),
	header: () => ({
		class: ['w-full flex justify-between'],
	}),
	monthTitle: () => ({
		class: ['mr-1'],
	}),
	tableHeaderCell: () => ({
		class: ['p-2 text-center'],
	}),
	day: ({ context }) => ({
		class: ['p-2 text-center rounded-3xl', context.disabled ? 'cursor-default' : 'cursor-pointer'],
	}),
	dayLabel: ({ context }) => ({
		class: [
			'flex justify-center items-center w-6 h-6 rounded-xl',
			{ 'text-white bg-primary-500': context.selected },
			{ 'font-bold': context.today },
			{ 'text-surface-400': context.disabled },
		],
	}),
} as PassThrough<CalendarPassThroughOptions>;
