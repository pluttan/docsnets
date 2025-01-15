import CollapsibleText from '../../../static/lib/unvisible'

import Package from './top1/newProts'
import * as p from './top1/protocols'

import {Table, ARPTable, MACTable} from './top1/tables'

import {Topology} from './top1/topology'
import {connect, devices} from './top1'

<Package data={[
{label:'L5', Destination: "192.168.1.100", Source: "", Protocol: "TCP", Data: "Some data1", FCS: "0x1234" },
{label:'L4', Destination: "10.0.0.5", Protocol: "UDP", Data: "More data2", FCS: "0x5678" },
{label:'L3', Destination: "172.16.0.2", Source: "172.16.0.1", Protocol: "HTTP", Data: "Even more data3", FCS: "0x9ABC" },
{label:'L2', Destination: "192.168.1.102", Source: "192.168.1.3", Protocol: "TCP", Data: "Some data4", FCS: "0x1234" },
]} />
<Package data={p.OSPFHello('A1', '1.1')}/>

# Билет 0

## Топология

<Topology devices={devices} connect={connect}/>

## Конфигурации

<CollapsibleText label = "Конфигурация роутеров">
#### Конфигурация роутера R0
<Table data={[
{ "Interface": "Fa0/0", "IP": "1.1/24", "MAC": "A1" },
{ "Interface": "Fa0/1", "IP": "2.1/24", "MAC": "A2" },
{ "Interface": "Fa1/0", "IP": "3.1/24", "MAC": "A3" },
{ "Interface": "Fa1/1", "IP": "4.1/24", "MAC": "A4" },
]} />
#### Конфигурация роутера R1
<Table data={[
{ "Interface": "Fa0/0", "IP": "5.1/24", "MAC": "B1" },
{ "Interface": "Fa0/1", "IP": "4.2/24", "MAC": "B2" },
]} />
#### Конфигурация роутера R2
<Table data={[
{ "Interface": "Fa0/0", "IP": "6.1/24", "MAC": "C1" },
{ "Interface": "Fa0/1", "IP": "2.2/24", "MAC": "C2" },
]} />
</CollapsibleText>

<CollapsibleText label = "Конфигурации компов">
<Table data={[
{ "Comp": "l0", "IP": "DHCP(1.3/24)", "DG": "DHCP(1.1)", "DNS": "DHCP(6.2)", "MAC": "D1" },
{ "Comp": "l1", "IP": "DHCP(1.4/24)", "DG": "DHCP(1.1)", "DNS": "DHCP(6.2)", "MAC": "D2" },
{ "Comp": "l2", "IP": "DHCP(1.5/24)", "DG": "DHCP(1.1)", "DNS": "DHCP(6.2)", "MAC": "D3" },
{ "Comp": "l3", "IP": "DHCP(1.6/24)", "DG": "DHCP(1.1)", "DNS": "DHCP(6.2)", "MAC": "D4" },
{ "Comp": "l4", "IP": "3.2/24", "DG": "3.1", "DNS": "-",       "MAC": "D5" },
{ "Comp": "l5", "IP": "3.3/24", "DG": "3.1", "DNS": "-",       "MAC": "D6" },
{ "Comp": "l6", "IP": "3.4/24", "DG": "3.1", "DNS": "-",       "MAC": "D7" },
{ "Comp": "s1", "IP": "1.2/24", "DG": "1.1", "DNS": "-",       "MAC": "D8" },
{ "Comp": "s2", "IP": "6.2/24", "DG": "6.1", "DNS": "-",       "MAC": "D9" },
{ "Comp": "s3", "IP": "2.2/24", "DG": "2.1", "DNS": "-",       "MAC": "D10"},
]} />
</CollapsibleText>

<CollapsibleText label = "Конфигурация DHCP">
<Table data={[
{ "Pref": "Пул адресов", "Value": "1.0/24" },
{ "Pref": "Зарезервировано", "Value": "1.1" },
{ "Pref": "Default gateway", "Value": "1.1" },
{ "Pref": "DNS", "Value": "6.2" },
]} />
</CollapsibleText>

