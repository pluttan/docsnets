// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  lectures: [
    'README',
    {
      type: 'category',
      label: 'Протоколы',
      collapsed: true,
      link: {type: 'doc', id: 'prot/README'},
      items: [
        {
          type: 'category',
          label: 'Сетевой уровень',
          collapsed: true,
          link: {type: 'doc', id: 'prot/L3/README'},
          items: [
            'prot/L3/ip',
            'prot/L3/dhcp',
            'prot/L3/icmp',
          ],
        },
      ],
    },
  ]
};

export default sidebars;
