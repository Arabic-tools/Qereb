import colors from 'vuetify/es5/util/colors'

export default {
 server: {
    port: 3005 // default: 3000
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'قريب : بحث في جميع محركات البحث | بحث متقدم | بحث بالصور | بحث شامل    ',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'اكتب الكلمة المراد البحث عنها مره واحد فقط وابحث في جميع المواقع بضغطة زر.منصة قريب تمكنك من البحث في جميع محركات البحث, قوقل, يوتيوب, انستقرام, تويتر و فيس بوك و غيرها الكثير بضغة زر واحده. بحث متقدم و بحث بالصور و كذلك البحث في محرك البحث الروسي او محرك بحث الصيني.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src: '~/plugins/hotjar.js', mode: 'client'}],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
 ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-fonts'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    rtl : true ,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  googleFonts: {
    families: {
      Roboto: true,
      'IBM+Plex+Sans+Arabic': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  }
,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
