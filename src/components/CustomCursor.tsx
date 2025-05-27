import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Handle hover state
  const handleLinkHover = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const hovering = !!(
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.closest('a') ||
      target.closest('button') ||
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.getAttribute('role') === 'button' ||
      target.classList.contains('cursor-pointer')
    );
    setIsHovering(hovering);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      document.body.style.cursor = 'none';
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = 'auto';
      setIsVisible(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mousemove', handleLinkHover, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial cursor state
    if (window.matchMedia && !window.matchMedia('(hover: none)').matches) {
      document.body.style.cursor = 'none';
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousemove', handleLinkHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, [handleLinkHover, cursorX, cursorY]);

  // Calculate scale based on hover/click state
  let scale = 1;
  if (isClicking) scale = 0.8;
  else if (isHovering) scale = 1.5;

  return (
    <motion.div
      className="cursor-ring mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        scale,
        display: isVisible ? 'block' : 'none',
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 700,
        damping: 25,
      }}
    />
  );
};

export default CustomCursor;