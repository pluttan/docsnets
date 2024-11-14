import PDU from '../../../../static/lib/pdu'
import IframeComponent from '../../../../static/lib/iframe'

# ICMP

**ICMP** (*Internet Control Message Protocol*) — протокол межсетевых управляющих сообщений, работающий на сетевом уровне модели *OSI/ISO* (стека протоколов *TCP/IP*). Этот протокол имеет особенность: несмотря на общее правило инкапсуляции «протокол вышележащего уровня инкапсулируется в протокол нижележащего уровня», *ICMP* инкапсулируется в протокол сетевого уровня ([*IPv4*](./ip.md)).

ICMP не выполняет конкретные задачи самостоятельно, а определяет механизм передачи и приема управляющих сообщений: сообщений об ошибках и информационных сообщений. Под информационными сообщениями подразумеваются диагностические сообщения и сообщения для проверки работоспособности сети.

## Пакет

<PDU maxCellSize={32} name={'ICMP пакет'} data={[
    { 
        size: 8, 
        name: "Тип", 
        desc: `Поле «Тип» указывает основное назначение сообщения.` 
    },
    { 
        size: 8, 
        name: "Код", 
        desc: "Поле «Код» уточняет назначение сообщения." 
    },
    { 
        size: 16, 
        name: "Контрольная сумма", 
        desc: "Поле «Контрольная сумма» хранит значение контрольной суммы для всего ICMP сообщения и служит для проверки целостности пакета." 
    },
    { 
        size: 32, 
        name: "Данные", 
        desc: "" 
    }
]} />

Пример заполнения полей «Тип» и «Код»: если поле «Тип» содержит значение «3» (адресат недоступен), а поле «Код» — «9» (сеть административно запрещена), то это указывает на причину недоступности адресата отправленной датаграммы.

После этих полей следует поле «Данные» *ICMP*-пакета. Формат и содержание этого поля зависят от значений полей «Тип» и «Код». Например, в запросе метки времени («Тип» = 13, «Код» = 0) поле «Данные» содержит время приема и отправки датаграммы.

## Правила формирования ICMP-пакетов

- *ICMP*-пакет не создается в ответ на потерю *ICMP*-пакета;
- *ICMP*-пакет не создается в ответ на *ICMP*-пакет с широковещательным или групповым адресом, чтобы избежать перегрузки сети;
- *ICMP*-пакет не создается для непервого поврежденного или потерянного фрагмента фрагментированного *IP*-пакета.

## Утилиты, использующие ICMP-запросы

- `ping` — проверяет доступность узла.
- `tracert/traceroute` — отображает полный маршрут до узла. Работает, постепенно увеличивая значение TTL: 1, 2, 3 и так далее. В результате серверы отправляют *ICMP* пакет об истечении TTL отправителю вместе со своим IP, что позволяет узнать IP каждого сервера, через который проходит маршрут. Этот метод имеет два недостатка: некоторые серверы скрывают свой IP, не отправляя *ICMP* пакеты об истечении TTL, и в нагруженных системах для распределения трафика могут использоваться несколько серверов, что приводит к изменению некоторых IP в маршруте.

## [Карточки](https://quenti.io/_iuDi55ox1v)
<IframeComponent link="https://quenti.io/_iuDi55ox1v"/>