<CollapsibleText label = "Конфигурация DNS">
<Table data={[
{ "Name": "bmstu.ru", "Type": "A", "IP": "2.2" },
]} />
</CollapsibleText>

## Маршрутизация: OSPF

Маршрутизация происходит по протоколу OSPF все компы находятся в area 0. Таблицы маршрутизации ниже показывают сеть, которая полностью сошлась.

<CollapsibleText label = "Пакеты OSPF (Не обязательно)">
#### Пакеты с R0
Тогда вот все Hello пакеты, которые роутер будет рассылать (тут ip и mac multicast-адреса для данного протокола):

<Topology devices={devices} connect={connect} package={['r0', 'sw1', ['sw0', 's0'], [['l0', 'l1', 'l2','l3']]]} protocols={p.OSPFHello('A1', '1.1')}/>

<Topology devices={devices} connect={connect} package={['r0', 'r2']} protocols={p.OSPFHello('A2', '2.1')}/>

<Topology devices={devices} connect={connect} package={['r0', 'sw3', ['l4', 'l5', 'l6']]} protocols={p.OSPFHello('A3', '3.1')}/>

<Topology devices={devices} connect={connect} package={['r0', 'r1']} protocols={p.OSPFHello('A4', '4.1')}/>

Так же, помимо Hello-пакетов роутер будет рассылать пакеты с обновлениями по соседним роутерам. Роутер узнает об их существовании тоже по Hello рассылке, поэтому рассылка обновлений происходит по unicast с указанием определенных ip и mac адресов соседей (их роутер узнает из Hello пакетов).

<Topology devices={devices} connect={connect} package={['r0', 'r2']} protocols={p.OSPFDBupdate('C2', 'A2', '2.1', '2.2')}/>
<Topology devices={devices} connect={connect} package={['r0', 'r1']} protocols={p.OSPFDBupdate('B2', 'A4', '4.1', '4.2')}/>

#### Пакеты с R1

<Topology devices={devices} connect={connect} package={['r1', 'sw2', 's2']} protocols={p.OSPFHello('B1', '5.1')}/>
<Topology devices={devices} connect={connect} package={['r1', 'r0']} protocols={p.OSPFHello('B2', '4.2')}/>
<Topology devices={devices} connect={connect} package={['r1', 'r0']} protocols={p.OSPFDBupdate('A4', 'B2', '4.2', '4.1')}/>

#### Пакеты с R2

<Topology devices={devices} connect={connect} package={['r2', 'sw4', 's1']} protocols={p.OSPFHello('C1', '6.1')}/>
<Topology devices={devices} connect={connect} package={['r2', 'r0']} protocols={p.OSPFHello('C2', '2.2')}/>
<Topology devices={devices} connect={connect} package={['r2', 'r0']} protocols={p.OSPFDBupdate('A2', 'C2', '2.2', '2.1')}/>

</CollapsibleText>

<CollapsibleText label = "Таблица маршрутизации роутера R0">
<Table data={[
{ "Net": "1.0", "Connect": "DC",              "Interface": "F0/0" },
{ "Net": "2.0", "Connect": "DC",              "Interface": "F0/1" },
{ "Net": "3.0", "Connect": "DC",              "Interface": "F1/0" },
{ "Net": "4.0", "Connect": "DC",              "Interface": "F1/1" },
{ "Net": "5.0", "Connect": "[110/2] via 4.2", "Interface": "F0/1" },
{ "Net": "6.0", "Connect": "[110/2] via 2.2", "Interface": "F1/1" },
]} />
</CollapsibleText>

<CollapsibleText label = "Таблица маршрутизации роутера R1">
<Table data={[
{ "Net": "2.0", "Connect": "DC",              "Interface": "F0/1" },
{ "Net": "6.0", "Connect": "DC",              "Interface": "F0/0" },
{ "Net": "1.0", "Connect": "[110/2] via 2.1", "Interface": "F0/1" },
{ "Net": "3.0", "Connect": "[110/2] via 2.1", "Interface": "F0/1" },
{ "Net": "4.0", "Connect": "[110/2] via 2.1", "Interface": "F0/1" },
{ "Net": "5.0", "Connect": "[110/3] via 2.1", "Interface": "F0/1" },
]} />
</CollapsibleText>

