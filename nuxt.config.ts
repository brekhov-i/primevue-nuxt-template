import path from 'path';
import locale from '~/presets/profitLiga/locale';

export default defineNuxtConfig({
	app: {},
	css: ['~/assets/styles/vars.scss', '~/assets/styles/main.scss'],
	modules: ['nuxt-primevue', '@nuxtjs/tailwindcss', '@vite-pwa/nuxt'],
	primevue: {
		options: {
			unstyled: true,
			locale,
			inputStyle: 'outlined',
			ripple: true,
		},
		usePrimeVue: true,
		importPT: { from: path.resolve(__dirname, './presets/profitLiga/') },
	},
	devtools: { enabled: true },
});
