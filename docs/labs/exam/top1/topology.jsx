import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Router, Switch, Serv, Comp, size, color, colorFill } from './devices';
import Package from './newProts'

const packageColors = ['#f5c2e7', '#cba6f7', '#f38ba8', '#eba0ac', '#fab387', '#f9e2af', '#a6e3a1', '#94e2d5', '#89dceb', '#74c7ec', '#89b4fa'];
let colorPackage = packageColors[Math.floor(Math.random() * packageColors.length)];
let flag = true;

const defineArrowMarker = (svg) => {
    svg.append('defs')
        .append('marker')
        .attr('id', 'arrowhead')
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 5)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 5)
        .attr('markerHeight', 5)
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', color);
};

const drawConnectionLine = (svg, startX, startY, endX, endY) => {
    svg.append('line')
        .attr('x1', startX)
        .attr('y1', startY)
        .attr('x2', endX)
        .attr('y2', endY)
        .attr('stroke', color);
};

const drawDevice = (svg, device, deviceType) => {
    const { x, y, name } = device;
    switch (deviceType) {
        case 'Comp':
            Comp({ x, y, svg, name });
            break;
        case 'Switch':
            Switch({ x, y, svg, name });
            break;
        case 'Router':
            Router({ x, y, svg, name });
            break;
        case 'Serv':
            Serv({ x, y, svg, name });
            break;
        default:
            break;
    }
};

const createPackageElements = (packageElements, colorPackage, colorFill, size) => {
    const packageEnter = packageElements.enter()
        .append('g')
        .attr('class', 'package-g')

    packageEnter.append('rect')
        .attr('class', 'package-rect')
        .attr('width', size / 1.5)
        .attr('height', size / 2)
        .attr('fill', colorFill)
        .attr('stroke', colorPackage);

    packageEnter.append('line')
        .attr('class', 'package-line1')
        .attr('stroke', colorPackage);

    packageEnter.append('line')
        .attr('class', 'package-line2')
        .attr('stroke', colorPackage);
    return packageEnter;
};

const updatePackagePosition = (packageElements, startX, startY, size) => {
    packageElements.attr('transform', `translate(${startX + size / 2 - size / 1.5 / 2},${startY + size / 2 - size / 4})`)
        .select('.package-line1')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', size / 1.5 / 2)
        .attr('y2', size / 4)

    packageElements
        .select('.package-line2')
        .attr('x1', size / 1.5 / 2)
        .attr('y1', size / 4)
        .attr('x2', size / 1.5)
        .attr('y2', 0)
};


const animatePackagePath = (packagePath, devicePositions, svg, size, packageElements) => {
    const animatePackage = (path, index, packageElement, isClone = false) => {
        const sourceDevice = path[index];
        const next = path[index + 1];
        let targetDevice = null;
        let needAnimate = true;

        if (Array.isArray(next)) {
            // Handle branching paths
            next.forEach((branch, idx) => {
                if (devicePositions.current[branch]) {
                    const clone = packageElement.clone(true);
                    svg.select('.package-g').node().parentNode.appendChild(clone.node());
                    let newPath = [sourceDevice];
                    path.forEach((e, i) => { if (i > index) newPath.push(e[idx]) })
                    animatePackage(newPath, 0, clone, true);
                    console.log(newPath);
                }
            });
            needAnimate = false;
            packageElement.remove();
        } else {
            targetDevice = next;
        }

        if (needAnimate && devicePositions.current[sourceDevice] && (targetDevice ? devicePositions.current[targetDevice] : true)) {
            const startX = devicePositions.current[sourceDevice].x;
            const startY = devicePositions.current[sourceDevice].y;
            const endX = targetDevice ? devicePositions.current[targetDevice].x : startX;
            const endY = targetDevice ? devicePositions.current[targetDevice].y : startY;

            packageElement
                .transition()
                .duration(1000)
                .attr('transform', `translate(${endX + size / 2 - size / 1.5 / 2},${endY + size / 2 - size / 4})`)
                .on('end', () => {
                    animatePackage(path, index + 1, packageElement, isClone);
                });

        }
    };

    animatePackage(packagePath, 0, packageElements);
};

