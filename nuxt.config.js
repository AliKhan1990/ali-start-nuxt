module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ali-start-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,  maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui' },
      { name: 'screen-orientation', content: 'portrait'},
      { name: 'apple-mobile-web-app-capable', content: 'yes'},
      { name: 'format-detection', content: 'telephone=no'},
      { name: 'full-screen', content: 'no'},
      { name: 'x5-fullscreen', content: 'true'},
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { innerHTML: require('./assets/js/flexible-nuxt'), type: 'text/javascript', charset: 'utf-8' }
    ],
    // 不对<script>标签中内容做转义处理
    __dangerouslyDisableSanitizers: ['script']
  },
  css: [
    'assets/main.css'
  ],
  plugins: [
    { src: '~plugins/vue-notifications' },
    { ssr: false}
  ],
  router: {
    middlewarejs: 'auth'
  },
  transition: 'page',
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // 添加 alias 配置
        Object.assign(config.resolve.alias, {
          'utils': path.resolve(__dirname, 'utils')
        })
      }
    }
  }
}
