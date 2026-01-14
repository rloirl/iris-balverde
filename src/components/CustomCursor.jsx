import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

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

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const getCursorImage = () => {
    switch (cursorType) {
      case 'link':
        return '/Assets/Cosmica Angel Rose/link select.cur';
      case 'pointer':
        return '/Assets/Cosmica Angel Rose/link select.cur';
      case 'text':
        return '/Assets/Cosmica Angel Rose/text select.cur';
      default:
        return '/Assets/Cosmica Angel Rose/default.cur';
    }
  };

  return (
    <div className="cursor-wrapper">
      <img
        src={getCursorImage()}
        alt=""
        className="custom-cursor-image"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
