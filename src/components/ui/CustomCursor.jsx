// src/components/ui/CustomCursor.jsx
import React, { useEffect, useRef } from "react";
import "./cursor.css"; // small CSS file we'll add below

export default function CustomCursor() {
  const cursor = useRef({ x: 0, y: 0 });
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`;
      }
    }

    function animate() {
      posX += (mouseX - posX) * 0.16;
      posY += (mouseY - posY) * 0.16;
      if (ring) {
        ring.style.transform = `translate3d(${posX - 18}px, ${posY - 18}px, 0)`;
      }
      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMove);
    animate();

    // hide on touch devices
    function onTouchStart() {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    }
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}