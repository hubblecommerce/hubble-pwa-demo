// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@hubblecommerce/hubble'
    ],
    nitro: {
        // https://github.com/unjs/nitro/pull/449
        compressPublicAssets: true
    }
})
