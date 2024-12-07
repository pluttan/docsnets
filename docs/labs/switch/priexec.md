# Привелегированный EXEC-режим (Privileged EXEC Mode)
- Это привелигированный режим, в который вы попадаете после использования комманды `enable` в пользовательском режиме.  
- Характеристики:
    - Полный доступ: выполнение всех доступных комманд, в том числе изменение настроек устройства. 
- Приглашение:  
    ```
    Switch#
    ```

Уровни привилегий на устройствах Cisco определяют доступ к различным командам и функциям в системе. Они организованы в виде числовых уровней от 0 до 15, где:

- Уровень 0 — самый низкий уровень, предоставляющий доступ только к базовым командам, таким как logout, enable, disable, help.
- Уровень 1 — стандартный пользовательский уровень, обычно предоставляющий доступ к команде show и базовым диагностическим функциям.
- Уровень 15 — самый высокий уровень привилегий, дающий полный доступ ко всем командам, включая конфигурацию устройства и управление сетью. Этот уровень используется в привилегированном EXEC-режиме после ввода команды enable.

Сейчас мы разбираем все комманды, которые доступны на свитче (на всех уровнях).

---

## Управление привилегиями и сеансами

### enable 

Команда, которая используется для перехода между уровнями привилегий на устройствах Cisco, называется `enable`. По умолчанию она переводит пользователя на уровень 15, но администратор может настроить другие уровни привилегий или установить конкретный уровень для перехода.

- **`enable`** — Переход на уровень привилегий, по умолчанию 15.
- **`enable <level>`** — Переход на конкретный уровень привилегий, где `<level>` — это числовое значение уровня (например, `enable 5` для перехода на уровень 5).

Пример:
```
Router> enable 5
Password: [ввод пароля]
Router#
```
В этом примере командой `enable 5` пользователь переходит на уровень 5 привилегий, если это предусмотрено настройками устройства.

### disable

Команда `disable` используется для возвращения с привилегированного EXEC-режима (например, уровня 15) в пользовательский EXEC-режим (обычно уровень 1). Это позволяет ограничить доступ к более продвинутым командам, доступным только на более высоких уровнях привилегий.

Пример использования:
В привилегированном режиме:
```
Switch# disable
Switch>
```
Здесь команда `disable` переводит устройство в пользовательский режим, отображаемый как `Router>`. 

Если вы находитесь на уровне, отличном от 15, команда `disable` вернёт вас на уровень, соответствующий настройкам устройства. Например, если вы на уровне 5, команда вернёт вас на уровень 5, а не на уровень 1.

### exit

Команда `exit` здесь используется для выхода из сессии. 
Пример:

```
Switch> exit
Connection closed.
```

В привелегированном режиме мы бы попали в текущий режим, в режиме интерфейса мы попали бы в режим конфигурации и т.д.

### logout

Тут комманда поведет себя аналогично `exit`

Пример:

```
Switch> logout
Connection closed.
```

## Диагностика сети

### ping

Посылает ICMP пакеты устройству с определенным IP адресом/именем хоста. Является расширенным функционалом свитча. Чтобы выйти: `Ctrl + Shift + 6`. Не забудьте настроить интерфейс VLAN 1 и поднять его перед запуском.

Пример:

```
Switch> ping 192.168.1.2

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.1.2, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 10/24/58 ms

```

### traceroute  

Тоже, что и ping, только еще прослеживает все переходы через сети.

