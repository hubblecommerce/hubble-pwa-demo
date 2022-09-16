// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@hubblecommerce/hubble'
    ],
    experimental: {
        // https://github.com/nuxt/framework/issues/7517
        treeshakeClientOnly: false,
        // If components: global = true => all styles would be used inline. To avoid this use:
        inlineSSRStyles: false
    },
    nitro: {
        // https://github.com/unjs/nitro/pull/449
        compressPublicAssets: true
    },
    components: {
        // Register all your components globally, which will create async chunks for all your components
        // and prevent global prefetching
        global: true,
        dirs: ['~/components']
    },
})
