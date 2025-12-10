import React, { useEffect, useRef, useState } from "react";
import "./mouseparticles.css";

export default function MouseParticles() {
  const wrapRef = useRef(null);

  const [pos, setPos] = useState({ x: -1, y: -1 });
  const posRef = useRef(pos);
  const [motionEnabled, setMotionEnabled] = useState(false);

  // Keep ref synced with state
  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  // Check prefers-reduced-motion and enable/disable effect
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      setMotionEnabled(true);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = () => {
      setMotionEnabled(!mediaQuery.matches);
    };

    // Set initial
    handleChange();

    // Listen for changes
    mediaQuery.addEventListener
      ? mediaQuery.addEventListener("change", handleChange)
      : mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeEventListener
        ? mediaQuery.removeEventListener("change", handleChange)
        : mediaQuery.removeListener(handleChange);
    };
  }, []);

  // Mouse + touch listeners
  useEffect(() => {
    if (!motionEnabled) {
      // If motion is disabled, ensure position is reset
      setPos({ x: -1, y: -1 });
      return;
    }

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

    const touchOptions = { passive: true };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, touchOptions);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove, touchOptions);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [motionEnabled]);

  // Particle generator
  useEffect(() => {
    if (!motionEnabled) return;

    const wrap = wrapRef.current;
    if (!wrap) return;

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

      const colors = [
        "hsla(316, 75%, 44%, 1)", // magenta / deep pink
        "hsla(210, 60%, 82%, 0.6)", // light sky blue
        "hsla(197, 100%, 55%, 1)", // bright sky blue
        "hsla(0, 0%, 100%, 1)", // pure white
        "hsla(12, 88%, 72%, 0.9)", // peach / soft orange-red
      ];

      ball.style.background =
        colors[Math.floor(Math.random() * colors.length)];

      ball.addEventListener("animationend", () => ball.remove());
      wrap.appendChild(ball);
    }, 90);

    return () => clearInterval(interval);
  }, [motionEnabled]);

  // Decorative only: hide from assistive tech
  return (
    <div
      id="wrap"
      ref={wrapRef}
      aria-hidden="true"
      role="presentation"
    />
  );
}
