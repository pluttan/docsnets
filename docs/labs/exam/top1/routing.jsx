import InteractiveTableWrapper from '../../../../static/lib/openProt'
import { Eth, IP, UDP, ARP, UDPone, Line } from './standart'


function OSPFHello({ sourEth, sourIp }) {
    return (
        <div>
            <IP destEth={'0100:2A5D:2401'} sourEth={sourEth} sour={sourIp} dest={'224.0.0.5'}>
                <InteractiveTableWrapper cellsData={{ 'OSPF Hello': '' }} label="OSPF" />
            </IP>
        </div>
    )
}

function OSPFDBupdate({ destEth, sourEth, sourIp, destIP }) {
    return (
        <div>
            <IP destEth={destEth} sourEth={sourEth} sour={sourIp} dest={destIP}>
                <InteractiveTableWrapper cellsData={{ 'OSPF DataBase Update': '' }} label="OSPF" />
            </IP>
        </div>
    )
}

export {OSPFHello, OSPFDBupdate};