<CollapsibleText label = "Таблица маршрутизации роутера R2">
<Table data={[
{ "Net": "4.0", "Connect": "DC",              "Interface": "F0/1" },
{ "Net": "5.0", "Connect": "DC",              "Interface": "F0/0" },
{ "Net": "1.0", "Connect": "[110/2] via 4.1", "Interface": "F0/1" },
{ "Net": "2.0", "Connect": "[110/2] via 4.1", "Interface": "F0/1" },
{ "Net": "3.0", "Connect": "[110/2] via 4.1", "Interface": "F0/1" },
{ "Net": "6.0", "Connect": "[110/3] via 4.1", "Interface": "F0/1" },
]} />
</CollapsibleText>

<CollapsibleText label = "ARP таблицы устройств после прохождения OSPF пакетов">
<ARPTable data={
{
    r0: {'2.2': 'C2', '4.2': 'B2'},
    r1: {'4.1': 'A4'},
    r2: {'2.1': 'A2'},
    l0: {' ':''},
    l1: {' ':''},
    l2: {' ':''},
    l3: {' ':''},
    l4: {' ':''},
    l5: {' ':''},
    l6: {' ':''},
    s1: {' ':''},
    s2: {' ':''},
    s3: {' ':''},
}
}/>
</CollapsibleText>

<CollapsibleText label = "MAC таблицы устройств после прохождения OSPF пакетов">
<MACTable data={
{
    sw0:{'fa0/5':'A1'},
    sw1:{'fa0/3':'A1'},
    sw2:{'fa0/1':'B1'},
    sw3:{'fa0/1':'A3'},
    sw4:{'fa0/1':'C1'}
}
}/>
</CollapsibleText>

## Получение DHCP компами

Компы l0, l1, l2, l3 получают ip по протоколу DHCP. Опишем процесс получения ip. У первого компа распишем подробнее.

<CollapsibleText label = "DHCP получение IP первым компом">
Сначала компьютер рассылает Discover чтоб найти DHCP сервер

<Topology devices={devices} connect={connect} package={['l0', 'sw0', ['sw1','l1', 'l2', 'l3'], [['s0', 'r0']]]} protocols={p.DHCPD('D1')}/>

Сервер получает Discover и ищет свободный адрес в пуле. Чтоб не получилось так, что пользователь уже назначил ip где-то в сети сам сервер посылает ARP запрос, чтоб проверить нет ли никакого компа с таким ip. Не обязательно рисовать.

<Topology devices={devices} connect={connect} package={['s0', 'sw1', ['sw0', 'r0'], [['l0', 'l1', 'l2','l3']]]} protocols={p.Eth('FFFF:FFFF:FFFF', 'D8', 'ARP', p.ARP('1.2', '1.3'))}/>

После того как на ARP никто не ответил сервер убеждается в том, что ip свободен, а значит его может занять наш компьютер. Для этого сервер отправляет широковещательно предложение компу.

<Topology devices={devices} connect={connect} package={['s0', 'sw1', ['sw0', 'r0'], [['l0', 'l1', 'l2','l3']]]} protocols={p.DHCPO('D8', '1.2')}/>

Комп принимает предложение и высылает запрос серверу. Это сделано так как в сети может быть много DHCP серверов и если сервер выделит IP, а комп выберет другой, то сервер не будет знать про это и его пул будет меньше ожидаемого.

<Topology devices={devices} connect={connect} package={['l0', 'sw0', ['sw1', 'l1', 'l2', 'l3'], [['s0', 'r0']]]} protocols={p.DHCPR('D1')}/>

Сервер посылает подтверждение занятия данного адреса компом. Теперь сервер не будет выдавать этот ip (до того как пул закончится, если он закончится, то сервер проверит arp запросом отключился ли комп и если да, то он снова выдаст этот же ip).