[Подробнее об этом в лекциях про ICMP.](../../lectures/prot/L3/icmp#утилиты-использующие-icmp-запросы)

```
Switch> traceroute 192.168.1.1
Type escape sequence to abort.
Tracing the route to 192.168.1.1

  1   192.168.1.1     1 msec    0 msec    0 msec  
```  

## Подключения к удалённым узлам

### ssh  

Подключение к сторонним устройствам по ssh

```
ssh 192.168.1.4
Trying 192.168.1.4 ...Open


User Access Verification

Username:
```

### telnet 

Подключение к сторонним устройствам по telnet

Пример:
```
telnet 192.168.1.4
Trying 192.168.1.4 ...Open


User Access Verification

Username:
```

## Отображение информации
### show

#### Информация о конфигурации устройства и системе
1. **clock**  
   Отображает системное время.  
   ```
    Switch#show clock
    *3:41:30.668 UTC Mon Mar 1 1993
    Switch#sh clock ?
    detail  Display detailed information
    <cr>
    Switch#show clock detail
    *3:42:1.533 UTC Mon Mar 1 1993
    Time source is hardware calendar
   ```

2. **version**  
   Показывает версию ПО, конфигурацию оборудования и время работы устройства.  
    ```
    Switch#show version 
    Cisco IOS Software, C2960 Software (C2960-LANBASEK9-M), Version 15.0(2)SE4, RELEASE SOFTWARE (fc1)
    Technical Support: http://www.cisco.com/techsupport
    Copyright (c) 1986-2013 by Cisco Systems, Inc.
    Compiled Wed 26-Jun-13 02:49 by mnguyen

    ROM: Bootstrap program is C2960 boot loader
    BOOTLDR: C2960 Boot Loader (C2960-HBOOT-M) Version 12.2(25r)FX, RELEASE SOFTWARE (fc4)

    Switch uptime is 39 minutes
    System returned to ROM by power-on
    System image file is "flash:c2960-lanbasek9-mz.150-2.SE4.bin"


    This product contains cryptographic features and is subject to United
    States and local country laws governing import, export, transfer and
    use. Delivery of Cisco cryptographic products does not imply
    third-party authority to import, export, distribute or use encryption.
    Importers, exporters, distributors and users are responsible for
    compliance with U.S. and local country laws. By using this product you
    agree to comply with applicable laws and regulations. If you are unable
    to comply with U.S. and local laws, return this product immediately.

    A summary of U.S. laws governing Cisco cryptographic products may be found at:
    http://www.cisco.com/wwl/export/crypto/tool/stqrg.html

    If you require further assistance please contact us by sending email to
    export@cisco.com.

    cisco WS-C2960-24TT-L (PowerPC405) processor (revision B0) with 65536K bytes of memory.
    Processor board ID FOC1010X104
    Last reset from power-on
    1 Virtual Ethernet interface
    24 FastEthernet interfaces
    2 Gigabit Ethernet interfaces
    The password-recovery mechanism is enabled.

    64K bytes of flash-simulated non-volatile configuration memory.
    Base ethernet MAC Address       : 00:02:4A:23:6D:DD
    Motherboard assembly number     : 73-10390-03
    Power supply part number        : 341-0097-02
    Motherboard serial number       : FOC10093R12
    Power supply serial number      : AZS1007032H
    Model revision number           : B0
    Motherboard revision number     : B0
    Model number                    : WS-C2960-24TT-L
    System serial number            : FOC1010X104
    ```


3. **privilege**  
   Отображает текущий уровень привилегий пользователя.  

   ```
    Switch>show privilege 
    Current privilege level is 1
    Switch>en
    Switch#show privilege 
    Current privilege level is 15
    Switch#
   ```

4. **terminal**  
   Показывает текущие параметры терминала.  
   ```
    Switch#show terminal 
    Line 0, Location: , Type: 
    Length: 24 lines, Width: 80 columns
    Baud rate (TX/RX) is 9600/9600, no parity, 1 stopbits, 8 databits
    Status: PSI Enabled, Ready, Active, Automore On
    Capabilities: none
    Modem state: Ready
    Modem hardware state: CTS* noDSR  DTR RTS
    Special Chars: Escape  Hold  Stop  Start  Disconnect  Activation
                    ^^x    none   -     -       none
    Timeouts:      Idle EXEC    Idle Session   Modem Answer  Session   Dispatch
                00:10:00        never                        none     not set
                                Idle Session Disconnect Warning
                                never
                                Login-sequence User Response
                                00:00:30
                                Autoselect Initial Wait
                                not set
    Modem type is unknown.
    Session limit is not set.
    Time since activation: 00:03:04
    Editing is enabled.
    History is enabled, history size is 256.
    DNS resolution in show commands is enabled
    Full user help is disabled
    Allowed input transports are All.
    Allowed output transports are pad telnet rlogin.
    Preferred transport is telnet.
    No output characters are padded
    No special data dispatching characters
   ```

5. **flash:**  
   Отображает информацию о файловой системе устройства.  
    ```
    Switch#show flash
    Directory of flash:/

        1  -rw-     4670455          <no date>  2960-lanbasek9-mz.150-2.SE4.bin

    64016384 bytes total (59345929 bytes free)
    ```


---

#### **Сетевая информация и протоколы**  
1. **arp**  
   Показывает ARP-таблицу (сопоставление IP- и MAC-адресов).  
   ```sh
   Switch#show arp
    Protocol  Address          Age (min)  Hardware Addr   Type   Interface
    Internet  192.168.1.1             49  00D0.BA6D.CD0C  ARPA   Vlan1
    Internet  192.168.1.2             -   0002.4A23.6DDD  ARPA   Vlan1
    Internet  192.168.1.4             50  00D0.BCED.DBAC  ARPA   Vlan1
    Switch#
   ```

2. **ip**  
   Отображает информацию, связанную с IP:
   - access-lists
   - arp ~ show arp
   - dhcp
   - interface (покажет VLAN с IP)
   - ssh

3. **tcp**  
   Показывает состояние активных TCP-соединений.  

4. **vlan**  
   Отображает информацию о VLAN.  
   ```
   sh vlan
    VLAN Name                             Status    Ports
    ---- -------------------------------- --------- -------------------------------
    1    default                          active    Fa0/1, Fa0/2, Fa0/3, Fa0/4
                                                    Fa0/5, Fa0/6, Fa0/7, Fa0/8
                                                    Fa0/9, Fa0/10, Fa0/11, Fa0/12
                                                    Fa0/13, Fa0/14, Fa0/15, Fa0/16
                                                    Fa0/17, Fa0/18, Fa0/19, Fa0/20
                                                    Fa0/21, Fa0/22, Fa0/23, Fa0/24
                                                    Gig0/1, Gig0/2
    1002 fddi-default                     active    
    1003 token-ring-default               active    
    1004 fddinet-default                  active    
    1005 trnet-default                    active    

    VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2
    ---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------
    1    enet  100001     1500  -      -      -        -    -        0      0
    1002 fddi  101002     1500  -      -      -        -    -        0      0   
    1003 tr    101003     1500  -      -      -        -    -        0      0   
    1004 fdnet 101004     1500  -      -      -        ieee -        0      0   
    1005 trnet 101005     1500  -      -      -        ibm  -        0      0   

    VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2
    ---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------

    Remote SPAN VLANs
    ------------------------------------------------------------------------------

    Primary Secondary Type              Ports
    ------- --------- ----------------- ------------------------------------------
   ```

5. **vtp**  
   Показывает сведения о VLAN Trunking Protocol (VTP).  

---

#### **Информация о коммутации и связанных протоколах**  
1. **cdp**  
   Показывает данные протокола Cisco Discovery Protocol (CDP).  

2. **lldp**  
   Отображает сведения о Link Layer Discovery Protocol (LLDP).  

3. **dtp**  
   Показывает информацию о Dynamic Trunking Protocol (DTP).  

4. **etherchannel**  
   Отображает сведения о группах EtherChannel.  

5. **mls**  
   Показывает данные о MultiLayer Switching (многослойной коммутации).  

6. **mac**  
   Информация о настройках, связанных с MAC-адресами.  

7. **mac-address-table**  
   Отображает таблицу MAC-адресов устройства.  

---

#### **Сессии, пользователи и безопасность**  
1. **sessions**  
   Отображает активные Telnet-сессии.  

2. **ssh**  
   Показывает состояние SSH-соединений.  

3. **users**  
   Выводит информацию о текущих пользователях и их терминальных линиях.  

4. **crypto**  
   Показывает данные о криптографических модулях и ключах.  

5. **history**  
   Показывает историю команд текущей сессии.  

---

#### **Интерфейсы и физические подключения**  
1. **interfaces**  
   Показывает статус и конфигурацию интерфейсов устройства.





## Настройки терминала 
### terminal

- history size \<0-256\> - задает дину истории, сколько раз вы на стрелочку нажмете
- monitor - определяет выводить ли системные сообщения в терминал (только в привелегиях)

```
Switch> terminal history size 0
Switch> en
Switch# terminal monitor
```


clear       Reset functions
clock       Manage the system clock
configure   Enter configuration mode
copy        Copy from one file to another
debug       Debugging functions (see also 'undebug')
delete      Delete a file
dir         List files on a filesystem
erase       Erase a filesystem
more        Display the contents of a file
reload      Halt and perform a cold restart
resume      Resume an active network connection
setup       Run the SETUP command facility
undebug     Disable debugging functions (see also 'debug')
write       Write running configuration to memory, network, or terminal
