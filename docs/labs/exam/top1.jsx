let devices = {
    Comp: [
        { x: 59, y: 500-312, name: 'l0' }, 
        { x: 41, y: 500-410, name: 'l1' }, 
        { x: 170, y: 500-459, name: 'l2' },
        { x: 291, y: 500-462, name: 'l3' },
        { x: 584, y: 500-130, name: 'l4' },
        { x: 680, y: 500-165, name: 'l5' },
        { x: 793, y: 500-237, name: 'l6' }
    ],
    Switch: [
        { x: 214, y: 500-336, name: 'sw0' }, 
        { x: 300, y: 500-300, name: 'sw1' },
        { x: 300, y: 500-100, name: 'sw2' }, 
        { x: 528, y: 500-225, name: 'sw3' },
        { x: 652, y: 500-376, name: 'sw4' }
    ],
    Router: [
        { x: 399, y: 500-274, name: 'r0' },
        { x: 387, y: 500-183, name: 'r1' },
        { x: 495, y: 500-313, name: 'r2' }
    ],
    Serv: [
        { x: 400, y: 500-435, name: 's0' },
        { x: 790, y: 500-406, name: 's1' },
        { x: 153, y: 500-72, name: 's2' }
    ]
};

let connect={
    sw0:['l0', 'l1','l2','l3'],
    sw1:['sw0', 's0'],
    r0:['sw1', 'r1', 'r2', 'sw3'],
    sw3:['l4', 'l5','l6',],
    sw2:['s2'],
    sw4:['s1'],
    r1:['sw2'],
    r2:['sw4'],
};

export {
    connect, 
    devices
};