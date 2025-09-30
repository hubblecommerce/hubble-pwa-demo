// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },
    modules: [
        '@hubblecommerce/hubble'
    ],
    nitro: {
        // https://github.com/unjs/nitro/pull/449
        compressPublicAssets: true
    },
    i18n: {
        locales: [
            'de',
            'en'
        ],
        defaultLocale: 'de',
        strategy: 'prefix_and_default',
        detectBrowserLanguage: false
    },
    imports: {
        dirs: [
            'utils/mapping'
        ]
    },
    css: [
        'assets/css/tailwind.css'
    ],
})
