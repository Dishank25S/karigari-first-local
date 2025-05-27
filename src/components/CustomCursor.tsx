import React, { useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const isVisible = useRef(false);
  const isHovering = useRef(false);
  const isClicking = useRef(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Use spring for smoother cursor movement
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleLinkHover = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;    isHovering.current = !!(
      target.tagName === 'A' || 
      target.tagName === 'BUTTON' || 
      target.closest('a') || 
      target.closest('button') ||
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.getAttribute('role') === 'button' ||
      target.classList.contains('cursor-pointer')
    );

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${cursorX.get() - 8}px, ${cursorY.get() - 8}px, 0) scale(${isHovering.current ? 1.5 : 1})`;
    }
  }, [cursorX, cursorY]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      document.body.style.cursor = 'none';
      isVisible.current = true;
      if (cursorRef.current) {
        cursorRef.current.style.display = 'block';
      }
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = 'auto';
      isVisible.current = false;
      if (cursorRef.current) {
        cursorRef.current.style.display = 'none';
      }
    };

    const handleMouseDown = () => {
      isClicking.current = true;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX.get() - 8}px, ${cursorY.get() - 8}px, 0) scale(0.8)`;
      }
    };

    const handleMouseUp = () => {
      isClicking.current = false;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX.get() - 8}px, ${cursorY.get() - 8}px, 0) scale(${isHovering.current ? 1.5 : 1})`;
      }
    };

    // Add passive: true for better performance
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mousemove', handleLinkHover, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial cursor state
    if (window.matchMedia && !window.matchMedia('(hover: none)').matches) {
      document.body.style.cursor = 'none';
      isVisible.current = true;
      if (cursorRef.current) {
        cursorRef.current.style.display = 'block';
      }
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

  return (
    <motion.div
      ref={cursorRef}
      className="cursor-ring mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        display: isVisible.current ? 'block' : 'none'
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 25
      }}
    />
  );
};

export default CustomCursor;