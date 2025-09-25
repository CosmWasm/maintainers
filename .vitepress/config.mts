import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    base: '/maintainers',
    title: "CosmWasm Guide",
    description: "Guide for CosmWasm maintainers",
    head: [['link', {rel: 'icon', href: '/cosmwasm-small.svg'}]],
    themeConfig: {
        logo: '/cosmwasm-small.svg',
        nav: [
            {
                text: 'Guide',
                items: [
                    {text: 'Introduction', link: '/guide/introduction'},
                    {text: 'Overview', link: '/guide/overview'},
                ]
            }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    {text: 'Introduction', link: '/guide/introduction'},
                    {text: 'Overview', link: '/guide/overview'},
                ]
            }
        ],
        search: {
            provider: 'local'
        }
    },
    srcDir: "pages"
})
