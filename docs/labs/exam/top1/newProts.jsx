import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const color = '#b4befe';
const colorFill = '#1e1e2e';
const stroke = 2;
const borderRadius = 0; // Выносим радиус скругления в отдельную переменную



const Package = ({ data, width = 700, verticalSpacing = 50 }) => {
    const svgRef = useRef(null);
    const containerRef = useRef(null);
    const rectHeight = 80;
    const labelWidth = 80;
    const lineOffset = 0;
    const [collapsedRows, setCollapsedRows] = useState({});
    const [currentOffsetY, setCurrentOffsetY] = useState(0);
    let targetOffsetY = 0;

    useEffect(() => {
        if (!data || data.length === 0) return;

        const visibleRowCount = data.filter((_, index) => !collapsedRows[index]).length;
        targetOffsetY = (data.length - visibleRowCount) * (rectHeight + verticalSpacing);


        d3.select(containerRef.current)
            .transition()
             .duration(2 * Math.abs(currentOffsetY - targetOffsetY))
            .style("transform", `translateY(${-targetOffsetY}px)`)
            .style("height", (data.length * (rectHeight + verticalSpacing) - targetOffsetY) + 'px')
            .on("end", () => {
                // Этот код выполнится после окончания анимации
                console.log(currentOffsetY - targetOffsetY);
                // Можно вызвать другую функцию, изменить состояние, и т.д.
                setCurrentOffsetY((data.length - visibleRowCount) * (rectHeight + verticalSpacing));
            });


        const svg = d3.select(svgRef.current);
        svg.attr("width", width + labelWidth);
        svg.selectAll("*").remove();

        const containerWidth = width - 2;

        let rectData = [];
        let rowDataMap = {};

        data.forEach((rowData, rowIndex) => {
            const keys = Object.keys(rowData).filter(key => key !== 'label');
            let rowRectData = [];
            keys.forEach((key, keyIndex) => {
                const rect = {
                    key: key,
                    value: rowData[key],
                    x: keyIndex * (containerWidth / keys.length) + labelWidth,
                    y: rowIndex * (rectHeight + verticalSpacing),
                    row: rowIndex,
                    col: keyIndex,
                    rowKeysLength: keys.length,
                };
                rowRectData.push(rect);
                rectData.push(rect);
            });
            rowDataMap[rowIndex] = rowRectData;
        });

        // Create a container rectangle for each row
        Object.keys(rowDataMap).forEach(rowIndex => {
            const rowData = rowDataMap[rowIndex];
            const firstRect = rowData[0];
            const lastRect = rowData[rowData.length - 1];
            const rowGroup = svg.append("g")
                .attr("class", "row-container")
                .attr("data-row-index", rowIndex)
                .style("display", collapsedRows[rowIndex] === true ? "none" : "block");

             rowGroup.append("rect")
                .attr("x", firstRect.x)
                .attr("y", firstRect.y)
                .attr("width", lastRect.x + containerWidth / lastRect.rowKeysLength - firstRect.x)
                .attr("height", rectHeight)
                .attr("stroke", color)
                .attr("stroke-width", stroke)
                .attr("fill", colorFill)
                .attr("rx", borderRadius)   // используем вынесенную переменную
                .attr("ry", borderRadius);    // используем вынесенную переменную

            const labelText = data[rowIndex].label;
            rowGroup.append("text")
                .attr("x", 0)
                .attr("y", firstRect.y + rectHeight / 2 + 5)
                .text(labelText)
                .attr("font-size", "18px")
                 .attr("fill", color)
                .style("font-style", "italic");
        });



        const rectGroups = svg.selectAll("g g")
            .data(rectData)
            .enter()
            .append("g")
            .style("display", d => collapsedRows[d.row] === true ? "none" : "block");

        // Add text (keys and values)
        rectGroups.each(function (d) {
            const group = d3.select(this);

            let yPos = d.y + rectHeight / 2 - (d.value === '' ? -5 : 5);
            const lineHeight = 20;

            group.append("text")
                .attr("x", d.x + 10)
                .attr("y", yPos)
                .text(d.key)
                .attr("font-size", "16px")
                .attr("fill", color)
                 .style("font-style", "italic");

            group.append("text")
                .attr("x", d.x + 10)
                .attr("y", yPos + lineHeight)
                .text(d.value || "")
                .attr("font-size", "16px")
                .attr("fill", "white");
        });

        // Add Bezier curves
        rectGroups.each(function (d, i) {
            if (d.key === 'Data' && d.row > 0) {
                const prevRow = data[d.row - 1];
                if (prevRow) {
                    const prevRowKeys = Object.keys(prevRow).filter(key => key !== 'label');
                    const currentRectWidth = containerWidth / d.rowKeysLength;

                    const lineStartX = d.x;
                    const lineEndX = d.x + currentRectWidth;
                    const lineY = d.y;

                    const curveY = lineY - verticalSpacing;
                    const controlPointY = lineY - (verticalSpacing);

                    // Create Bezier curves for the beginning and end of the current Data
                    const pathStart = d3.path();
                    pathStart.moveTo(lineStartX, lineY);
                    pathStart.quadraticCurveTo(lineStartX, controlPointY, labelWidth + borderRadius, curveY);

                    const pathEnd = d3.path();
                    pathEnd.moveTo(lineEndX, lineY);
                    pathEnd.quadraticCurveTo(lineEndX, controlPointY, containerWidth + labelWidth - borderRadius, curveY);

                    if (collapsedRows[d.row - 1] !== true) {
                        svg.append("line")
                            .attr("x1", labelWidth + borderRadius)
                            .attr("y1", curveY)
                            .attr("x2", containerWidth + labelWidth - borderRadius)
                            .attr("y2", curveY)
                            .attr("stroke", colorFill)
                            .attr("stroke-width", stroke + 1);

                        svg.append("line")
                            .attr("x1", labelWidth + borderRadius)
                            .attr("y1", curveY)
                            .attr("x2", containerWidth + labelWidth - borderRadius)
                            .attr("y2", curveY)
                            .attr("stroke", color)
                            .attr("stroke-width", stroke - 1)
                            .attr("stroke-dasharray", "5, 5");
                    }


                    svg.append("path")
                        .attr("d", pathStart.toString())
                        .attr("stroke", color)
                        .attr("stroke-width", stroke)
                        .attr("fill", "none")
                        .style("display", collapsedRows[d.row] === true || collapsedRows[d.row - 1] === true ? "none" : "block");

                    svg.append("path")
                        .attr("d", pathEnd.toString())
                        .attr("stroke", color)
                        .attr("stroke-width", stroke)
                        .attr("fill", "none")
                        .style("display", collapsedRows[d.row] === true || collapsedRows[d.row - 1] === true ? "none" : "block");

                    if (collapsedRows[d.row] !== true) {
                        svg.append("line")
                            .attr("x1", lineStartX)
                            .attr("y1", lineY)
                            .attr("x2", lineStartX)
                            .attr("y2", lineY + rectHeight)
                            .attr("stroke", color)
                            .attr("stroke-width", stroke - 1)
                            .attr("stroke-dasharray", "5, 5");

                        svg.append("line")
                            .attr("x1", lineEndX)
                            .attr("y1", lineY)
                            .attr("x2", lineEndX)
                            .attr("y2", lineY + rectHeight)
                            .attr("stroke", color)
                            .attr("stroke-width", stroke - 1)
                            .attr("stroke-dasharray", "5, 5");
                    }

                    if (collapsedRows[d.row - 1] !== true) {
                        svg.append("line")
                            .attr("x1", lineStartX + 1)
                            .attr("y1", lineY)
                            .attr("x2", lineEndX - 1)
                            .attr("y2", lineY)
                            .attr("stroke", colorFill)
                            .attr("stroke-width", stroke + 1);

                        svg.append("line")
                            .attr("x1", lineStartX + 1)
                            .attr("y1", lineY)
                            .attr("x2", lineEndX - 1)
                            .attr("y2", lineY)
                            .attr("stroke", color)
                            .attr("stroke-width", stroke - 1)
                            .attr("stroke-dasharray", "5, 5");
                    }
                }
            }
        });

        svg.selectAll(".row-container")
            .on("click", function () {
                const rowIndex = parseInt(this.getAttribute("data-row-index"));
                handleRowClick(rowIndex);
            });

        const totalHeight = data.length * (rectHeight + verticalSpacing);
        svg.attr("height", totalHeight);


    }, [data, width, rectHeight, lineOffset, verticalSpacing, collapsedRows, labelWidth]);

    const handleRowClick = (rowIndex) => {
        const newCollapsedRows = { ...collapsedRows };
        const currentRowCollapsed = !newCollapsedRows[rowIndex - 1];

        for (let i = 0; i < rowIndex; i++) {
            newCollapsedRows[i] = currentRowCollapsed;
        }

        setCollapsedRows(newCollapsedRows);
    };

    const totalHeight = data ? data.length * (rectHeight + verticalSpacing) : 0;
    return (
        <div ref={containerRef} style={{height: totalHeight}}>
             <svg ref={svgRef} width={width + labelWidth}></svg>
        </div>
    );
};

export default Package;