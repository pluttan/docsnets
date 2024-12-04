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
          label: 'Канальный уровень',
          collapsed: true,
          link: {type: 'doc', id: 'prot/L2/README'},
          items: [
            'prot/L2/ethernet',
            'prot/L2/stp',
            'prot/L2/vtp'
          ],
        },
        {
          type: 'category',
          label: 'Сетевой уровень',
          collapsed: true,
          link: {type: 'doc', id: 'prot/L3/README'},
          items: [
            'prot/L3/ip',
            'prot/L3/dhcp',
            'prot/L3/icmp',
            'prot/L3/arp',
            'prot/L3/ipv6',
            'prot/L3/rip',
            'prot/L3/ospf',
            'prot/L3/igrp',
          ],
        },
        {
          type: 'category',
          label: 'Транспортный уровень',
          collapsed: true,
          link: {type: 'doc', id: 'prot/L4/README'},
          items: [
            'prot/L4/tcp',
            'prot/L4/udp',
          ],
        },
        {
          type: 'category',
          label: 'Прикладной уровень',
          collapsed: true,
          link: {type: 'doc', id: 'prot/L5/README'},
          items: [
            'prot/L5/dns',
            'prot/L5/ftp',
            'prot/L5/smtp',
            'prot/L5/pop',
            'prot/L5/imap',
            'prot/L5/http',
          ],
        },
      ],
    },
  ]
};

export default sidebars;
