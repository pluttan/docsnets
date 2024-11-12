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
                    id: 'lectures', // Unique ID for the first docs instance
                    path: 'docs/lectures', // Path to the first set of docs
                    routeBasePath: 'lectures', // URL path for the first set
                    sidebarPath: './sidebars.js' // Path to the sidebar configuration
                },
                theme: {
                    customCss: './src/css/custom.css' // Path to the custom CSS
                }
            }
        ],
        [
            'classic',
            {
                docs: {
                    id: 'labs', // Unique ID for the second docs instance
                    path: 'docs/labs', // Path to the second set of docs
                    routeBasePath: 'labs', // URL path for the second set
                    sidebarPath: './sidebars.js' // Path to the sidebar configuration (can be the same or different)
                },
                blog: false,
                pages: false,
                debug: false,
                sitemap: false,
                theme: {
                    id: 'labs',
                    customCss: './src/css/custom.css' // Path to the custom CSS
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
            copyright: `На счет правкок, дополнений, предложений (допсихологической помощи) пишите <a href='https://github.com/pluttan' style={{'color':'red'}}>мне</a>.`
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.catppuccin
        }
    }
};

export default config;