<Topology devices={devices} connect={connect} package={['s0', 'sw1', ['sw0', 'r0'], [['l0', 'l1', 'l2','l3']]]} protocols={p.DHCPA('D8', '1.2')}/>

Комп когда ему выдали ip сам проверяет нет ли никакого компа в сети с таким же IP так как все операции не атомарны. Заодно комп рассылает свой MAC для заполнения ARP таблиц.

<Topology devices={devices} connect={connect} package={['l0', 'sw0', ['sw1', 'l1', 'l2', 'l3'], [['s0', 'r0']]]} protocols={p.Eth('FFFF:FFFF:FFFF', 'D1', 'ARP', p.ARP('1.3', '1.3'))}/>

</CollapsibleText>

<CollapsibleText label = "DHCP получение IP вторым компом">
    <Topology devices={devices} connect={connect} package={['l1', 'sw0', ['sw1', 'l0', 'l2', 'l3'], [['s0', 'r0']]]} protocols={p.DHCPD('D2')}/>
    <Topology devices={devices} connect={connect} package={['s0', 'sw1', ['sw0', 'r0'], [['l0', 'l1', 'l2','l3']]]} protocols={p.Eth('FFFF:FFFF:FFFF', 'D8', 'ARP', p.ARP('1.2', '1.4'))}/> 
    <Topology devices={devices} connect={connect} package={['s0', 'sw1', ['sw0', 'r0'], [['l0', 'l1', 'l2','l3']]]} protocols={p.DHCPO('D8', '1.2')}/>
    <Topology devices={devices} connect={connect} package={['l1', 'sw0', ['sw1', 'l0', 'l2', 'l3'], [['s0', 'r0']]]} protocols={p.DHCPR('D2')}/>
    <Topology devices={devices} connect={connect} package={['s0', 'sw1', ['sw0', 'r0'], [['l0', 'l1', 'l2','l3']]]} protocols={p.DHCPA('D8', '1.2')}/>
    <Topology devices={devices} connect={connect} package={['l1', 'sw0', ['sw1', 'l0', 'l2', 'l3'], [['s0', 'r0']]]} protocols={p.Eth('FFFF:FFFF:FFFF', 'D2', 'ARP', p.ARP('1.4', '1.4'))}/> 
</CollapsibleText>

<CollapsibleText label = "DHCP получение IP третьим компом">
    <Topology devices={devices} connect={connect} package={['l2', 'sw0', ['sw1', 'l1', 'l0', 'l3'], [['s0', 'r0']]]} protocols={p.DHCPD('D3')}/>
    <Topology devices={devices} connect={connect} package={['s0', 'sw1', ['sw0', 'r0'], [['l0', 'l1', 'l2','l3']]]} protocols={p.Eth('FFFF:FFFF:FFFF', 'D8', 'ARP', p.ARP('1.2', '1.5'))}/> 
    <Topology devices={devices} connect={connect} package={['s0', 'sw1', ['sw0', 'r0'], [['l0', 'l1', 'l2','l3']]]} protocols={p.DHCPO('D8', '1.2')}/>
    <Topology devices={devices} connect={connect} package={['l2', 'sw0', ['sw1', 'l1', 'l0', 'l3'], [['s0', 'r0']]]} protocols={p.DHCPR('D3')}/>
    <Topology devices={devices} connect={connect} package={['s0', 'sw1', ['sw0', 'r0'], [['l0', 'l1', 'l2','l3']]]} protocols={p.DHCPA('D8', '1.2')}/>
    <Topology devices={devices} connect={connect} package={['l2', 'sw0', ['sw1', 'l1', 'l0', 'l3'], [['s0', 'r0']]]} protocols={p.Eth('FFFF:FFFF:FFFF', 'D2', 'ARP', p.ARP('1.5', '1.5'))}/> 
</CollapsibleText>

