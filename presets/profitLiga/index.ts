import type { PassThrough } from 'primevue/ts-helpers';

import global from '@/presets/profitLiga/global';
import button from '@/presets/profitLiga/button/index';
import card from '@/presets/profitLiga/Card/index';
import calendar from '~/presets/profitLiga/Calendar';

export default {
	global,
	directives: {},
	button,
	card,
	calendar,
} as PassThrough;
