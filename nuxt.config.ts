// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-svgo', "@nuxtjs/tailwindcss", '@nuxt/content', '@pinia/nuxt'],
  content: {
    
  },
  compatibilityDate: '2024-11-02',
})