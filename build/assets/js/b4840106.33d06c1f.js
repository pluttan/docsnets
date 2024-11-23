"use strict";(self.webpackChunkdocsnets=self.webpackChunkdocsnets||[]).push([[3466],{2224:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"prot/L3/ipv6","title":"IPv6","description":"IPv6 (Internet Protocol version 6) \u2014 \u044d\u0442\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 IPv4 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0439 \u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u0438, \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u043e\u0439 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0432 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441\u0435\u0442\u044f\u0445.","source":"@site/docs/lectures/prot/L3/ipv6.md","sourceDirName":"prot/L3","slug":"/prot/L3/ipv6","permalink":"/docsnets/lectures/prot/L3/ipv6","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"lectures","previous":{"title":"ARP","permalink":"/docsnets/lectures/prot/L3/arp"},"next":{"title":"RIP","permalink":"/docsnets/lectures/prot/L3/rip"}}');var l=n(4848),d=n(8453),r=n(2528);n(9930),n(6535);const c={},t="IPv6",a={},o=[{value:"<strong>\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 IPv6 \u043f\u0435\u0440\u0435\u0434 IPv4</strong>",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-ipv6-\u043f\u0435\u0440\u0435\u0434-ipv4",level:2},{value:"<strong>\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 IPv6</strong>",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-ipv6",level:2},{value:"<strong>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a IPv6</strong>",id:"\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a-ipv6",level:2},{value:"<strong>\u0422\u0438\u043f\u044b \u0430\u0434\u0440\u0435\u0441\u043e\u0432 IPv6</strong>",id:"\u0442\u0438\u043f\u044b-\u0430\u0434\u0440\u0435\u0441\u043e\u0432-ipv6",level:2},{value:"<strong>Global Unicast Addresses</strong>  \u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435",id:"global-unicast-addresses--\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435",level:3},{value:"<strong>Link-Local Addresses</strong>  \u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430",id:"link-local-addresses--\u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430",level:3},{value:"<strong>Unique Local Addresses (ULA)</strong>  \u041a\u0430\u043d\u0430\u043b",id:"unique-local-addresses-ula--\u043a\u0430\u043d\u0430\u043b",level:3},{value:"<strong>Multicast Addresses</strong>",id:"multicast-addresses",level:3},{value:"<strong>Anycast Addresses</strong>",id:"anycast-addresses",level:3},{value:"<strong>\u041d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441</strong> (<code>::</code>)",id:"\u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439-\u0430\u0434\u0440\u0435\u0441-",level:3},{value:"<strong>localhost</strong> (<code>::1</code>)",id:"localhost-1",level:3}];function h(e){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"ipv6",children:"IPv6"})}),"\n",(0,l.jsxs)(s.p,{children:["IPv6 (Internet Protocol version 6) \u2014 \u044d\u0442\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 ",(0,l.jsx)(s.a,{href:"./ip",children:"IPv4"})," \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0439 \u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u0438, \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u043e\u0439 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0432 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441\u0435\u0442\u044f\u0445."]}),"\n",(0,l.jsx)(s.h2,{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-ipv6-\u043f\u0435\u0440\u0435\u0434-ipv4",children:(0,l.jsx)(s.strong,{children:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 IPv6 \u043f\u0435\u0440\u0435\u0434 IPv4"})}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u043e\u0435 \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e"}),"\n",(0,l.jsx)(s.li,{children:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u043e\u0441\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u043d\u0438\u044f"}),"\n",(0,l.jsx)(s.li,{children:"\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0442\u0432\u0435\u0442\u0430"}),"\n",(0,l.jsx)(s.li,{children:"Plug&play"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-ipv6",children:(0,l.jsx)(s.strong,{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 IPv6"})}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u043e\u0435 \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"IPv6 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 128-\u0431\u0438\u0442\u043d\u044b\u0435 \u0430\u0434\u0440\u0435\u0441\u0430 (\u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 32-\u0431\u0438\u0442\u043d\u044b\u0445 \u0432 IPv4)."}),"\n",(0,l.jsxs)(s.li,{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u0434\u0440\u0435\u0441\u043e\u0432: (2^",128,"), \u0447\u0442\u043e \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 ~340 \u0443\u043d\u0434\u0435\u0446\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432 \u0430\u0434\u0440\u0435\u0441\u043e\u0432."]}),"\n",(0,l.jsx)(s.li,{children:"\u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043a\u0430\u0436\u0434\u043e\u0439 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0443 \u0432 \u043c\u0438\u0440\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 IP-\u0430\u0434\u0440\u0435\u0441."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"\u041d\u043e\u0432\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0437\u0430\u043f\u0438\u0441\u0438 \u0430\u0434\u0440\u0435\u0441\u043e\u0432"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\u0410\u0434\u0440\u0435\u0441 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u0432\u043e\u0441\u044c\u043c\u0438 \u0433\u0440\u0443\u043f\u043f \u0438\u0437 \u0447\u0435\u0442\u044b\u0440\u0435\u0445 \u0448\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043d\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0434\u0432\u043e\u0435\u0442\u043e\u0447\u0438\u044f\u043c\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:",(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.code,{children:"2001:0db8:85a3:0000:0000:8a2e:0370:7334"})]}),"\n",(0,l.jsxs)(s.li,{children:["\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0438:","\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\u0423\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u0432\u0435\u0434\u0443\u0449\u0438\u0435 \u043d\u0443\u043b\u0438: ",(0,l.jsx)(s.code,{children:"2001:db8:85a3::8a2e:370:7334"})]}),"\n",(0,l.jsxs)(s.li,{children:["\u0414\u0432\u043e\u0439\u043d\u043e\u0435 \u0434\u0432\u043e\u0435\u0442\u043e\u0447\u0438\u0435 (",(0,l.jsx)(s.code,{children:"::"}),") \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0433\u0440\u0443\u043f\u043f\u044b \u043d\u0443\u043b\u0435\u0439 (\u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0432 \u0430\u0434\u0440\u0435\u0441\u0435)."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 NAT (Network Address Translation)"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u0417\u0430 \u0441\u0447\u0435\u0442 \u043e\u0433\u0440\u043e\u043c\u043d\u043e\u0433\u043e \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u043a\u0430\u0436\u0434\u043e\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 IP-\u0430\u0434\u0440\u0435\u0441."}),"\n",(0,l.jsx)(s.li,{children:"\u042d\u0442\u043e \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u043f\u0440\u044f\u043c\u0443\u044e \u0441\u0432\u044f\u0437\u044c \u043c\u0435\u0436\u0434\u0443 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"\u0423\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0441\u043d\u0438\u0436\u0430\u0435\u0442 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u043d\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440\u044b."}),"\n",(0,l.jsx)(s.li,{children:"IPv6 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044e \u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432 (route aggregation)."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"\u0410\u0432\u0442\u043e\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"IPv6 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Stateless Address Autoconfiguration (SLAAC), \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044f \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u043c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c IP-\u0430\u0434\u0440\u0435\u0441 \u0431\u0435\u0437 DHCP."}),"\n",(0,l.jsx)(s.li,{children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u0430\u043a\u0436\u0435 DHCPv6 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"\u041d\u043e\u0432\u044b\u0435 \u0442\u0438\u043f\u044b \u0430\u0434\u0440\u0435\u0441\u043e\u0432"}),(0,l.jsx)(s.br,{}),"\n","IPv6 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0442\u0440\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0442\u0438\u043f\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u0432:"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Unicast"}),": \u0410\u0434\u0440\u0435\u0441\u0443\u0435\u0442 \u043e\u0434\u043d\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Multicast"}),": \u0410\u0434\u0440\u0435\u0441\u0443\u0435\u0442 \u0433\u0440\u0443\u043f\u043f\u0443 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Anycast"}),": \u0410\u0434\u0440\u0435\u0441\u0443\u0435\u0442 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0438\u0437 \u0433\u0440\u0443\u043f\u043f\u044b."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a-ipv6",children:(0,l.jsx)(s.strong,{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a IPv6"})}),"\n",(0,l.jsx)(s.p,{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a IPv6 \u0443\u043f\u0440\u043e\u0449\u0435\u043d \u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 IPv4 \u0434\u043b\u044f \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438."}),"\n",(0,l.jsx)(r.A,{maxCellSize:32,name:"IPv4 \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",data:[{size:4,name:"Version",desc:"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 (\u0434\u043b\u044f IPv6 \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 6)"},{size:8,name:"Traffic class",desc:"\u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u043f\u0430\u043a\u0435\u0442\u0430 \u0434\u043b\u044f \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f"},{size:20,name:"Flow label",desc:"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u043e\u0442\u043e\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438"},{size:16,name:"Payload length",desc:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u043a\u0435\u0442 \u0437\u0430\u043d\u044f\u043b \u0432 \u0431\u0430\u0439\u0442\u0430\u0445"},{size:8,name:"Next header",desc:"\u041a\u043e\u0434 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0432\u044b\u0448\u0435"},{size:8,name:"Hop limit",desc:"TTL"},{size:32,name:"Source address",desc:"\u0410\u0434\u0440\u0435\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044f"},{size:32,name:"Source address",desc:"\u0410\u0434\u0440\u0435\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044f"},{size:32,name:"Source address",desc:"\u0410\u0434\u0440\u0435\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044f"},{size:32,name:"Source address",desc:"\u0410\u0434\u0440\u0435\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044f"},{size:32,name:"Destination address",desc:"\u0410\u0434\u0440\u0435\u0441 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f"},{size:32,name:"Destination address",desc:"\u0410\u0434\u0440\u0435\u0441 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f"},{size:32,name:"Destination address",desc:"\u0410\u0434\u0440\u0435\u0441 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f"},{size:32,name:"Destination address",desc:"\u0410\u0434\u0440\u0435\u0441 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f"}]}),"\n",(0,l.jsx)(s.h2,{id:"\u0442\u0438\u043f\u044b-\u0430\u0434\u0440\u0435\u0441\u043e\u0432-ipv6",children:(0,l.jsx)(s.strong,{children:"\u0422\u0438\u043f\u044b \u0430\u0434\u0440\u0435\u0441\u043e\u0432 IPv6"})}),"\n",(0,l.jsxs)(s.h3,{id:"global-unicast-addresses--\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435",children:[(0,l.jsx)(s.strong,{children:"Global Unicast Addresses"}),"  \u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u0410\u043d\u0430\u043b\u043e\u0433 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 IPv4."}),"\n",(0,l.jsxs)(s.li,{children:["\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d: \u043e\u0442 ",(0,l.jsx)(s.code,{children:"2000::/3"}),"."]}),"\n"]}),"\n",(0,l.jsx)(r.A,{maxCellSize:128,name:"IPv4 \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",data:[{size:24,name:"\u0420\u0435\u0435\u0441\u0442\u0440",desc:"\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440"},{size:8,name:"ISP",desc:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440"},{size:16,name:"\u041f\u0440\u0435\u0444\u0438\u043a\u0441 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0438",desc:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440-\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440"},{size:16,name:"\u041f\u0435\u0440\u0435\u0444\u0438\u043a\u0441 \u043f\u043e\u0434\u0441\u0435\u0442\u0438",desc:"\u0410\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438"},{size:64,name:"ID \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",desc:"\u0410\u0434\u0440\u0435\u0441 \u0445\u043e\u0441\u0442\u0430"}]}),"\n",(0,l.jsxs)(s.h3,{id:"link-local-addresses--\u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430",children:[(0,l.jsx)(s.strong,{children:"Link-Local Addresses"}),"  \u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u0410\u0434\u0440\u0435\u0441\u0430, \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u043c\u044b\u0435 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0434\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f SLAAC)."}),"\n",(0,l.jsxs)(s.li,{children:["\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d: ",(0,l.jsx)(s.code,{children:"FE80::/10"}),"."]}),"\n"]}),"\n",(0,l.jsx)(r.A,{maxCellSize:128,name:"IPv4 \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",data:[{size:8,name:"FD"},{size:40,name:"Global ID",desc:"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435"},{size:16,name:"\u041f\u0435\u0440\u0435\u0444\u0438\u043a\u0441 \u043f\u043e\u0434\u0441\u0435\u0442\u0438",desc:"\u0410\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438"},{size:64,name:"ID \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",desc:"\u0410\u0434\u0440\u0435\u0441 \u0445\u043e\u0441\u0442\u0430"}]}),"\n",(0,l.jsxs)(s.h3,{id:"unique-local-addresses-ula--\u043a\u0430\u043d\u0430\u043b",children:[(0,l.jsx)(s.strong,{children:"Unique Local Addresses (ULA)"}),"  \u041a\u0430\u043d\u0430\u043b"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u0410\u043d\u0430\u043b\u043e\u0433 \u0447\u0430\u0441\u0442\u043d\u044b\u0445 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 IPv4 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, 192.168.x.x)."}),"\n",(0,l.jsxs)(s.li,{children:["\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d: ",(0,l.jsx)(s.code,{children:"FC00::/7"}),"."]}),"\n"]}),"\n",(0,l.jsx)(r.A,{maxCellSize:128,name:"IPv4 \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",data:[{size:16,name:"FE80"},{size:48,name:"000...000"},{size:64,name:"ID \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",desc:"\u0410\u0434\u0440\u0435\u0441 \u0445\u043e\u0441\u0442\u0430"}]}),"\n",(0,l.jsx)(s.h3,{id:"multicast-addresses",children:(0,l.jsx)(s.strong,{children:"Multicast Addresses"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d: ",(0,l.jsx)(s.code,{children:"FF00::/8"}),"."]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"anycast-addresses",children:(0,l.jsx)(s.strong,{children:"Anycast Addresses"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u041e\u0434\u0438\u043d \u0430\u0434\u0440\u0435\u0441 \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c \u0443\u0437\u043b\u0430\u043c, \u043d\u043e \u043f\u0430\u043a\u0435\u0442\u044b \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u043c\u0443."}),"\n"]}),"\n",(0,l.jsxs)(s.h3,{id:"\u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439-\u0430\u0434\u0440\u0435\u0441-",children:[(0,l.jsx)(s.strong,{children:"\u041d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441"})," (",(0,l.jsx)(s.code,{children:"::"}),")"]}),"\n",(0,l.jsxs)(s.h3,{id:"localhost-1",children:[(0,l.jsx)(s.strong,{children:"localhost"})," (",(0,l.jsx)(s.code,{children:"::1"}),")"]})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},9930:(e,s,n)=>{n(6540);var i=n(2279);n(4848);i.A.initialize({startOnLoad:!1,theme:"dark"})},6535:(e,s,n)=>{n.d(s,{A:()=>l});n(6540);var i=n(4848);const l=e=>{let{link:s}=e;return(0,i.jsx)("div",{children:(0,i.jsx)("div",{style:{width:"100%",height:"665px",overflow:"hidden",position:"relative",border:"2px solid #b4befe",borderRadius:"5px"},children:(0,i.jsx)("iframe",{src:s,width:"100%",height:"1100px",style:{border:"none",position:"absolute",top:"-435px"},title:"Embedded Page",allowFullScreen:!0})})})}},2528:(e,s,n)=>{n.d(s,{A:()=>r});var i=n(6540),l=n(4848);const d=e=>{let{text:s,desc:n}=e;const[d,r]=(0,i.useState)(!1),[c,t]=(0,i.useState)({x:0,y:0});return(0,l.jsxs)("div",{onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},onMouseMove:e=>{t({x:e.clientX,y:e.clientY})},style:{display:"inline-block",width:"100%",height:"100%",padding:"15px"},children:[(0,l.jsx)("span",{style:{color:"#babbf1"},children:s}),d&&(0,l.jsx)("div",{style:{position:"fixed",top:c.y+10,left:c.x+10,backgroundColor:"rgba(24, 24, 37, 0.85)",border:"2px solid #b4befe",color:"#cdd6f4",padding:"5px",borderRadius:"5px",maxWidth:"400px",zIndex:"400"},children:n})]})},r=e=>{let{maxCellSize:s,data:n,name:i}=e,r=100/s;const c=((e,s)=>{const n=[];let i=[],l=s;const d=e=>{let r=l;i.push({name:e.name,desc:e.desc,size:Math.min(l,e.size)}),l-=Math.min(l,e.size),0===l&&(n.push(i),i=[],l=s,r!==e.size&&d({name:e.name,desc:e.desc,size:e.size-r}))};return e.forEach((e=>d(e))),i.length>0&&(l>0&&i.push({name:"",desc:"",size:l}),n.push(i)),n})(n,s);let t=i+": \u041d\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435\t\n";return n.forEach(((e,s)=>{t+=i+": "+e.name+"\t"+e.desc+"\n"})),console.log(t),(0,l.jsxs)("div",{children:[(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:c.map(((e,s)=>(0,l.jsx)("tr",{children:e.map(((e,s)=>(0,l.jsx)("td",{colSpan:e.size,style:{width:String(r*e.size)+"%",border:"3.5px solid #b4befe",textAlign:"center",padding:"0",margin:"15px"},children:e.desc?(0,l.jsx)(d,{text:(0,l.jsx)("span",{style:{width:String(r*e.size)+"%",height:"100%"},children:e.name}),desc:e.desc}):(0,l.jsx)("span",{style:{width:String(r*e.size)+"%",height:"100%",padding:"15px"},children:e.name})},s)))},s)))})}),(0,l.jsx)("ul",{children:n.map(((e,s)=>e.desc?(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:e.name}),": ",e.desc]},s):(0,l.jsx)("div",{})))})]})}}}]);