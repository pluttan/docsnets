import React from 'react';

function Table({ data, columns, marginCollaps }) {
    if (!data || data.length === 0) {
        return <p>No data available.</p>;
    }

    // Determine header keys based on provided columns or the first data row
    const headerKeys = columns || (data[0] ? Object.keys(data[0]) : []);

    return (
        <table style={marginCollaps?{margin:'1.5em'}:{}}>
            <thead>
                <tr>
                    {headerKeys.map((key, index) => (
                        <th key={index}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => {
                    // If row has a single value and we're using custom columns, we should render it across all columns
                    const rowValues = Object.values(row);

                    return (
                        <tr key={rowIndex}>
                            {rowValues.length === 1 && columns ?
                                <td style={{ textAlign: 'center' }} colSpan={headerKeys.length}>
                                    {rowValues[0]}
                                </td>
                                : headerKeys.map((key, cellIndex) => (
                                    <td key={cellIndex}>{row[key]}</td>
                                ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

function ARPTable({ data }) {
  const tables = [];

  for (const frt in data) {
    if (data.hasOwnProperty(frt)) {
      const tableData = []; // Данные для текущей таблицы
    //   tableData.push({ IP: frt, MAC: null }); // Добавляем заголовочную строку

      const innerObject = data[frt];
      for (const key in innerObject) {
        if (innerObject.hasOwnProperty(key)) {
          tableData.push({ IP: key, MAC: innerObject[key] });
        }
      }
     
      tables.push(
        <div key={frt}>
         <h3>{`ARP Таблица для ${frt}`}</h3>
           <Table data={tableData} marginCollaps={true} columns={['IP', 'MAC']} />
        </div>
      )

    }
  }
  return (
    <div style={{display: 'grid',
        gridTemplateColumns: '33% 33% 34%',
        gridGap:' 10px'}}>
      {tables}
    </div>
  )
}

function MACTable({ data }) {
    const tables = [];
  
    for (const frt in data) {
      if (data.hasOwnProperty(frt)) {
        const tableData = []; // Данные для текущей таблицы
      //   tableData.push({ IP: frt, MAC: null }); // Добавляем заголовочную строку
  
        const innerObject = data[frt];
        for (const key in innerObject) {
          if (innerObject.hasOwnProperty(key)) {
            tableData.push({ Interface: key, MAC: innerObject[key] });
          }
        }
       
        tables.push(
          <div key={frt}>
           <h3>{`MAC Таблица для ${frt}`}</h3>
             <Table data={tableData} marginCollaps={true} columns={['Interface', 'MAC']} />
          </div>
        )
  
      }
    }
    return (
      <div style={{display: 'grid',
          gridTemplateColumns: '33% 33% 34%',
          gridGap:' 10px'}}>
        {tables}
      </div>
    )
  }


export {Table, ARPTable, MACTable};