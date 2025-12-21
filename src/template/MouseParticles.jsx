import React, { useEffect, useRef, useState } from "react";
import "./mouseparticles.css";

export default function MouseParticles() {
  const wrapRef = useRef(null);

  const [pos, setPos] = useState({ x: -1, y: -1 });
  const posRef = useRef(pos);
  const [motionEnabled, setMotionEnabled] = useState(false);

  // NEW: track whether the pointer is actively moving
  const isMovingRef = useRef(false);
  const idleTimerRef = useRef(null);

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

    handleChange();

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
      setPos({ x: -1, y: -1 });
      isMovingRef.current = false;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
      return;
    }

    const markMoving = () => {
      isMovingRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      // stop generating shortly after movement ends
      idleTimerRef.current = setTimeout(() => {
        isMovingRef.current = false;
      }, 120); // tweak: 80–200ms usually feels good
    };

    const handleMouseMove = (e) => {
      markMoving();
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setPos({ x: -1, y: -1 });
      isMovingRef.current = false;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
    };

    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      markMoving();
      setPos({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchEnd = () => {
      setPos({ x: -1, y: -1 });
      isMovingRef.current = false;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
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

      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
      isMovingRef.current = false;
    };
  }, [motionEnabled]);

  // Particle generator
  useEffect(() => {
    if (!motionEnabled) return;

    const wrap = wrapRef.current;
    if (!wrap) return;

    const interval = setInterval(() => {
      const m = posRef.current;

      // NEW: only emit while actively moving
      if (!isMovingRef.current) return;

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
        "hsla(316, 75%, 44%, 1)",
        "hsla(210, 60%, 82%, 0.6)",
        "hsla(197, 100%, 55%, 1)",
        "hsla(0, 0%, 100%, 1)",
        "hsla(12, 88%, 72%, 0.9)",
      ];

      ball.style.background = colors[Math.floor(Math.random() * colors.length)];

      ball.addEventListener("animationend", () => ball.remove());
      wrap.appendChild(ball);
    }, 90);

    return () => clearInterval(interval);
  }, [motionEnabled]);

  return <div id="wrap" ref={wrapRef} aria-hidden="true" role="presentation" />;
}
