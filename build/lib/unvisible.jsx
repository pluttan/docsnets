import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: var(--content-height);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    max-height: var(--content-height);
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;


const CollapsibleContainer = styled.div`
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const CollapsibleHeader = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
`;

const Triangle = styled.span`
  display: inline-block;
  margin-right: 5px;
  transition: transform 0.2s ease;
  font-size: 1em;
  transform: ${(props) => (props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

const Label = styled.span``;

const CollapsibleContent = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #1e1e2e !important;
  border: 2px solid #b7bdf86f !important;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  overflow: hidden;
  position: relative;
   max-height: 0;
  opacity: 0;
    animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
    
  &.open {
    animation-name: ${slideDown};
  }
    
  &.closed {
     animation-name: ${slideUp};
  }
`;


const CollapsibleText = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
     const [contentHeight, setContentHeight] = useState(0);


    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (contentRef.current) {
                if(isOpen){
                       const height = contentRef.current.scrollHeight;
                         setContentHeight(height)
                   contentRef.current.style.setProperty('--content-height', `${height}px`);
                 contentRef.current.classList.add('open');
                contentRef.current.classList.remove('closed');
                   } else {
                 contentRef.current.classList.add('closed');
                 contentRef.current.classList.remove('open');
            }
        }
    }, [isOpen]);

    return (
        <CollapsibleContainer>
            <CollapsibleHeader onClick={toggleOpen}>
                <Triangle isOpen={isOpen}>▶</Triangle>
                <Label><h3>{label}</h3></Label>
            </CollapsibleHeader>
             <CollapsibleContent  ref={contentRef}>
               {children}
            </CollapsibleContent>
        </CollapsibleContainer>
    );
};

export default CollapsibleText;