<CollapsibleText label = "DHCP получение IP четвертым компом">
    <Topology devices={devices} connect={connect} package={['l3', 'sw0', ['sw1', 'l1', 'l2', 'l0'], [['s0', 'r0']]]} protocols={p.DHCPD('D4')}/>
    <Topology devices={devices} connect={connect} package={['s0', 'sw1', ['sw0', 'r0'], [['l0', 'l1', 'l2','l3']]]} protocols={p.Eth('FFFF:FFFF:FFFF', 'D8', 'ARP', p.ARP('1.2', '1.6'))}/> 
    <Topology devices={devices} connect={connect} package={['s0', 'sw1', ['sw0', 'r0'], [['l0', 'l1', 'l2','l3']]]} protocols={p.DHCPO('D8', '1.2')}/>
    <Topology devices={devices} connect={connect} package={['l3', 'sw0', ['sw1', 'l1', 'l2', 'l0'], [['s0', 'r0']]]} protocols={p.DHCPR('D4')}/>
    <Topology devices={devices} connect={connect} package={['s0', 'sw1', ['sw0', 'r0'], [['l0', 'l1', 'l2','l3']]]} protocols={p.DHCPA('D8', '1.2')}/>
    <Topology devices={devices} connect={connect} package={['l3', 'sw0', ['sw1', 'l1', 'l2', 'l0'], [['s0', 'r0']]]} protocols={p.Eth('FFFF:FFFF:FFFF', 'D4', 'ARP', p.ARP('1.6', '1.6'))}/> 
</CollapsibleText>

<CollapsibleText label = "ARP таблицы устройств после прохождения DHCP пакетов">
<ARPTable data={
{
    r0: {'2.2': 'C2', '4.2': 'B2', '1.2': 'D8', '1.3': 'D1', '1.4': 'D2', '1.5': 'D3','1.6': 'D4'},
    r1: {'4.1': 'A4'},
    r2: {'2.1': 'A2'},
    l0: {'1.2': 'D8', '1.4': 'D2', '1.5': 'D3', '1.6': 'D4'},
    l1: {'1.2': 'D8', '1.3': 'D1', '1.5': 'D3', '1.6': 'D4'},
    l2: {'1.2': 'D8', '1.3': 'D1', '1.4': 'D2', '1.6': 'D4'},
    l3: {'1.2': 'D8', '1.3': 'D1', '1.4': 'D2', '1.6': 'D4'},
    l4: {' ':''},
    l5: {' ':''},
    l6: {' ':''},
    s1: {'1.3': 'D1', '1.4': 'D2', '1.5': 'D3', '1.6': 'D4'},
    s2: {' ':''},
    s3: {' ':''},
}
}/>
</CollapsibleText>
<CollapsibleText label = "MAC таблицы устройств после прохождения DHCP пакетов">
<MACTable data={
{
    sw0:{'fa0/1':'D1', 'fa0/2':'D2', 'fa0/3':'D3', 'fa0/4':'D4', 'fa0/5':'D8'},
    sw1:{'fa0/1':'D8', 'fa0/2':'D4', 'fa0/3':'A1'},
    sw2:{'fa0/1':'B1'},
    sw3:{'fa0/1':'A3'},
    sw4:{'fa0/1':'C1'}
}
}/>
</CollapsibleText>

## L2 отправляет запрос на получение почты с сервера bmstu.ru

Клиент отправляет серверу запрос на получение почты, значит работает протокол POP3. Перед открытием TCP соединения найдем bmstu.ru, обратившись к DNS серверу.

