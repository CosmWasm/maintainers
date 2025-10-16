import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'CosmWasm Guide',
  favicon: 'img/cosmwasm-small.svg',

  future: {
    v4: true,
  },

  url: 'https://cosmwasm.github.io',
  baseUrl: '/maintainers/',
  trailingSlash: false,

  organizationName: 'cosmwasm',
  projectName: 'maintainers',
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CosmWasm Guide',
      logo: {
        alt: 'CosmWasm Logo',
        src: 'img/cosmwasm-small.svg',
      },
      items: [
        {
          href: 'https://github.com/CosmWasm',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'CosmWasm Guide for Maintainers and Contributors',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/CosmWasm',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['Bash', 'TOML', 'Rust', 'JSON'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-no-coverage',
          line: 'no-coverage',
          block: {start: 'no-coverage-start', end: 'no-coverage-end'},
        },
        {
          className: 'code-block-with-coverage',
          line: 'with-coverage',
          block: {start: 'with-coverage-start', end: 'with-coverage-end'},
        },
      ],
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true
  },

  themes: [
    '@docusaurus/theme-mermaid'
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    'https://fonts.googleapis.com/css2?family=Iceland&display=swap'
  ],
};

export default config;
