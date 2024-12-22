import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Adcyma',
  tagline: 'Lightweight IAM',
  favicon: 'img/faviconAdcyma.ico',
  url: 'https://adcyma.github.io',
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

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/adcyma/Docs/tree/main/',  
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/adcyma/Docs/tree/main/',  
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
    image: 'img/AdcymaLogo__1_-removebg-preview.png',  
    navbar: {
      title: 'Adcyma',  
      logo: {
        alt: 'Adcyma Logo',
        src: 'img/AdcymaLogo__1_-removebg-preview.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/adcyma/Docs',  
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',  // Points to intro.md
            },
          ],
        },
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
              href: 'https://github.com/adcyma/Docs',  // Updated to your repo
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