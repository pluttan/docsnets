import React, { useState } from 'react';

const HoverText = ({ text, desc }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{
                display: 'inline-block',
                'width': '100%',
                'height': '100%',
                'padding': '15px',
            }}
        >
            <span
                style={{
                    color: '#babbf1'
                }}
            >{text}</span>
            {isHovered && (
                <div
                    style={{
                        position: 'fixed',
                        top: mousePosition.y + 10,
                        left: mousePosition.x + 10,
                        backgroundColor: 'rgba(24, 24, 37, 0.85)',
                        border: '2px solid #b4befe',
                        color: '#cdd6f4',
                        padding: '5px',
                        borderRadius: '5px',
                        maxWidth: '400px',
                        zIndex: '400',
                        // whiteSpace: 'nowrap',
                        // overflow: 'hidden',
                        // textOverflow: 'ellipsis',
                    }}
                >
                    {desc}
                </div>
            )}
        </div>
    );
};

export default HoverText;
