import React, { useEffect, useRef, useState } from "react";
import './mouseparticles.css'
export default function MouseParticles() {
  const wrapRef = useRef(null);

  const [pos, setPos] = useState({ x: -1, y: -1 });
  const posRef = useRef(pos);

  // keep ref synced with state
  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  // mouse + touch listeners
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setPos({ x: -1, y: -1 });
    };

    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      setPos({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchEnd = () => {
      setPos({ x: -1, y: -1 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);

      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);

  // particle generator
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let hue = 0;

    const interval = setInterval(() => {
      const m = posRef.current;
      if (m.x < 0) return;

      const size = Math.floor(Math.random() * 30) + 15;
      const range = 8;

      const x = m.x + (Math.random() * range * 2 - range);
      const y = m.y + (Math.random() * range * 2 - range);

      const ball = document.createElement("div");
      ball.className = "ball";
      ball.style.width = `${size}px`;
      ball.style.height = `${size}px`;
      ball.style.left = `${x}px`;
      ball.style.top = `${y}px`;

      hue = (hue + 1) % 360;
      ball.style.background = `hsla(${hue}, 90%, 60%, 0.6)`;

      ball.addEventListener("animationend", () => ball.remove());
      wrap.appendChild(ball);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return <div id="wrap" ref={wrapRef} />;
}