function Topology({ devices, connect, package: packagePath, protocols }) {
    const canvasRef = useRef(null);
    const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const devicePositions = useRef({});
    const svgRef = useRef(null);

    useEffect(() => {
        initializeCanvas();
        drawConnections();
        drawDevices();
    }, [devices, connect]);

    useEffect(() => {
        drawPackagePath();
    }, [packagePath, isAnimationPlaying]);

    const initializeCanvas = () => {
        const svg = d3.select(canvasRef.current);
        svgRef.current = svg;
        svg.selectAll('*').remove();
        defineArrowMarker(svg);
    };


    const drawConnections = () => {
        if (!connect) return;

        const svg = svgRef.current;
        for (const sourceDevice in connect) {
            if (connect.hasOwnProperty(sourceDevice)) {
                const targetDevices = connect[sourceDevice];
                if (targetDevices) {
                    targetDevices.forEach(targetDevice => {
                        updateDevicePositions(sourceDevice, targetDevice);
                        if (devicePositions.current[sourceDevice] && devicePositions.current[targetDevice]) {
                            const startX = devicePositions.current[sourceDevice].x;
                            const startY = devicePositions.current[sourceDevice].y;
                            const endX = devicePositions.current[targetDevice].x;
                            const endY = devicePositions.current[targetDevice].y;
                            drawConnectionLine(svg, startX, startY, endX, endY);
                        }
                    });
                }
            }
        }
    };

    const updateDevicePositions = (sourceDevice, targetDevice) => {
        if (!devices) return;
        for (const deviceType in devices) {
            if (devices.hasOwnProperty(deviceType)) {
                const deviceInstances = devices[deviceType];
                deviceInstances.forEach((device) => {
                    if (device.name === sourceDevice)
                        devicePositions.current[device.name] = { x: device.x, y: device.y };

                    if (device.name === targetDevice)
                        devicePositions.current[device.name] = { x: device.x, y: device.y };
                });
            }
        }
    };



    const drawDevices = () => {
        if (!devices) return;
        const svg = svgRef.current;
        for (const deviceType in devices) {
            if (devices.hasOwnProperty(deviceType)) {
                const deviceInstances = devices[deviceType];
                deviceInstances.forEach((device) => {
                    drawDevice(svg, device, deviceType);
                });
            }
        }
    };

    const drawPackagePath = () => {
        if (!packagePath || packagePath.length === 0 || !devicePositions.current[packagePath[0]]) {
            return;
        }
        const svg = svgRef.current;
        let packageElements = svg.selectAll('.package-g').data([packagePath]);
        const packageEnter = createPackageElements(packageElements, colorPackage, colorFill, size);
        packageElements = packageElements.merge(packageEnter);
        packageElements.exit().remove();
        const startDevice = packagePath[0];
        const startX = devicePositions.current[startDevice].x;
        const startY = devicePositions.current[startDevice].y;
        updatePackagePosition(packageElements, startX, startY, size);
        if (!isFirstRender && isAnimationPlaying) {
            animatePackagePath(packagePath, devicePositions, svg, size, packageElements);
        }
        setIsFirstRender(false);
    };

    const handlePlayAnimation = () => {
        setIsAnimationPlaying(false);
        const svg = d3.select(canvasRef.current);
        svg.selectAll('.package-g').remove();
        setTimeout(() => {
            setIsAnimationPlaying(true);
        }, 0);
        if (!flag) colorPackage = packageColors[Math.floor(Math.random() * packageColors.length)];
        flag = false;
    };

    return (
        <div style={{
            backgroundColor: '#1e1e2e',
            border: '2px solid #b7bdf86f',
            borderRadius: '10px',
            boxShadow: 'var(--table-shadow)',
            padding: '10px',
            margin: '10px',
            overflow: 'hidden',
            display: 'block',
            overflow: 'hidden',
            position: 'relative',
        }}>
            <svg ref={canvasRef} width={900} height={500}></svg>
            <div style={{ margin: '10px', gap: '10px' }}>
                {(packagePath) ? <svg
                    onClick={handlePlayAnimation}
                    width={250}
                    height={40}
                    style={{
                        backgroundColor: '#1e1e2e',
                        border: '2px solid #b7bdf86f',
                        borderRadius: '10px',
                        padding: '10px',
                        overflow: 'hidden',
                        display: 'block',
                        overflow: 'hidden',
                        position: 'relative',
                        cursor: 'pointer',
                        marginBottom: '30px'
                    }}
                >
                    <text
                        x="50%"
                        y="50%"
                        dy=".3em"
                        textAnchor="middle"
                        style={{
                            fill: color,
                            userSelect: 'none',
                            fontSize: '16px'
                        }}
                    >Воспроизвести анимацию</text>
                </svg> : <div />}
                {(protocols) ? <Package data={protocols} /> : <div />}
            </div>
        </div>
    );
}

export { Topology };