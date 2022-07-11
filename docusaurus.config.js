// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Feraidoon\'s Blog',
  tagline: 'writing about deep learning and rationality',
  url: 'https://nightmachinery.github.io/',
  baseUrl: '/dblog/',
  // baseUrl: '/',

  trailingSlash: true,
  // https://docusaurus.io/docs/api/docusaurus-config#trailingSlash

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NightMachinery', // Usually your GitHub org/user name.
  projectName: 'dblog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
      'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-PHF99SFLVX',
          anonymizeIP: true,
        },
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          //
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
          ///
          remarkPlugins: [math],
          rehypePlugins: [katex],
          ///
          blogTitle: 'Feraidoon\'s Blog',
          blogDescription: 'Feraidoon writes about machine learning and rationality',
          ///
          feedOptions: {
            type: 'all', // enables the JSON feed, too
          },
          ///
          showReadingTime: true,
          ////
          blogSidebarCount: 0, // disables the sidebar
          //
          // blogSidebarCount: 20,
          ///
          // blogSidebarTitle: 'All posts',
          // blogSidebarCount: 'ALL',
          ////
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Feraidoon\'s Blog',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/NightMachinery/dblog',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     // {
          //     //   label: 'Tutorial',
          //     //   to: '/docs/intro',
          //     // },
          //   ],
          // },
          {
            title: 'Social Media',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/feraidoon-mehri/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/FeraidoonMehri',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog Archive',
                to: '/blog/archive/',
              },
              {
                label: 'Source',
                href: 'https://github.com/NightMachinery/dblog',
              },
              {
                label: 'RSS Feed',
                // href: '/blog/rss.xml', // @upstreamBug? adds a trailing slash to the link URL which makes it unusable
                href: 'https://nightmachinery.github.io/dblog/blog/rss.xml',
              },
              {
                label: 'Atom Feed',
                href: 'https://nightmachinery.github.io/dblog/blog/atom.xml',
              },
              {
                label: 'JSON Feed',
                href: 'https://nightmachinery.github.io/dblog/blog/feed.json',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Feraidoon Mehri`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
