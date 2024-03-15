import path from 'path';
export default defineNuxtConfig({
  app: {},
  css: [
    '~/assets/styles/vars.scss',
    '~/assets/styles/main.scss'
  ],
  modules: [
    'nuxt-primevue',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],
  primevue: {
    options: {
      unstyled: true
    },
    usePrimeVue: true,
    importPT: { from: path.resolve(__dirname, './presets/profitLiga/') }
  },
  devtools: { enabled: true }
})