<CollapsibleText label = "Общаемся с DNS">
    Нужно послать запрос в сеть 6.0/24 она отличается от сети компа 1.0/24, поэтому на уровне L2 комп поставит адрес dg, т.е. адрес роутера. IP dg установил DHCP - он прислал его в offer компу. Создадим ARP запрос, чтоб найти MAC адрес роутера.
    <Topology devices={devices} connect={connect} package={['l0', 'sw0', ['sw1', 'l1', 'l2', 'l3'], [['s0', 'r0']]]} protocols={p.Eth('FFFF:FFFF:FFFF', 'D3', 'ARP', p.ARP('1.5', '1.1'))}/>
    <Topology devices={devices} connect={connect} package={['r0', 'sw1', ['sw0', 's0'], [['l0', 'l1', 'l2', 'l3']]]} protocols={p.Eth('D3', 'A1', 'ARP', p.ARPans('1.1'))}/>
    В ответе содержится MAC роутера. Комп заполняет ARP-таблицу и готовит DNS:
    <Topology devices={devices} connect={connect} package={['l0', 'sw0', 'sw1', 'r0']} protocols={p.Eth('A1', 'D3', 'IPv4', p.IP('1.5', '6.2', p.UDP('1025', '53', p.DNS('bmstu.ru'))))}/>
    <Topology devices={devices} connect={connect} package={['r0', 'r2']} protocols={p.Eth('C2', 'A2', 'IPv4', p.IP('1.5', '6.2', p.UDP('1025', '53', p.DNS('bmstu.ru'))))}/>
    Тут пакет будет уничтожен, так как ARP таблица роутера не заполнена.
    <Topology devices={devices} connect={connect} package={['r2', 'sw4', 's1']} protocols={p.Eth('FFFF:FFFF:FFFF', 'C1', 'ARP', p.ARP('6.1', '6.2'))}/>
    <Topology devices={devices} connect={connect} package={['s1', 'sw4', 'r2']} protocols={p.Eth('C1', 'D9', 'ARP', p.ARPans('6.2'))}/>
    Теперь ARP заполнена. Кинем пакет еще раз:
    <Topology devices={devices} connect={connect} package={['l0', 'sw0', 'sw1', 'r0']} protocols={p.Eth('A1', 'D3', 'IPv4', p.IP('1.5', '6.2', p.UDP('1025', '53', p.DNS('bmstu.ru'))))}/>
    <Topology devices={devices} connect={connect} package={['r0', 'r2']} protocols={p.Eth('C2', 'A2', 'IPv4', p.IP('1.5', '6.2', p.UDP('1025', '53', p.DNS('bmstu.ru'))))}/>
    <Topology devices={devices} connect={connect} package={['r2', 'sw4', 's1']} protocols={p.Eth('D9', 'C1', 'IPv4', p.IP('1.5', '6.2', p.UDP('1025', '53', p.DNS('bmstu.ru'))))}/>
    <Topology devices={devices} connect={connect} package={['s1', 'sw4', 'r2']} protocols={p.Eth('C1', 'D9', 'IPv4', p.IP('6.2', '1.5', p.UDP('53', '1025', p.DNSreply('bmstu.ru', '2.2'))))}/>
    <Topology devices={devices} connect={connect} package={['r2', 'r0']} protocols={p.Eth('A2', 'C2', 'IPv4', p.IP('6.2', '1.5', p.UDP('53', '1025', p.DNSreply('bmstu.ru', '2.2'))))}/>
    <Topology devices={devices} connect={connect} package={['r0', 'sw1', 'sw0', 'l0']} protocols={p.Eth('D3', 'A1', 'IPv4', p.IP('6.2', '1.5', p.UDP('53', '1025', p.DNSreply('bmstu.ru', '2.2'))))}/>
    Пакет дошел. Теперь комп знает ip сервера bmstu.ru.
</CollapsibleText>

