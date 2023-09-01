export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Martz Blog",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "a blog about my journey as a developer",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800&family=Poppins:wght@100;200;400;600;800&display=swap",
        rel: "stylesheet",
      },
    ],
  },
  loading: { color: "#fff", height: "5px", duration: "10000" },
  // loadingIndicator:{color: '#45FFCA',name:'circle'},
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],
  router: {
    middleware: "auth",
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: ["@nuxtjs/axios"],
  axios: {
    baseUrl:
      process.env.BASEURL ||
      "https://blogging-nuxt-app-default-rtdb.firebaseio.com",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    fbAPIKEY: "AIzaSyArHl8uRUHTlPamFQu3nR-Egs9pqkyNbZU",
  },

  transition: {
    name: "fade",
    mode: "out-in",
  },
};
