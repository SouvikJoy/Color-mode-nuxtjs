import path from 'path'
import fs from 'fs'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.APP_NAME,
    titleTemplate: `%s - ${process.env.APP_SHORT_NAME}`,
    htmlAttrs: {
      lang: process.env.APP_LOCALE
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'copyright', name: 'copyright', content: 'Debugger.tech' },
      { hid: 'language', name: 'language', content: process.env.APP_LOCALE },
      { hid: 'robots', name: 'robots', content: 'index,follow' },
      { hid: 'googlebot', name: 'googlebot', content: 'index,follow' },
      { hid: 'Classification', name: 'Classification', content: 'Personal Portfolio' },
      { hid: 'designer', name: 'designer', content: 'Debugger.tech' },
      {
        hid: 'reply-to',
        name: 'reply-to',
        content: 'info@debugger.tech'
      },
      { hid: 'category', name: 'category', content: 'Template' },
      {
        hid: 'format-detection',
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'itemprop-name',
        itemprop: 'name',
        content: process.env.APP_NAME
      },
      {
        hid: 'itemprop-description',
        itemprop: 'description',
        content: process.env.APP_DESCRIPTION
      },
      {
        hid: 'og:title',
        property: 'og:title',
        name: 'og:title',
        content: process.env.APP_NAME
      },
      {
        hid: 'og:description',
        property: 'og:description',
        name: 'og:description',
        content: process.env.APP_DESCRIPTION
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        name: 'og:site_name',
        content: process.env.APP_NAME
      },
      {
        hid: 'og:url',
        property: 'og:url',
        name: 'og:url',
        content: process.env.APP_URL
      },
      {
        hid: 'og:type',
        property: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Personal W'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'A Nuxt PWA starter template with Encrypted Cookies, Express.js, Axios, Vue Router, Passport.js.'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', sizes: '512x512', href: '/favicon-512x512.ico' },
      { rel: 'icon', sizes: '256x256', href: '/favicon-256x256.ico' },
      { rel: 'icon', sizes: '128x128', href: '/favicon-128x128.ico' },
      { rel: 'icon', sizes: '64x64', href: '/favicon-64x64.ico' },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.ico' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    }
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName: 'icon.png'
    },
    manifest: {
      lang: 'en-US',
      name: process.env.APP_NAME,
      short_name: process.env.APP_SHORT_NAME,
      description: process.env.APP_DESCRIPTION,
      categories: ['portfolio', 'bio'],
      theme_color: process.env.THEME_COLOR,
      background_color: '#fff',
      crossorigin: 'use-credentials',
      orientation: 'portrait-primary'

    }
  },

  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ''
  },
  router: {
    linkExactActiveClass: 'text-green-500'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