<CollapsibleText label = "Открытие TCP соединения">
    Для открытия соединения используем 3 рукопожатия.
    <Topology devices={devices} connect={connect} package={['l0', 'sw0', 'sw1', 'r0']} protocols={p.Eth('A1', 'D3', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'SYN', [])))}/>
    <Topology devices={devices} connect={connect} package={['r0', 'r1']} protocols={p.Eth('C2', 'A4', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'SYN', [])))}/>
    Тут пакет будет уничтожен, так как ARP таблица роутера не заполнена.
    <Topology devices={devices} connect={connect} package={['r1', 'sw2', 's2']} protocols={p.Eth('FFFF:FFFF:FFFF', 'B1', 'ARP', p.ARP('2.1', '2.2'))}/>
    <Topology devices={devices} connect={connect} package={['s2', 'sw2', 'r1']} protocols={p.Eth('B1', 'D10', 'ARP', p.ARPans('2.2'))}/>
    Теперь ARP заполнена. Кинем пакет еще раз:
    <Topology devices={devices} connect={connect} package={['l0', 'sw0', 'sw1', 'r0']} protocols={p.Eth('A1', 'D3', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'SYN', [])))}/>
    <Topology devices={devices} connect={connect} package={['r0', 'r1']} protocols={p.Eth('B2', 'A4', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'SYN', [])))}/>
    <Topology devices={devices} connect={connect} package={['r1', 'sw2', 's2']} protocols={p.Eth('D10', 'B1', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'SYN', [])))}/>
    Сервер получил запрос на соединение, так как у него прослушивается порт 110 сервер разрешает такое соединение, т.е. подтверждает предыдущий пакет и отсылает свой запрос: ACK+SYN.
    <Topology devices={devices} connect={connect} package={['s2', 'sw2', 'r1']}        protocols={p.Eth('B1', 'D10', 'IPv4', p.IP('2.2', '1.5', p.TCP('110', '1026', 'ACK+SYN', [])))}/>
    <Topology devices={devices} connect={connect} package={['r1', 'r0']}               protocols={p.Eth('A4', 'B2',  'IPv4', p.IP('2.2', '1.5', p.TCP('110', '1026', 'ACK+SYN', [])))}/>
    <Topology devices={devices} connect={connect} package={['r0', 'sw1', 'sw0', 'l0']} protocols={p.Eth('D3', 'A1',  'IPv4', p.IP('2.2', '1.5', p.TCP('110', '1026', 'ACK+SYN', [])))}/>
    Комп получает пакет с подтверждением предудущего и запрос на соединение. Он отправляет ACK, чтобы подтвердить получение пакета.
    <Topology devices={devices} connect={connect} package={['l0', 'sw0', 'sw1', 'r0']} protocols={p.Eth('A1', 'D3', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'ACK', [])))}/>
    <Topology devices={devices} connect={connect} package={['r0', 'r1']} protocols={p.Eth('B2', 'A4', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'ACK', [])))}/>
    <Topology devices={devices} connect={connect} package={['r1', 'sw2', 's2']} protocols={p.Eth('D10', 'B1', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'ACK', [])))}/>
    Теперь мы открыли TCP соединение.
</CollapsibleText>

