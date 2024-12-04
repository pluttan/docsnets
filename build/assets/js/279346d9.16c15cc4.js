"use strict";(self.webpackChunkdocsnets=self.webpackChunkdocsnets||[]).push([[8913],{5792:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"prot/L4/tcp","title":"TCP","description":"\u0421\u0435\u0433\u043c\u0435\u043d\u0442 TCP","source":"@site/docs/lectures/prot/L4/tcp.md","sourceDirName":"prot/L4","slug":"/prot/L4/tcp","permalink":"/docsnets/lectures/prot/L4/tcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"lectures","previous":{"title":"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c","permalink":"/docsnets/lectures/prot/L4/"},"next":{"title":"UDP","permalink":"/docsnets/lectures/prot/L4/udp"}}');var r=i(4848),d=i(8453),l=i(2528);i(9930),i(6535);const t={},c="TCP",h={},x=[{value:"\u0421\u0435\u0433\u043c\u0435\u043d\u0442 TCP",id:"\u0441\u0435\u0433\u043c\u0435\u043d\u0442-tcp",level:2},{value:"\u0424\u043b\u0430\u0433\u0438",id:"\u0444\u043b\u0430\u0433\u0438",level:2},{value:"\u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u043a\u043d\u0430",id:"\u0440\u0430\u0437\u043c\u0435\u0440-\u043e\u043a\u043d\u0430",level:2},{value:"\u0422\u0440\u0435\u0445\u0441\u0442\u043e\u0440\u043e\u043d\u0435\u0435 \u0442\u0438\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u0440\u0443\u043a\u043e\u043f\u043e\u0436\u0430\u0442\u0438\u0435",id:"\u0442\u0440\u0435\u0445\u0441\u0442\u043e\u0440\u043e\u043d\u0435\u0435-\u0442\u0438\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0438\u043b\u0438-\u0440\u0443\u043a\u043e\u043f\u043e\u0436\u0430\u0442\u0438\u0435",level:2},{value:"\u0422\u0430\u0439\u043c\u0435\u0440\u044b \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f TCP",id:"\u0442\u0430\u0439\u043c\u0435\u0440\u044b-\u0434\u043b\u044f-\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f-tcp",level:2},{value:"Retransmission Timer (RTO - Retransmission Timeout)",id:"retransmission-timer-rto---retransmission-timeout",level:4},{value:"Keepalive Timer",id:"keepalive-timer",level:4},{value:"TIME-WAIT Timer",id:"time-wait-timer",level:4},{value:"Persist Timer",id:"persist-timer",level:4},{value:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432 TCP",id:"\u0442\u0430\u0431\u043b\u0438\u0446\u0430-\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445-\u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432-tcp",level:4}];function o(e){const s={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"tcp",children:"TCP"})}),"\n",(0,r.jsx)(s.h2,{id:"\u0441\u0435\u0433\u043c\u0435\u043d\u0442-tcp",children:"\u0421\u0435\u0433\u043c\u0435\u043d\u0442 TCP"}),"\n",(0,r.jsx)(l.A,{maxCellSize:32,name:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a TCP",data:[{size:16,name:"\u041f\u043e\u0440\u0442 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430"},{size:16,name:"\u041f\u043e\u0440\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"},{size:32,name:"\u041d\u043e\u043c\u0435\u0440 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",desc:"\u041a\u043e\u0433\u0434\u0430 \u0444\u043b\u0430\u0433 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438 SYN=0: \u043d\u043e\u043c\u0435\u0440 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0431\u0430\u0439\u0442\u0430; SYN=1 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 ISN"},{size:32,name:"\u041d\u043e\u043c\u0435\u0440 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f",desc:"\u041d\u043e\u043c\u0435\u0440 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437"},{size:4,name:"\u0414\u043b\u0438\u043d\u0430"},{size:4,name:"\u0417\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u043e",desc:"1 \u0431\u0438\u0442: ESN(\u0441\u0435\u0441\u0441\u0438\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430), 2 \u0431\u0438\u0442: \u0418\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c, 3 \u0431\u0438\u0442: \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432"},{size:8,name:"\u0424\u043b\u0430\u0433\u0438",desc:"\u0421\u043c\u043e\u0442\u0440\u0438 \u043d\u0438\u0436\u0435"},{size:16,name:"\u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u043a\u043d\u0430",desc:"\u041e\u0431\u044a\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0431\u0435\u0437 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f"},{size:16,name:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430"},{size:16,name:"\u0423\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u0432\u0430\u0436\u043d\u043e\u0441\u0442\u0438",desc:"\u041f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435, \u043f\u043e\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0432\u0430\u0436\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"},{size:32,name:"\u041e\u043f\u0446\u0438\u0438",desc:"\u0422\u0438\u043f|\u0414\u043b\u0438\u043d\u0430|\u0414\u0430\u043d\u043d\u044b\u0435|\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c (\u043f\u0440\u0438\u043c\u0435\u0440: \u0434\u043e\u0433\u043e\u0432\u043e\u0440 \u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f, \u043e \u043d\u0435\u0440\u0430\u0437\u0440\u044b\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0438 \u0442.\u0434.)"}]}),"\n",(0,r.jsx)(s.h2,{id:"\u0444\u043b\u0430\u0433\u0438",children:"\u0424\u043b\u0430\u0433\u0438"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"URG"})," \u043f\u043e\u043b\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0432\u0430\u0436\u043d\u043e\u0441\u0442\u0438 \u0432\u0430\u043b\u0438\u0434\u043d\u043e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ACK"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435\u043c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"PSH"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0435\u0437\u0430\u043c\u0435\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"RST"})," \u0430\u0432\u0430\u0440\u0438\u0439\u043d\u043e\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"SYN"})," \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"FIN"})," \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u0440\u0430\u0437\u043c\u0435\u0440-\u043e\u043a\u043d\u0430",children:"\u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u043a\u043d\u0430"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:i(4541).A+""})}),"\n",(0,r.jsx)(s.p,{children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u043f\u0435\u0440\u0435\u0441\u043b\u0430\u043b n \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u0436\u0434\u0435\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u043d\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e, \u0447\u0442\u043e\u0431 \u043f\u0435\u0440\u0435\u0441\u043b\u0430\u0442\u044c n+1 \u0441\u0435\u0433\u043c\u0435\u043d\u0442. \u041a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043d \u0435\u0433\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043e\u043d \u043f\u0435\u0440\u0435\u0441\u044b\u043b\u0430\u0435\u0442 n+1 \u0438 \u0436\u0434\u0435\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 2 \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435. n \u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u0440\u044c\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430."}),"\n",(0,r.jsx)(s.h2,{id:"\u0442\u0440\u0435\u0445\u0441\u0442\u043e\u0440\u043e\u043d\u0435\u0435-\u0442\u0438\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0438\u043b\u0438-\u0440\u0443\u043a\u043e\u043f\u043e\u0436\u0430\u0442\u0438\u0435",children:"\u0422\u0440\u0435\u0445\u0441\u0442\u043e\u0440\u043e\u043d\u0435\u0435 \u0442\u0438\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u0440\u0443\u043a\u043e\u043f\u043e\u0436\u0430\u0442\u0438\u0435"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:i(324).A+""})}),"\n",(0,r.jsx)(s.h2,{id:"\u0442\u0430\u0439\u043c\u0435\u0440\u044b-\u0434\u043b\u044f-\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f-tcp",children:"\u0422\u0430\u0439\u043c\u0435\u0440\u044b \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f TCP"}),"\n",(0,r.jsx)(s.h4,{id:"retransmission-timer-rto---retransmission-timeout",children:"Retransmission Timer (RTO - Retransmission Timeout)"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u041e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u0443\u044e \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0434\u0430\u043d\u043d\u044b\u0445, \u0435\u0441\u043b\u0438 ACK (\u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435) \u043e\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u0431\u044b\u043b \u043f\u043e\u043b\u0443\u0447\u0435\u043d \u0432 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u043a \u0432\u0440\u0435\u043c\u0435\u043d\u0438."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u041c\u0435\u0445\u0430\u043d\u0438\u0437\u043c:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u0422\u0430\u0439\u043c\u0435\u0440 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430."}),"\n",(0,r.jsx)(s.li,{children:"\u0415\u0441\u043b\u0438 \u0442\u0430\u0439\u043c\u0435\u0440 \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u0434\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f ACK, \u0441\u0435\u0433\u043c\u0435\u043d\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e."}),"\n",(0,r.jsxs)(s.li,{children:["\u0412\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,r.jsx)(s.strong,{children:"RTT (Round Trip Time)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b:"})," \u0415\u0441\u043b\u0438 \u0442\u0430\u0439\u043c\u0435\u0440 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439, \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u043b\u0438\u0448\u043d\u0438\u043c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430\u043c. \u0415\u0441\u043b\u0438 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u2014 \u043a \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0430\u043c \u0432 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"keepalive-timer",children:"Keepalive Timer"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u041c\u0435\u0445\u0430\u043d\u0438\u0437\u043c:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u041f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f ",(0,r.jsx)(s.strong,{children:"keepalive-\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b"})," (\u043f\u0443\u0441\u0442\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b) \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043a\u043e\u043d\u0446\u0430."]}),"\n",(0,r.jsx)(s.li,{children:"\u0415\u0441\u043b\u0438 \u0432 \u043e\u0442\u0432\u0435\u0442 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e ACK \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u043e\u0440\u0432\u0430\u043d\u043d\u044b\u043c."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e:"})," \u043e\u0431\u044b\u0447\u043d\u043e 2 \u0447\u0430\u0441\u0430, \u043d\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043e."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"time-wait-timer",children:"TIME-WAIT Timer"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c ",(0,r.jsx)(s.code,{children:"TIME-WAIT"}),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u041c\u0435\u0445\u0430\u043d\u0438\u0437\u043c:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u041f\u043e\u0441\u043b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e ACK \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u0438\u043d\u0438\u0446\u0438\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0432 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438 ",(0,r.jsx)(s.code,{children:"TIME-WAIT"})," \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 (\u043e\u0431\u044b\u0447\u043d\u043e 2 * Maximum Segment Lifetime, \u0438\u043b\u0438 ",(0,r.jsx)(s.strong,{children:"MSL"}),", \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e 60 \u0441\u0435\u043a\u0443\u043d\u0434)."]}),"\n",(0,r.jsx)(s.li,{children:"\u042d\u0442\u043e \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u044e \u043c\u0435\u0436\u0434\u0443 \u0441\u0442\u0430\u0440\u044b\u043c \u0438 \u043d\u043e\u0432\u044b\u043c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0441 \u0442\u0435\u043c\u0438 \u0436\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 (IP \u0438 \u043f\u043e\u0440\u0442\u044b)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"persist-timer",children:"Persist Timer"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"}),' \u041f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0435 "\u0434\u0435\u0434\u043b\u043e\u043a\u0430", \u0435\u0441\u043b\u0438 \u043e\u043a\u043d\u043e \u0441\u0442\u0430\u043b\u043e \u0440\u0430\u0432\u043d\u044b\u043c \u043d\u0443\u043b\u044e.']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u041c\u0435\u0445\u0430\u043d\u0438\u0437\u043c:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u0415\u0441\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c \u0441\u043e\u043e\u0431\u0449\u0430\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044e, \u0447\u0442\u043e \u0435\u0433\u043e \u043e\u043a\u043d\u043e \u0440\u0430\u0432\u043d\u043e \u043d\u0443\u043b\u044e, \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c \u043f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u0443\u0441\u0442\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b (Probe), \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u043d\u0435 \u043e\u0441\u0432\u043e\u0431\u043e\u0434\u0438\u043b\u043e\u0441\u044c \u043b\u0438 \u043e\u043a\u043d\u043e."}),"\n",(0,r.jsx)(s.li,{children:"\u0415\u0441\u043b\u0438 \u043e\u043a\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f, \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u043e\u0437\u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"\u0442\u0430\u0431\u043b\u0438\u0446\u0430-\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445-\u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432-tcp",children:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432 TCP"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u0422\u0430\u0439\u043c\u0435\u0440"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u0422\u0438\u043f\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Retransmission Timer"}),(0,r.jsx)(s.td,{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u0430\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"}),(0,r.jsx)(s.td,{children:"\u0417\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 RTT"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Delayed ACK Timer"}),(0,r.jsx)(s.td,{children:"\u0417\u0430\u0434\u0435\u0440\u0436\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 ACK"}),(0,r.jsx)(s.td,{children:"\u041e\u043a\u043e\u043b\u043e 200 \u043c\u0441"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Keepalive Timer"}),(0,r.jsx)(s.td,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.td,{children:"\u041e\u0431\u044b\u0447\u043d\u043e 2 \u0447\u0430\u0441\u0430 (\u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TIME-WAIT Timer"}),(0,r.jsx)(s.td,{children:"\u0417\u0430\u0434\u0435\u0440\u0436\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.td,{children:"2 * MSL (\u043e\u0431\u044b\u0447\u043d\u043e 60 \u0441\u0435\u043a)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Persist Timer"}),(0,r.jsx)(s.td,{children:"\u0418\u0437\u0431\u0435\u0436\u0430\u043d\u0438\u0435 \u0434\u0435\u0434\u043b\u043e\u043a\u0430 \u043f\u0440\u0438 Zero Window"}),(0,r.jsx)(s.td,{children:"\u0417\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SYN Timer"}),(0,r.jsx)(s.td,{children:"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 SYN+ACK"}),(0,r.jsx)(s.td,{children:"\u0417\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Connection Timer"}),(0,r.jsx)(s.td,{children:"\u0422\u0430\u0439\u043c-\u0430\u0443\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.td,{children:"\u041e\u0431\u044b\u0447\u043d\u043e 75 \u0441\u0435\u043a\u0443\u043d\u0434"})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},9930:(e,s,i)=>{i(6540);var n=i(2279);i(4848);n.A.initialize({startOnLoad:!1,theme:"dark"})},6535:(e,s,i)=>{i.d(s,{A:()=>r});i(6540);var n=i(4848);const r=e=>{let{link:s}=e;return(0,n.jsx)("div",{children:(0,n.jsx)("div",{style:{width:"100%",height:"665px",overflow:"hidden",position:"relative",border:"2px solid #b4befe",borderRadius:"5px"},children:(0,n.jsx)("iframe",{src:s,width:"100%",height:"1100px",style:{border:"none",position:"absolute",top:"-435px"},title:"Embedded Page",allowFullScreen:!0})})})}},2528:(e,s,i)=>{i.d(s,{A:()=>l});var n=i(6540),r=i(4848);const d=e=>{let{text:s,desc:i}=e;const[d,l]=(0,n.useState)(!1),[t,c]=(0,n.useState)({x:0,y:0});return(0,r.jsxs)("div",{onMouseEnter:()=>{l(!0)},onMouseLeave:()=>{l(!1)},onMouseMove:e=>{c({x:e.clientX,y:e.clientY})},style:{display:"inline-block",width:"100%",height:"100%",padding:"15px"},children:[(0,r.jsx)("span",{style:{color:"#babbf1"},children:s}),d&&(0,r.jsx)("div",{style:{position:"fixed",top:t.y+10,left:t.x+10,backgroundColor:"rgba(24, 24, 37, 0.85)",border:"2px solid #b4befe",color:"#cdd6f4",padding:"5px",borderRadius:"5px",maxWidth:"400px",zIndex:"400"},children:i})]})},l=e=>{let{maxCellSize:s,data:i,name:n}=e,l=100/s;const t=((e,s)=>{const i=[];let n=[],r=s;const d=e=>{let l=r;n.push({name:e.name,desc:e.desc,size:Math.min(r,e.size)}),r-=Math.min(r,e.size),0===r&&(i.push(n),n=[],r=s,l!==e.size&&d({name:e.name,desc:e.desc,size:e.size-l}))};return e.forEach((e=>d(e))),n.length>0&&(r>0&&n.push({name:"",desc:"",size:r}),i.push(n)),i})(i,s);let c=n+": \u041d\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435\t\n";return i.forEach(((e,s)=>{c+=n+": "+e.name+"\t"+e.desc+"\n"})),console.log(c),(0,r.jsxs)("div",{children:[(0,r.jsx)("table",{children:(0,r.jsx)("tbody",{children:t.map(((e,s)=>(0,r.jsx)("tr",{children:e.map(((e,s)=>(0,r.jsx)("td",{colSpan:e.size,style:{width:String(l*e.size)+"%",border:"3.5px solid #b4befe",textAlign:"center",padding:"0",margin:"15px"},children:e.desc?(0,r.jsx)(d,{text:(0,r.jsx)("span",{style:{width:String(l*e.size)+"%",height:"100%"},children:e.name}),desc:e.desc}):(0,r.jsx)("span",{style:{width:String(l*e.size)+"%",height:"100%",padding:"15px"},children:e.name})},s)))},s)))})}),(0,r.jsx)("ul",{children:i.map(((e,s)=>e.desc?(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:e.name}),": ",e.desc]},s):(0,r.jsx)("div",{})))})]})}},324:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/tcpTick.drawio-42f5d50e8d5f0578da8fcaf7a8ed8dbc.svg"},4541:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/tcpWindowLength.drawio-f56f81b58cd04c8a8cfa384153c4c254.svg"}}]);