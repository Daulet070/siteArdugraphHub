const path = require('path');
// Константы с роутами к страницам
const PAGE_ABOUT = '/pages/about/';
const PAGE_DOC = '/pages/doc/';
const PAGE_BLOG = '/pages/blog/';
const PAGE_CONTACTS = '/pages/contacts/';
const PAGE_FAQ = '/pages/faq/';

// Ссылки на разделы
const NAV = [
    {
        text: 'О нас',
        link: PAGE_ABOUT
    },
    {
        text: 'Документация',
        link: PAGE_DOC
    },
    {
        text: 'Блог',
        link: PAGE_BLOG
    },
    {
        text: 'Контакты',
        link: PAGE_CONTACTS
    },
    {
        text: 'FAQ',
        link: PAGE_FAQ
    },
];
// Ссылки внутри раздела
const SIDEBAR = {
    [PAGE_DOC]: [
        {
            title: 'Документация',
            children: [
                ['introdutions', 'Interface'],
            ]
        }
    ],
    // [PAGE_FAQ]: [
    //     {
    //         title: 'FAQ',
    //         children: [
    //             ['info', 'guides'],
    //         ]
    //     }
    // ],
};
module.exports = {
    base: '/ardugraph/',
    lang: 'ru-RU',
    title: 'Ardugraph',
    themeConfig: {
        nav: NAV,
        sidebar: SIDEBAR
    },
    head: [
        ['link', { rel: 'icon', href: '/favic.ico' }],
        ['link', { rel: 'manifest', href: '/app.webmanifest' }],
        ['link', { rel: 'apple-touch-icon', href: '/maskable_icon_x192.png' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300&display=swap' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    plugins: [
        [
          '@vuepress/pwa',
          {
            serviceWorker: true,
            updatePopup: true
          }
        ]
    ],
}