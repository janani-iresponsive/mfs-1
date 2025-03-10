// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  imports: {
    autoImport: true
  },
  devServer: {
    port: 5001
  },
  extends: [
    ['github:dikshit-n/mf-core-nlr#master', { install: true }]
  ]
})
