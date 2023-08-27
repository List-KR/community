// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'List-KR Community',
  tagline: 'Docs of List-KR Community',
  favicon: 'img/list-kr.jpeg',

  // Set the production url of your site here
  url: 'https://list-kr-community.pages.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'list-kr', // Usually your GitHub org/user name.
  projectName: 'list-kr-community', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko-kr',
    locales: ['ko-kr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs/intro',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/list-kr.jpeg',
      docs: {
        sidebar: {
          hideable: true
        }
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true
      },
      navbar: {
        title: 'List-KR 커뮤니티',
        logo: {
          alt: 'List-KR Logo',
          src: 'img/list-kr.jpeg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '문서',
          },
          {
            to: 'https://github.com/orgs/List-KR/discussions',
            position: 'left',
            label: '토론 및 커뮤니티',
          },
          {
            to: 'https://github.com/List-KR',
            position: 'left',
            label: 'GitHub 프로필',
          },
          {
            href: 'https://github.com/List-KR/community',
            label: '웹 사이트 소스 코드',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '필터 리스트',
            items: [
              {
                label: 'List-KR',
                to: 'https://github.com/List-KR/List-KR'
              },
              {
                label: 'List-KR-Fast',
                to: 'https://github.com/List-KR/List-KR-Fast'
              }
            ]
          },
          {
            title: '유저스크립트',
            items: [
              {
                label: 'NamuLink',
                to: 'https://github.com/List-KR/NamuLink'
              },
              {
                label: 'microShield',
                to: 'https://github.com/List-KR/microShield'
              },
              {
                label: 'linkproduct-privacy',
                to: 'https://github.com/List-KR/linkproduct-privacy'
              }
            ]
          },
          {
            title: '도구',
            items: [
              {
                label: 'anti-DPI-excepti0n',
                to: 'https://github.com/List-KR/anti-DPI-excepti0n'
              },
              {
                label: 'filter-customizer',
                to: 'https://github.com/List-KR/filter-customizer'
              },
              {
                label: 'jsdelivr-purge',
                to: 'https://github.com/List-KR/jsdelivr-purge'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} List-KR Community. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),
};

module.exports = config;
