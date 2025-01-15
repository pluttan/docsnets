import React from 'react';
import InteractiveTableWrapper from '../../../../static/lib/openProt';
import Package from './newProts';

function Eth(dest, sour, prot, children) {
    return [...children, { label: "Eth2", Destination: dest, Source: sour, Protocol: prot, Data: '', FCS: '' }];
}

function IP(sour, dest, children) {
    return [...children, { label: "IPv4", '...': '', Source: sour, Destination: dest, '...': '', Data: '' }];
}

function IPwTTL(sour, dest, ttl, children) {
    return [...children, { label: "IPv4", '...': '', 'Time to life': ttl, '...': '', Source: sour, Destination: dest, '...': '', Data: '' }];
}

function ARP(sour, dest) {
    return [{ label: "ARP", 'ARP-запрос': `Есть ли в сети ${dest}? Если да, сообщите ${sour}` }];
}

function ARPans(sour) {
    return [{ label: "ARP", 'ARP-ответ': `В сети есть ${sour}` }];
}

function UDP(sour, dest, children) {
    return [ ...children, { label: "UDP", Sour: sour, Dest: dest, '...': '', Data: '' }];
}

function TCP(sour, dest, flag, children) {
    return [...children, { label: "TCP", Sour: sour, Dest: dest, '...': '', Flag: flag, ' ... ': '', Data: '' }];
}

function DNS(domain) {
    return [{ label: "DNS", 'DNS': 'Какой IP у домена ' + domain + '?' }]
}
function DNSreply(domain, domainIP) {
    return [{ label: "DNS", 'DNS': 'IP у домена ' + domain + ': ' + domainIP }]
}

function DHCPD(from) {
    return (
        Eth('FFFF:FFFF:FFFF', from, 'IPv4',
            IP('0.0.0.0', '255.255.255.255',
                UDP('68', '67',
                    [{ label: "DHCP", 'DHCP Discover': '' }]
                )
            )
        )
    )
}
function DHCPO(from, fromIP) {
    return (
        Eth('FFFF:FFFF:FFFF', from, 'IPv4',
            IP(fromIP, '255.255.255.255',
                UDP('67', '68',
                    [{ label: "DHCP", 'DHCP Offer': '' }]
                )
            )
        )
    )
}
function DHCPR(from) {
    return (
        Eth('FFFF:FFFF:FFFF', from, 'IPv4',
            IP('0.0.0.0', '255.255.255.255',
                UDP('68', '67',
                    [{ label: "DHCP", 'DHCP Request': '' }]
                )
            )
        )
    )
}
function DHCPA(from, fromIP) {
    return (
        Eth('FFFF:FFFF:FFFF', from, 'IPv4',
            IP(fromIP, '255.255.255.255',
                UDP('67', '68',
                    [{ label: "DHCP", 'DHCP ACK': '' }]
                )
            )
        )
    )
}

function OSPFHello(sourEth, sourIp) {
    return (
        Eth('0100:2A5D:2401', sourEth, 'IPv4',
            IP(sourIp, '224.0.0.5',
                [{ label: "OSPF", 'OSPF Hello': '' }]
            )
        )
    )
}

function OSPFDBupdate(destEth, sourEth, sourIp, destIP) {
    return (
        Eth(destEth, sourEth, 'IPv4',
            IP(sourIp, destIP,
                [{ label: "OSPF", 'OSPF DataBase Update': '' }]
            )
        )
    )
}

function Line() {
    return (
        <table style={{ width: '100%' }} />
    );
}

export {
    Eth, IP,
    ARP, ARPans,
    UDP, TCP,
    DNS, DNSreply,
    DHCPD, DHCPO, DHCPR, DHCPA,
    OSPFHello, OSPFDBupdate,
    Line
};