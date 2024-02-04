"use client";
import React, { useEffect, useRef } from "react";

const HeroBg = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotRadius = 1;
  const dotSpacing = 100;
  const frequency = 2;
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const drawDots = (time: number) => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          const xOffset = Math.sin((x + time * 0.001) * frequency) * 30;
          const yOffset = Math.cos((y + time * 0.001) * frequency) * 20;

          // Adjust dot position based on mouse position
          const distanceX = x + xOffset - mouse.current.x;
          const distanceY = y + yOffset - mouse.current.y;
          const distance = Math.sqrt(
            distanceX * distanceX + distanceY * distanceY
          );

          const moveAwayFactor = 20;

          const dotX = x + xOffset + (distanceX / distance) * moveAwayFactor;
          const dotY = y + yOffset + (distanceY / distance) * moveAwayFactor;

          ctx.beginPath();
          ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = (x / dotSpacing) % 2 === 0 ? "#0cf5d5" : "#e0017a";
          ctx.fill();
          ctx.closePath();
        }
      }
      requestAnimationFrame((time) => drawDots(time));
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawDots(0); // Restart the animation on resize
    };

    // Set initial dimensions
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Initial drawing
      drawDots(0);
    }

    // Attach event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Clean-up: remove event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dotSpacing, frequency, canvasRef]);

  return (
    <div className="bg-[#080812] top-0 absolute h-[100vh] z-10 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default HeroBg;
