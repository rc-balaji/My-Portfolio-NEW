import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      if (target) {
        const cursor = window.getComputedStyle(target).cursor;
        setIsPointer(cursor === 'pointer');
      }
    };
    
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <>
      <motion.div 
        className="hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ 
          translateX: position.x - 16,
          translateY: position.y - 16,
        }}
        animate={{
          width: isPointer ? 40 : 32,
          height: isPointer ? 40 : 32,
          opacity: isVisible ? 1 : 0,
          x: position.x - (isPointer ? 20 : 16),
          y: position.y - (isPointer ? 20 : 16),
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 28 }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-80" />
      </motion.div>
      
      <motion.div 
        className="hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ 
          translateX: position.x - 3,
          translateY: position.y - 3,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 3.5 : 1,
          x: position.x - 3,
          y: position.y - 3,
        }}
        transition={{ type: 'spring', stiffness: 1500, damping: 30 }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>
    </>
  );
};

export default CustomCursor;