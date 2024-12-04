import PDU from '../../../../static/lib/pdu'
import Mermaid from '../../../../static/lib/Mermaid'
import IframeComponent from '../../../../static/lib/iframe'

# UDP

**UDP** (*User datagram protocol*) - протокол прикладного уровня без установления соединения.

## Сегмент UDP

<PDU maxCellSize={32} name={'Сегмент UDP'} data={[
    { 
        size: 16, 
        name: "Порт источника"
    },
    { 
        size: 16, 
        name: "Порт назначения"
    },
    { 
        size: 16, 
        name: "Длина сегмента"
    },
    { 
        size: 16, 
        name: "Контрольная сумма"
    },
    { 
        size: 32, 
        name: "Данные"
    },
]} />