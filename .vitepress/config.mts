import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    base: '/maintainers',
    title: "CosmWasm Guide",
    description: "Guide for CosmWasm maintainers & contributors",
    head: [['link', {rel: 'icon', href: '/maintainers/cosmwasm-small.svg'}]],
    themeConfig: {
        logo: '/cosmwasm-small.svg',
        nav: [
            {
                text: 'Guide',
                items: [
                    {text: 'Introduction', link: '/guide/introduction'},
                    {text: 'Overview', link: '/guide/overview'},
                ],

            },
            {
                text: 'Miscellaneous',
                items: [
                    {text: 'Checks in GitHub actions', link: '/guide/miscellaneous/checks-in-github-actions'},
                ]
            },
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    {text: 'Introduction', link: '/guide/introduction'},
                    {text: 'Overview', link: '/guide/overview'},
                ],
            },
            {
                text: 'Miscellaneous',
                items: [
                    {text: 'Checks in GitHub actions', link: '/guide/miscellaneous/checks-in-github-actions'},
                ]
            },
        ],
        search: {
            provider: 'local'
        }
    },
    markdown: {
        math: true
    },
    srcDir: "pages"
})
