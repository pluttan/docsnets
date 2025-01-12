import React from 'react';
import InteractiveTableWrapper from '../../../../static/lib/openProt';

// --- Helper Components ---
function createTable(cellsData, label, children) {
    return (
        <InteractiveTableWrapper
            cellsData={cellsData}
            label={label}
        >
            {children}
        </InteractiveTableWrapper>
    );
}

// --- Protocol Components ---
function Eth({ dest, sour, prot, children }) {
    return createTable({ Destination: dest, Source: sour, Protocol: prot, Data: '', FCS: '' }, "Eth2", children);
}

function IPone({ sour, dest, children }) {
    return createTable({ '...': '', Source: sour, Destination: dest, '...': '', Data: '' }, "IPv4", children);
}



function IP({ destEth, sourEth, sour, dest, children }) {
    return (
        <Eth dest={destEth} sour={sourEth} prot='IP'>
            <IPone sour={sour} dest={dest}>
                {children}
            </IPone>
        </Eth>
    );
}

function ARPone({ sour, dest }) {
    return createTable({ 'ARP-запрос': `Есть ли в сети ${dest}? Если да, сообщите ${sour}` }, "ARP");
}

function ARP({ sourEth, sour, dest }) {
    return (
        <Eth dest={'FFFF:FFFF:FFFF'} sour={sourEth} prot='ARP'>
            <ARPone sour={sour} dest={dest} />
        </Eth>
    );
}

function ARPoneans({ sour }) {
    return createTable({ 'ARP-ответ': `В сети есть ${sour}` }, "ARP");
}

function ARPans({ destEth, sourEth, sour }) {
    return (
        <Eth dest={destEth} sour={sourEth} prot='ARP'>
            <ARPoneans sour={sour} />
        </Eth>
    );
}

function UDPone({ sour, dest, children }) {
    return createTable({ Sour: sour, Dest: dest, '...': '', Data: '' }, "UDP", children);
}


function UDP({ destEth, sourEth, sourIp, destIp, sour, dest, children }) {
    return (
        <IP destEth={destEth} sourEth={sourEth} sour={sourIp} dest={destIp}>
            <UDPone dest={dest} sour={sour}>
                {children}
            </UDPone>
        </IP>
    );
}

function TCPone({ sour, dest, flag, children }) {
    return createTable({ Sour: sour, Dest: dest, '...': '', Flag: flag, ' ... ': '', Data: '' }, "TCP", children);
}

function TCP({ destEth, sourEth, sourIp, destIp, sour, dest, flag, children }) {
    return (
        <IP destEth={destEth} sourEth={sourEth} sour={sourIp} dest={destIp}>
            <TCPone dest={dest} sour={sour} flag={flag}>
                {children}
            </TCPone>
        </IP>
    );
}

function TCPopen({ destEth, sourEth, sourIp, destIp, sour, dest }) {
    return (
        <div>
            {
                destEth.map((element, idx) => {
                    return (<div><Line/><TCP flag={'SYN'} destEth={element} sourEth={sourEth[idx]} sourIp={sourIp} destIp={destIp} sour={sour} dest={dest} /></div>)
                })
            }
            {
                destEth.map((element, idx) => {
                    return (<div><Line/><TCP flag={'SYN+ACK'} destEth={sourEth[destEth.length - idx - 1]} sourEth={destEth[destEth.length - idx - 1]} sourIp={destIp} destIp={sourIp} sour={dest} dest={sour} /></div>)
                })
            }
            {
                destEth.map((element, idx) => {
                    return (<div><Line/><TCP flag={'ACK'} destEth={element} sourEth={sourEth[idx]} sourIp={sourIp} destIp={destIp} sour={sour} dest={dest} /></div>)
                })
            }
        </div>
    );
}
function TCPclose({ destEth, sourEth, sourIp, destIp, sour, dest }) {
    return (
        <div>
            {
                destEth.map((element, idx) => {
                    return (<div><Line/><TCP flag={'FIN'} destEth={element} sourEth={sourEth[idx]} sourIp={sourIp} destIp={destIp} sour={sour} dest={dest} /></div>)
                })
            }
            {
                destEth.map((element, idx) => {
                    return (<div><Line/><TCP flag={'FIN+ACK'} destEth={sourEth[destEth.length - idx - 1]} sourEth={destEth[destEth.length - idx - 1]} sourIp={destIp} destIp={sourIp} sour={dest} dest={sour} /></div>)
                })
            }
            {
                destEth.map((element, idx) => {
                    return (<div><Line/><TCP flag={'ACK'} destEth={element} sourEth={sourEth[idx]} sourIp={sourIp} destIp={destIp} sour={sour} dest={dest} /></div>)
                })
            }
        </div>
    );
}
function DNS({destEth,sourEth,sourIp,destIp,sour, domain}) {
    return (
        <UDP
            destEth={destEth} sourEth={sourEth}
            sourIp={sourIp} destIp={destIp}
            sour={sour} dest='53'
        >
            <InteractiveTableWrapper cellsData={{ 'DNS': 'Какой IP у домена '+domain+'?' }} label="DNS" />
        </UDP>
    )
}
function DNSreply({destEth,sourEth,sourIp,destIp,dest, domain, domainIP}) {
    return (
        <UDP
            destEth={destEth} sourEth={sourEth}
            sourIp={sourIp} destIp={destIp}
            sour='53' dest={dest}
        >
            <InteractiveTableWrapper cellsData={{ 'DNS': 'IP у домена '+domain+': '+domainIP }} label="DNS" />
        </UDP>
    )
}

function Line() {
    return (
        <table style={{ width: '100%' }} />
    );
}

export { Eth, IP, ARP, ARPans, UDP, TCP, DNS, DNSreply, IPone, UDPone, TCPone, ARPoneans, TCPopen, TCPclose, Line };