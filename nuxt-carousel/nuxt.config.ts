// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','nuxt-svgo'],
  app: {
    baseURL: 'https://github.com/SharylCutinha/myprojects.git', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
    head: {
      title: "SC Ecommerce",
      meta: [
        {name: "description"}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
})
