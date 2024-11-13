import {themes as prismThemes} from 'prism-react-renderer';

const config = {
    title: 'DocsNets',
    tagline: '',
    favicon: 'icons/dnicon.ico',

    // Set the production url of your site here
    url: 'https://pluttan.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/docsnets',

    organizationName: 'pluttan', // Usually your GitHub org/user name.
    projectName: 'docsnets', // Usually your repo name.
    deploymentBranch: 'deployment',
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'ru',
        locales: ['ru']
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    id: 'lectures', 
                    path: 'docs/lectures', 
                    routeBasePath: 'lectures', 
                    sidebarPath: './slidebars/lectures.js' 
                },
                theme: {
                    customCss: './src/css/custom.css'
                }
            }
        ],
        [
            'classic',
            {
                docs: {
                    id: 'labs',
                    path: 'docs/labs',
                    routeBasePath: 'labs',
                    sidebarPath: './slidebars/labs.js'
                },
                blog: false,
                pages: false,
                debug: false,
                sitemap: false,
                theme: {
                    id: 'labs',
                    customCss: './src/css/custom.css'
                }
            }
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false
        },
        image: 'icons/dnicon.png',
        navbar: {
            title: 'DocsNets',
            logo: {
                alt: '',
                src: 'icons/dniconw.png'
            },
            items: [
                {to: '/lectures', label: 'Лекции', position: 'left'},
                {to: '/labs', label: 'Лабы', position: 'left'}
            ]
        },
        footer: {
            style: 'dark',
            copyright: `На счет правкок, дополнений, предложений (допсихологической помощи) пишите <a href='https://github.com/pluttan'>мне</a>.`
        },
        prism: {
            theme: prismThemes.catppuccin,
            darkTheme: prismThemes.catppuccin
        }
    }
};

export default config;
