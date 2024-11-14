import React from 'react';

const IframeComponent = ({link}) => {
  return (
    <div>
        <div
        style={{
            width: '100%',
            height: '665px',       // Высота области просмотра `iframe`
            overflow: 'hidden',     // Скрываем верхнюю часть, чтобы создать эффект прокрутки
            position: 'relative',
            border: '2px solid #b4befe',
            borderRadius: '5px',
        }}
        >
            <iframe
                src={link}
                width="100%"
                height="1100px"         // Высота `iframe` больше контейнера, чтобы учесть смещение
                style={{
                border: 'none',
                position: 'absolute',
                top: '-435px',       // Смещение, чтобы скрыть верхнюю часть и создать эффект прокрутки
                }}
                title="Embedded Page"
                allowFullScreen
            ></iframe>
        </div>
    </div>
  );
};

export default IframeComponent;