<CollapsibleText label = "Отправка запроса POP3">
    Теперь, когда соединение открыто, создаем запрос с аутентификацией на почтовый сервер.
    <Topology devices={devices} connect={connect} package={['l0', 'sw0', 'sw1', 'r0']} protocols={p.Eth('A1', 'D3', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', '', [{label:"POP3", 'POP3 Request': '' }])))}/>
    <Topology devices={devices} connect={connect} package={['r0', 'r1']}               protocols={p.Eth('B2', 'A4', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', '', [{label:"POP3", 'POP3 Request': '' }])))}/>
    <Topology devices={devices} connect={connect} package={['r1', 'sw2', 's2']}        protocols={p.Eth('D10', 'B1', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', '', [{label:"POP3", 'POP3 Request': '' }])))}/>
    <Topology devices={devices} connect={connect} package={['s2', 'sw2', 'r1']}        protocols={p.Eth('B1', 'D10', 'IPv4', p.IP('2.2', '1.5', p.TCP('110', '1026', 'ACK+PSH', [{label:"POP3", 'POP3 Answer': '' }])))}/>
    <Topology devices={devices} connect={connect} package={['r1', 'r0']}               protocols={p.Eth('A4', 'B2',  'IPv4', p.IP('2.2', '1.5', p.TCP('110', '1026', 'ACK+PSH', [{label:"POP3", 'POP3 Answer': '' }])))}/>
    <Topology devices={devices} connect={connect} package={['r0', 'sw1', 'sw0', 'l0']} protocols={p.Eth('D3', 'A1',  'IPv4', p.IP('2.2', '1.5', p.TCP('110', '1026', 'ACK+PSH', [{label:"POP3", 'POP3 Answer': '' }])))}/>
    Пакет прошел и сервер ответил нам обновлением. Теперь можно завершать соединение.
</CollapsibleText>

<CollapsibleText label = "Закрытие TCP соединения">
    <Topology devices={devices} connect={connect} package={['l0', 'sw0', 'sw1', 'r0']} protocols={p.Eth('A1', 'D3', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'FIN', [])))}/>
    <Topology devices={devices} connect={connect} package={['r0', 'r1']} protocols={p.Eth('B2', 'A4', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'FIN', [])))}/>
    <Topology devices={devices} connect={connect} package={['r1', 'sw2', 's2']} protocols={p.Eth('D10', 'B1', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'FIN', [])))}/>
    Сервер получил FIN, он отправляет пакет ACK+FIN обратно, чтобы подтвердить закрытие.
    <Topology devices={devices} connect={connect} package={['s2', 'sw2', 'r1']}        protocols={p.Eth('B1', 'D10', 'IPv4', p.IP('2.2', '1.5', p.TCP('110', '1026', 'ACK+FIN', [])))}/>
    <Topology devices={devices} connect={connect} package={['r1', 'r0']}               protocols={p.Eth('A4', 'B2',  'IPv4', p.IP('2.2', '1.5', p.TCP('110', '1026', 'ACK+FIN', [])))}/>
    <Topology devices={devices} connect={connect} package={['r0', 'sw1', 'sw0', 'l0']} protocols={p.Eth('D3', 'A1',  'IPv4', p.IP('2.2', '1.5', p.TCP('110', '1026', 'ACK+FIN', [])))}/>
    Комп получает ACK+FIN, высылает серверу ACK и закрывает соединение на 1026 порту.
    <Topology devices={devices} connect={connect} package={['l0', 'sw0', 'sw1', 'r0']} protocols={p.Eth('A1', 'D3', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'ACK', [])))}/>
    <Topology devices={devices} connect={connect} package={['r0', 'r1']} protocols={p.Eth('B2', 'A4', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'ACK', [])))}/>
    <Topology devices={devices} connect={connect} package={['r1', 'sw2', 's2']} protocols={p.Eth('D10', 'B1', 'IPv4', p.IP('1.5', '2.2', p.TCP('1026', '110', 'ACK', [])))}/>
    Сервер получает подтверждение и тоже закрывает соединение с компом.
</CollapsibleText>

<CollapsibleText label = "ARP таблицы устройств после выполнения задания">
<ARPTable data={
{
    r0: {'2.2': 'C2', '4.2': 'B2', '1.2': 'D8', '1.3': 'D1', '1.4': 'D2', '1.5': 'D3','1.6': 'D4'},
    r1: {'4.1': 'A4', '1.5': 'A4', '2.2': 'D10'},
    r2: {'2.1': 'A2', '1.5': 'A2', '6.2': 'D9'},
    l0: {'1.2': 'D8', '1.4': 'D2', '1.5': 'D3', '1.6': 'D4'},
    l1: {'1.2': 'D8', '1.3': 'D1', '1.5': 'D3', '1.6': 'D4'},
    l2: {'1.2': 'D8', '1.3': 'D1', '1.4': 'D2', '1.6': 'D4', '1.1': 'A1'},
    l3: {'1.2': 'D8', '1.3': 'D1', '1.4': 'D2', '1.6': 'D4'},
    l4: {' ':''},
    l5: {' ':''},
    l6: {' ':''},
    s1: {'1.3': 'D1', '1.4': 'D2', '1.5': 'D3', '1.6': 'D4'},
    s2: {'6.1':'C1', '1.5': 'C1'},
    s3: {'2.1':'B1', '1.5': 'B1'},
}
}/>
</CollapsibleText>
<CollapsibleText label = "MAC таблицы устройств после выполнения задания">
<MACTable data={
{
    sw0:{'fa0/1':'D1', 'fa0/2':'D2', 'fa0/3':'D3', 'fa0/4':'D4', 'fa0/5':'D8'},
    sw1:{'fa0/1':'D8', 'fa0/2':'D3', 'fa0/3':'A1'},
    sw2:{'fa0/1':'B1', 'fa0/2':'D10'},
    sw3:{'fa0/1':'A3'},
    sw4:{'fa0/1':'C1', 'fa0/2':'D9'}
}
}/>
</CollapsibleText>
