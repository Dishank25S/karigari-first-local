import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Hide system cursor
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const move = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    const down = () => setIsActive(true);
    const up = () => setIsActive(false);

    document.addEventListener('mousemove', move);
    document.addEventListener('mousedown', down);
    document.addEventListener('mouseup', up);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], .cursor-pointer'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', down);
      el.addEventListener('mouseleave', up);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mousedown', down);
      document.removeEventListener('mouseup', up);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', down);
        el.removeEventListener('mouseleave', up);
      });
      document.head.removeChild(style);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        border: '2px solid #FFD700',
        backgroundColor: 'transparent',
        borderRadius: '50%',
      }}
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        width: isActive ? 8 : 20,
        height: isActive ? 8 : 20,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
    />
  );
};

export default CustomCursor;
