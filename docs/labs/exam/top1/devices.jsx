const size = 30;
const color = '#b4befe';
const colorFill = '#1e1e2e';

function Router({ x, y, svg, name }) {
    const radius = size / 1.5;

    const g = svg.append('g').attr('transform', `translate(${x},${y})`);

    // Круг
    g.append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', radius)
        .attr('fill', colorFill)
        .attr('stroke', color);

    // Крест
    g.append('line')
        .attr('x1', -radius / 2)
        .attr('y1', -radius / 2)
        .attr('x2', radius / 2)
        .attr('y2', radius / 2)
        .attr('stroke', color);
    g.append('line')
        .attr('x1', radius / 2)
        .attr('y1', -radius / 2)
        .attr('x2', -radius / 2)
        .attr('y2', radius / 2)
        .attr('stroke', color);

    // Фон для текста
    const textBBox = g.append('text')
        .attr('x', 0)
        .attr('y', radius * 1.8)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', color)
        .text(name)
        .node()
        .getBBox();


    const padding = 3;
    g.insert('rect', 'text')
        .attr('x', textBBox.x - padding)
        .attr('y', textBBox.y - padding)
        .attr('width', textBBox.width + 2 * padding)
        .attr('height', textBBox.height + 2 * padding)
        .attr('fill', colorFill);

    // Текст имени
    g.append('text')
        .attr('x', 0)
        .attr('y', radius * 1.8)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', color)
        .text(name);
}

function Switch({ x, y, svg, name }) {
    const width = size * 1.5;
    const height = size / 1.1;

    const g = svg.append('g').attr('transform', `translate(${x},${y})`);

    // Прямоугольник
    g.append('rect')
        .attr('x', -width / 2)
        .attr('y', -height / 2)
        .attr('width', width)
        .attr('height', height)
        .attr('fill', colorFill)
        .attr('stroke', color);

    // Стрелка влево
    g.append('line')
        .attr('x1', width / 4 + 2.5)
        .attr('y1', -height / 8)
        .attr('x2', -width / 4)
        .attr('y2', -height / 8)
        .attr('stroke', color)
        .attr('marker-end', 'url(#arrowhead)'); // Используем маркер стрелки

    // Стрелка вправо
    g.append('line')
        .attr('x1', -width / 4 - 2.5)
        .attr('y1', +height / 8)
        .attr('x2', width / 4)
        .attr('y2', +height / 8)
        .attr('stroke', color)
        .attr('marker-end', 'url(#arrowhead)'); // Используем маркер стрелки

    // Фон для текста
    const textBBox = g.append('text')
        .attr('x', 0)
        .attr('y', height + 2)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', color)
        .text(name)
        .node()
        .getBBox();

    const padding = 3;
    g.insert('rect', 'text')
        .attr('x', textBBox.x - padding)
        .attr('y', textBBox.y - padding)
        .attr('width', textBBox.width + 2 * padding)
        .attr('height', textBBox.height + 2 * padding)
        .attr('fill', colorFill);

    // Текст имени
    g.append('text')
        .attr('x', 0)
        .attr('y', height + 2)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', color)
        .text(name);
}

function Serv({ x, y, svg, name }) {
    const height = size * 1.7;
    const width = size;

    const g = svg.append('g').attr('transform', `translate(${x},${y})`);

    // Прямоугольник
    g.append('rect')
        .attr('x', -width / 2)
        .attr('y', -height / 2)
        .attr('width', width)
        .attr('height', height)
        .attr('fill', colorFill)
        .attr('stroke', color);

    // Линии
    g.append('line')
        .attr('x1', -width / 4)
        .attr('y1', -height / 4)
        .attr('x2', width / 4)
        .attr('y2', -height / 4)
        .attr('stroke', color);
    g.append('line')
        .attr('x1', -width / 4)
        .attr('y1', -height / 8)
        .attr('x2', width / 4)
        .attr('y2', -height / 8)
        .attr('stroke', color);
    g.append('line')
        .attr('x1', -width / 4)
        .attr('y1', height / 4)
        .attr('x2', width / 4)
        .attr('y2', height / 4)
        .attr('stroke', color);
    g.append('line')
        .attr('x1', -width / 4)
        .attr('y1', height / 8)
        .attr('x2', width / 4)
        .attr('y2', height / 8)
        .attr('stroke', color);
    g.append('line')
        .attr('x1', -width / 4)
        .attr('y1', 0)
        .attr('x2', width / 4)
        .attr('y2', 0)
        .attr('stroke', color);

    // Фон для текста
    const textBBox = g.append('text')
        .attr('x', 0)
        .attr('y', height * 0.8)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', color)
        .text(name)
        .node()
        .getBBox();

    const padding = 3;
    g.insert('rect', 'text')
        .attr('x', textBBox.x - padding)
        .attr('y', textBBox.y - padding)
        .attr('width', textBBox.width + 2 * padding)
        .attr('height', textBBox.height + 2 * padding)
        .attr('fill', colorFill);

    // Текст имени
    g.append('text')
        .attr('x', 0)
        .attr('y', height * 0.8)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', color)
        .text(name);
}

function Comp({ x, y, svg, name }) {
    const squareSize = size / 2;
    const rectWidth = size;
    const rectHeight = size / 1.7;

    const g = svg.append('g').attr('transform', `translate(${x},${y})`);

    // Прямоугольник снизу (сначала рисуем его, чтобы был центрирован)
    g.append('rect')
        .attr('x', -rectWidth / 2)
        .attr('y', -rectHeight / 2) // Центрируем прямоугольник по вертикали
        .attr('width', rectWidth)
        .attr('height', rectHeight)
        .attr('fill', colorFill)
        .attr('stroke', color);

    // Квадрат (рисуем сверху, опираясь на центровку нижнего прямоугольника)
    g.append('rect')
        .attr('x', -squareSize / 2)
        .attr('y', -squareSize / 2 - rectHeight + 1) //смещаем квадрат относительно центра прямоугольника
        .attr('width', squareSize)
        .attr('height', squareSize)
        .attr('fill', colorFill)
        .attr('stroke', color);

    // Фон для текста
    const textBBox = g.append('text')
        .attr('x', 0)
        .attr('y', squareSize * 2.2 - rectHeight / 2) // Смещение текста относительно центра нижней части
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', color)
        .text(name)
        .node()
        .getBBox();

    const padding = 3;
    g.insert('rect', 'text')
        .attr('x', textBBox.x - padding)
        .attr('y', textBBox.y - padding)
        .attr('width', textBBox.width + 2 * padding)
        .attr('height', textBBox.height + 2 * padding)
        .attr('fill', colorFill);

    // Текст имени
    g.append('text')
        .attr('x', 0)
        .attr('y', squareSize * 2.2 - rectHeight / 2) // Смещение текста относительно центра нижней части
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', color)
        .text(name);
}

export {Router, Switch, Serv, Comp, size, color, colorFill}