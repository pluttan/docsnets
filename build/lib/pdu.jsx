import React from 'react';
import HoverText from './hoverText';
const PDU = ({ maxCellSize, data, name }) => {
    let sizeCol = 100 / maxCellSize;

    // Функция для расчета объединения ячеек
    const buildRows = (data, maxCellSize) => {
        const rows = [];
        let currentRow = [];
        let remainingSpace = maxCellSize;

        const pushItem = (item) => {
            let tmpRemainingSpace = remainingSpace;

            currentRow.push({ name: item.name, desc: item.desc, size: Math.min(remainingSpace, item.size) });
            remainingSpace -= Math.min(remainingSpace, item.size);

            if (remainingSpace === 0) {
                rows.push(currentRow);
                currentRow = [];
                remainingSpace = maxCellSize;
                if (tmpRemainingSpace !== item.size) {
                    pushItem({ name: item.name, desc: item.desc, size: item.size - tmpRemainingSpace });
                }
            }
            
        }

        data.forEach((item) => pushItem(item));
        if (currentRow.length > 0) {
            if (remainingSpace > 0) {
                currentRow.push({ name: "", desc: "", size: remainingSpace })
            }
            rows.push(currentRow);
        }

        return rows;

    };

    const rows = buildRows(data, maxCellSize);
    let dataset = name+': Нарисуйте\t\n';
    data.forEach((item, index) => {dataset+=name+': '+item.name+'\t'+item.desc+'\n'})
    console.log(dataset)


    return (
        <div>
        <table>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td
                                key={cellIndex}
                                colSpan={cell.size}
                                style={{
                                    'width': String(sizeCol * cell.size) + '%',
                                    'border': '3.5px solid #b4befe',
                                    'textAlign': 'center',
                                    'padding': '0',
                                    'margin': '15px'
                                }}
                            >
                                {cell.desc ?
                                    <HoverText text={
                                        <span
                                        style={{
                                            'width': String(sizeCol * cell.size) + '%',
                                            'height': '100%'
                                        }}
                                        >
                                            {cell.name}
                                        </span>
                                    } desc={cell.desc} /> :
                                    <span
                                    style={{
                                        'width': String(sizeCol * cell.size) + '%',
                                        'height': '100%',
                                        'padding': '15px',
                                    }}
                                    >
                                        {cell.name}
                                    </span>
                                }
                            </td>

                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        <ul>
            {
            data.map((item, index) => (item.desc ?<li key={index}><b>{item.name}</b>: {item.desc}</li>:<div/>))
            }
        </ul>
        </div>
    );
};

export default PDU;