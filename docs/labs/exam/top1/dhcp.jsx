import InteractiveTableWrapper from '../../../../static/lib/openProt'
import {Eth, IP, UDP, ARP, UDPone, Line} from './standart'

function DHCPD({from}) {
    return (
        <div>
            <UDP
                 destEth={'FFFF:FFFF:FFFF'} sourEth={from} 
                 sourIp={'0.0.0.0'} destIp={'255.255.255.255'}
                 sour='68' dest='67'
            >
                <InteractiveTableWrapper cellsData={{ 'DHCP Discover': '' }} label="DHCP"/>
            </UDP>
            
        </div>
    )
}
function DHCPO({from, fromIP}) {
    return (
        <div>
            <UDP
                 destEth={'FFFF:FFFF:FFFF'} sourEth={from} 
                 sourIp={fromIP} destIp={'255.255.255.255'}
                 sour='67' dest='68'
            >
                <InteractiveTableWrapper cellsData={{ 'DHCP Offer': '' }} label="DHCP"/>
            </UDP>
            
        </div>
    )
}
function DHCPR({from}) {
    return (
        <div>
            <UDP
                 destEth={'FFFF:FFFF:FFFF'} sourEth={from} 
                 sourIp={'0.0.0.0'} destIp={'255.255.255.255'}
                 sour='68' dest='67'
            >
                <InteractiveTableWrapper cellsData={{ 'DHCP Request': '' }} label="DHCP"/>
            </UDP>
            
        </div>
    )
}
function DHCPA({from, fromIP}) {
    return (
        <div>
            <UDP
                 destEth={'FFFF:FFFF:FFFF'} sourEth={from} 
                 sourIp={fromIP} destIp={'255.255.255.255'}
                 sour='67' dest='68'
            >
                <InteractiveTableWrapper cellsData={{ 'DHCP ACK': '' }} label="DHCP"/>
            </UDP>
            
        </div>
    )
}

function DHCP({from, to, toIP, giveIP}) {
    return (
        <div>
            <Line/>
            <DHCPD from={from}/>
            <Line/>
            <ARP sourEth={to} sour={toIP} dest={giveIP}/>
            <Line/>
            <DHCPO from={to} fromIP={toIP}/>
            <Line/>
            <DHCPR from={from}/>
            <Line/>
            <DHCPA from={to} fromIP={toIP}/>
            <Line/>
            <ARP sourEth={from} sour={giveIP} dest={giveIP}/>
            <Line/>
        </div>
    )
}

export {DHCPD, DHCPO, DHCPR, DHCPA, DHCP};
