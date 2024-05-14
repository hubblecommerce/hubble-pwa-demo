// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@hubblecommerce/hubble'
    ],
    nitro: {
        // https://github.com/unjs/nitro/pull/449
        compressPublicAssets: true
    },
    alias: {
        pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs'
    },
    i18n: {
        locales: [
            'de',
            'en'
        ],
        defaultLocale: 'de',
        strategy: 'prefix_and_default',
        detectBrowserLanguage: false
    }
})
