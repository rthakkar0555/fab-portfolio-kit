import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  shockRadius?: number;
  shockStrength?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 4,
  gap = 32,
  baseColor = 'hsl(var(--primary) / 0.3)',
  activeColor = 'hsl(var(--primary) / 0.8)',
  proximity = 120,
  shockRadius = 200,
  shockStrength = 3,
  resistance = 500,
  returnDuration = 1.2,
  className = '',
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing dots
    container.innerHTML = '';
    dotsRef.current = [];

    const containerRect = container.getBoundingClientRect();
    const cols = Math.ceil(containerRect.width / gap);
    const rows = Math.ceil(containerRect.height / gap);

    // Create dots
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width = `${dotSize}px`;
        dot.style.height = `${dotSize}px`;
        dot.style.backgroundColor = baseColor;
        dot.style.borderRadius = '50%';
        dot.style.left = `${col * gap}px`;
        dot.style.top = `${row * gap}px`;
        dot.style.pointerEvents = 'none';
        dot.style.transition = 'background-color 0.3s ease';
        
        // Store original position
        dot.dataset.originalX = `${col * gap}`;
        dot.dataset.originalY = `${row * gap}`;
        
        container.appendChild(dot);
        dotsRef.current.push(dot);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;

      dotsRef.current.forEach((dot) => {
        const dotRect = dot.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const dotCenterX = dotRect.left - containerRect.left + dotSize / 2;
        const dotCenterY = dotRect.top - containerRect.top + dotSize / 2;
        
        const distance = Math.sqrt(
          Math.pow(mouseRef.current.x - dotCenterX, 2) + 
          Math.pow(mouseRef.current.y - dotCenterY, 2)
        );

        if (distance < proximity) {
          const force = (proximity - distance) / proximity;
          const angle = Math.atan2(
            mouseRef.current.y - dotCenterY,
            mouseRef.current.x - dotCenterX
          );
          
          const moveX = Math.cos(angle) * force * 20;
          const moveY = Math.sin(angle) * force * 20;
          
          gsap.to(dot, {
            x: moveX,
            y: moveY,
            duration: 0.3,
            ease: "power2.out"
          });
          
          dot.style.backgroundColor = activeColor;
        } else {
          gsap.to(dot, {
            x: 0,
            y: 0,
            duration: returnDuration,
            ease: "power2.out"
          });
          
          dot.style.backgroundColor = baseColor;
        }
      });
    };

    const handleMouseClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      dotsRef.current.forEach((dot) => {
        const dotRect = dot.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const dotCenterX = dotRect.left - containerRect.left + dotSize / 2;
        const dotCenterY = dotRect.top - containerRect.top + dotSize / 2;
        
        const distance = Math.sqrt(
          Math.pow(clickX - dotCenterX, 2) + 
          Math.pow(clickY - dotCenterY, 2)
        );

        if (distance < shockRadius) {
          const force = (shockRadius - distance) / shockRadius;
          const angle = Math.atan2(dotCenterY - clickY, dotCenterX - clickX);
          
          const moveX = Math.cos(angle) * force * shockStrength * 10;
          const moveY = Math.sin(angle) * force * shockStrength * 10;
          
          gsap.to(dot, {
            x: moveX,
            y: moveY,
            duration: 0.6,
            ease: "power3.out"
          });
          
          gsap.to(dot, {
            x: 0,
            y: 0,
            duration: returnDuration,
            delay: 0.1,
            ease: "elastic.out(1, 0.3)"
          });
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleMouseClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleMouseClick);
    };
  }, [dotSize, gap, baseColor, activeColor, proximity, shockRadius, shockStrength, resistance, returnDuration]);

  return (
    <div
      ref={containerRef}
      className={`dot-grid ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        ...style,
      }}
    />
  );
};

export default DotGrid;