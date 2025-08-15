import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Adcyma',
  tagline: 'Lightweight IAM',
  favicon: 'img/faviconAdcyma.ico',
  url: 'https://docs.adcyma.com',
  baseUrl: '/',  
  organizationName: 'adcyma',
  projectName: 'Docs',  
  trailingSlash: false,
  onBrokenLinks: 'warn',  // Changed from throw to warn temporarily
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 95,
        max: 3840, // up to 4K width variants
        min: 320,
        steps: 9,
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Adcyma/Docs/tree/main/',
          path: 'v1',
          routeBasePath: 'v1',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/Adcyma/Docs/tree/main/',  
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
  image: 'img/docusaurus-social-card.jpg',  
    navbar: {
      title: '',  
      logo: {
        alt: 'Adcyma Logo',
        src: 'img/logo.svg',
        href: 'https://docs.adcyma.com/v1/start',
      },
      items: [
        
        {
          href: 'https://github.com/adcyma/docs',  
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Adcyma.com',
              href: 'https://adcyma.com',
            },
            {
              label: 'Adcyma Portal',
              href: 'https://app.adcyma.com',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/101592429',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://adcyma.com/blog',
            },
            {
              href: 'https://github.com/adcyma/docs',  // Updated to your repo
              label: 'GitHub',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Adcyma AB`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;