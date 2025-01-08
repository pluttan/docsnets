import CollapsibleText from '../../../static/lib/unvisible'

# Вопросы по 1 лабе

## Telnet

<CollapsibleText label = "Доказать, что подключенный по телнету свич - это именно тот свич, который на топологии.">

#### 1. Перезагрузить
Сохраним конфигурацию:
```bash
en
wr
```
Перезагрузим:
```bash
reload
```
На время загрузки свитча его интерфейсы станут красными, а соединение разорвется.
#### 2. Отключить интерфейс
Отключим интерфейс свитча, по которому мы не подключены:
```bash
en
conf t
in f0/0
sh
ex
```
#### 3. ping
Пинганем любой компьютер в сети через свитч:
```bash
en
ping 10.0.0.1
```
Лампочки свитча начнут моргать. Тоже самое можно сделать с telnet.
#### 4. Отключить интерфейс: экзотика
Если у свитча есть trunk интерфейсы то сделать один из них access, если есть access сделать один из них trunk. Свитчи на время заблочат порты и по DTP Расскажут друг другу о своих интерфейсах. 
Можно отключить протокол DTP по которому общаются свитчи о конфигурациях интерфейсов:
```bash
en
conf t
in f0/0
sw nonegotiate
```
Тогда порт останется оранжевым, пока на другом свитче не будет прописан тот же самый trunk/access.
</CollapsibleText>

<CollapsibleText label = "Как подключиться к “телнетному” свичу с ноутбука, подключённого по консольному порту к другому свичу">

#### 1. Никак
Так как компьютер не подключен интернетным кабелем, то он может только конфигурировать свитч, к которому подключен консольным кабелем.
#### 2. Через свитч
Если назначить свитчу ip, то можно подключиться из одного свитча по telnet в другой. Если сделать это из компа, который подключен через консольный кабель к свитчу то формально мы получим доступ по telnet к свитчу.
#### 3. Соединить кабелем
Параллельно воткнуть в комп и свитч интернетный кабель, назначить ip компу и подключиться по telnet к свитчу.
</CollapsibleText>

<CollapsibleText label = "Как зайти по телнету к свичу и сразу оказаться в привилегированном режиме без ввод команды “enable”">

Зайти в настройки vty и ввести нового пользователя с привилегией 15
```bash
username ... privilege 15 password ...
```
Суть метода в том, что privilege 15 - максимальный уровень привилегий. А тут мы делаем для пользователя уровень привилегий безусловным, дефолтным. Ему не нужно повышать себе уровень командой enable у него уже максимальный уровень.
</CollapsibleText>

## Утилиты компьютеров

<CollapsibleText label = "Показать ip компа/mac адрес через командную строку.">

В терминале пишем:
cpt -  `ipconfig`
Windows - `ipconfig /all`
Linux/MacOS - `ifconfig`
Команда выдаст полотно теста нужно найти ваш ethernet модуль у него будет ip который НЕ начинается на 10... или 172... или 192... - это и есть ваш ip. MAC смотреть там же.
</CollapsibleText>


<CollapsibleText label = "Доказать, что два компа принадлежат одной сети.">

#### 1. tracert/traceroute
Windows, cpt - `tracert <ip второго компа>`
Linux, MacOS - `traceroute <ip второго компа>`

Утилита покажет, проходил ли пакет через маршрутизатор.
Если нет, значит компы в одной сети.

#### 2. ARP
На одном компе с помощью команды `arp` (на винде `arp /all`, на линуксе возможно `arp -a`) вывести все ip адреса и соответственные им мак адреса в сети к которым обращался компьютер (то есть предварительно нужно все равно пингануть второй комп).
На другом компе показать mac адрес. Он совпадет с тем, что в ARP таблице

#### 3. Симуляция
Пингануть с одного компа другой и показать что пакет не проходит устройства 3 уровня и поле L2 не изменяется (MAC-адрес остается прежнем на протяжении всего полета пакета).

#### 4. Широковещательный пинг внутри сети
Если нужно показать чисто на топологии не используя ни симуляцию и не показывая никакие ip и mac, то можно просто зайти в комп и пингануть всю сеть. Для этого в адресе хоста необходимо указать все единицы например если комп имеет ip 192.168.0.1/24 то пишем ping 192.168.0.255, если 192.168.0.1/16 пишем 192.168.255.255 и тд.

Тогда можно увидеть что время от времени лампочки всех компов находящихся в этой сети начнут мигать.

</CollapsibleText>


<CollapsibleText label = "Как проверить, что конкретные компьютеры подключены к свичу? ">

#### 1. Вывести таблицу MAC-адресов 
Для этого пишем в консоли свича:
```bash
en
show mac-address-table
```
или 
```bash
en
show mac address-table
```
Тут будет MAC ваших компов.

#### 2. Назначить ip свичу и широковещательно пингануть сеть
Назначаем свитчу ip как для telnet а затем пишем ping: в адресе хоста необходимо указать все единицы например если свитч имеет ip 192.168.0.1/24 то пишем ping 192.168.0.255, если 192.168.0.1/16 пишем 192.168.255.255 и тд. Тогда можно увидеть что время от времени лампочки всех компов находящихся в этой сети начнут мигать.

</CollapsibleText>

## Работа с роутером
<CollapsibleText label = "Почему первый пакет через роутер в cisco убивается?">
ARP запрос. Подробнее см [тут](../routdg.md).
</CollapsibleText>
<CollapsibleText label = "Вывести конфигурацию роутера.">
```bash
en
sh r
```
</CollapsibleText>

## Vlan
<CollapsibleText label = "Сколько VLAN-ов в топологии">
Дефолтная топология без настройки имеет 5 VLAN-ов (1, 1002, 1003, 1004, 1005) + те, которые были настроены.
</CollapsibleText>