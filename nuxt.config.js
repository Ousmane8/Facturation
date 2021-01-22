export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Facturation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'},
      { rel:"stylesheet" , href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", id:"bootstrap-css"},
      { src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"},
      { src:"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"},
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  // nuxt.config.js

  axios: {
    baseURL: 'http://hidden-forest-44147.herokuapp.com/auth/register'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '', method: 'post', propertyName: 'data.token' },
          user: { url: '', method: 'post', propertyName: 'data' },
          logout: false
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
