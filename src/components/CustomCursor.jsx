import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const handleMouseOver = (e) => {
      // Check if hovering over interactive elements
      if (
        e.target.tagName === 'A' ||
        e.target.closest('a')
      ) {
        setCursorType('link');
      } else if (
        e.target.tagName === 'BUTTON' ||
        e.target.closest('button') ||
        e.target.style.cursor === 'pointer' ||
        window.getComputedStyle(e.target).cursor === 'pointer'
      ) {
        setCursorType('pointer');
      } else if (
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA'
      ) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    // Apply cursor to body based on cursor type
    const getCursorUrl = () => {
      switch (cursorType) {
        case 'link':
        case 'pointer':
          return "url('./Assets/Cosmica Angel Rose/link select.cur'), pointer";
        case 'text':
          return "url('./Assets/Cosmica Angel Rose/text select.cur'), text";
        default:
          return "url('./Assets/Cosmica Angel Rose/default.cur'), auto";
      }
    };

    document.body.style.cursor = getCursorUrl();

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [cursorType]);

  return null; // No visual component needed
};

export default CustomCursor;
