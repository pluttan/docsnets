import React, { useState, useRef, useEffect } from 'react';

// --- Styles ---
const commonStyles = {
    cellStyle: {
        cursor: 'pointer',
        padding: '8px',
        textAlign: 'left',
    },
    proSt: {
        color: '#b7bdf8',
        margin: '0px',
        fontStyle: 'italic',
    },
    tableWrapper: {
        width: '100%',
        overflowX: 'auto',
        padding: '0',
        margin: '0',
    },
    tableStyle: {
        width: '100%',
        borderCollapse: 'collapse',
        display: 'table', // Keep table display behavior
    },
     tableT: {
        width: '100%',
        padding: 0,
        margin: 0,
    },
     tableWrapperStyle: {
        width: '100%',
        tableLayout: 'auto',
        border: '0px',
        borderRadius: '0px',
        boxShadow: 'none',
        userSelect: 'none',
        padding: '0',
        margin: '0',
    },
    tableProt: {
        width: 'auto',
        paddingTop: '2vh',
        backgroundColor: 'transparent',
        border: '0px',
    },
     tableOut: {
        width: '100%',
        backgroundColor: 'transparent',
        border: '0px',
        padding: '0px',
    },
    tableLabelStyle: {
        textAlign: 'left',
        marginRight: '10px',
    },
     subTableWrapperStyle: {
        marginTop: '-1.5em',
        overflow: 'hidden',
        width: '100%',
    },
    tableRowStyle: {
        display: 'flex',
        width: '100%'
    },
};

// --- Components ---
function InteractiveCell({ cellValue1, cellValue2, id, onSubTableOpen }) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);
    const handleClick = () => onSubTableOpen(id);

    return (
        <td
            style={{ ...commonStyles.cellStyle }}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p style={commonStyles.proSt}>{cellValue1}</p>
            {cellValue2}
        </td>
    );
}

function InteractiveTable({ cellsData, children, label, activeCells, onCellClick, nestedLevel = 0 }) {
    const subTableRef = useRef(null);
    const [targetCellKey, setTargetCellKey] = useState(null);
    const rowRef = useRef(null);

    useEffect(() => {
        setTargetCellKey(Object.keys(cellsData).find(key => key === 'Data') || null);
    }, [cellsData]);

    const handleSubTableOpen = (id) => {
        if (!targetCellKey) return;
        if (Object.keys(cellsData)[id] === targetCellKey) {
            onCellClick(id, nestedLevel);
        }
    };

    const cells = Object.entries(cellsData).map(([key, value], index) => (
        <InteractiveCell
            key={index}
            id={index}
            cellValue1={key}
            cellValue2={value}
            onSubTableOpen={handleSubTableOpen}
        />
    ));

    const targetId = targetCellKey ? Object.keys(cellsData).indexOf(targetCellKey) : -1;

    return (
        <div style={commonStyles.tableT}>
            <div
                style={{ ...commonStyles.subTableWrapperStyle }}
                ref={subTableRef}
            >
                {targetId === (activeCells && activeCells[nestedLevel]) && children}
            </div>
            <div style={commonStyles.tableWrapper}>
                <table style={commonStyles.tableWrapperStyle}>
                    <tbody>
                    <tr ref={rowRef} style={commonStyles.tableRowStyle}>
                        <td style={commonStyles.tableProt}>
                            {label && <div style={commonStyles.tableLabelStyle}>{label}</div>}
                        </td>
                        <td style={commonStyles.tableOut}>
                        <table style={commonStyles.tableStyle}>
                            <tbody>
                            <tr>{cells}</tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function InteractiveTableWrapper({ cellsData, label, children }) {
    const [activeCells, setActiveCells] = useState({});
    const [initialActiveCells, setInitialActiveCells] = useState({});

    useEffect(() => {
        const getInitialActiveCells = (children, level = 0) => {
            const dataIndex = Object.keys(cellsData).indexOf(
                Object.keys(cellsData).find(key => key === 'Data')
            );

            setInitialActiveCells(prev => ({ ...prev, [level]: dataIndex }));

            React.Children.forEach(children, (child, index) => {
                if (child?.props?.cellsData) {
                    getInitialActiveCells(child.props.children, level + 1);
                }
            });
        };

        getInitialActiveCells(children);
    }, [cellsData, children]);

    useEffect(() => {
        if (Object.keys(initialActiveCells).length > 0) {
            setActiveCells(initialActiveCells);
        }
    }, [initialActiveCells]);

    const handleCellClick = (id, level) => {
        setActiveCells(prevState => {
            if (prevState[level] === id) {
                const newState = { ...prevState };
                delete newState[level];
                return newState;
            }
            return { ...prevState, [level]: id };
        });
    };

    return (
        <InteractiveTable
            cellsData={cellsData}
            label={label}
            activeCells={activeCells}
            onCellClick={handleCellClick}
            nestedLevel={0}
        >
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    activeCells: activeCells,
                    onCellClick: handleCellClick,
                    nestedLevel: index + 1
                });
            })}
        </InteractiveTable>
    );
}

export default InteractiveTableWrapper;