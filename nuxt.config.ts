// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', '~/assets/css/fonts.css'],
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/image'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    experimental: {
      tailwindcss4: true,
    },
  },
})