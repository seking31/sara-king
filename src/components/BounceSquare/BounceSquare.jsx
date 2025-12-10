import React, { useEffect, useState } from "react"
import { motion, useMotionValue, useAnimationFrame, useReducedMotion } from "framer-motion"

import "./bounce.css"

export default function BounceSquare() {
  const rotate = useMotionValue(0)
  const y = useMotionValue(0)
  const x = useMotionValue(0)
  const shouldReduceMotion = useReducedMotion()

  const [isDesktop, setIsDesktop] = useState(false)
  const msg = "welcome to my website"

  // Track viewport width so we only slide on desktop
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024) // desktop breakpoint
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Only animate if user has not requested reduced motion
  useAnimationFrame((t) => {
    if (shouldReduceMotion) {
      rotate.set(0)
      y.set(0)
      x.set(0)
      return
    }

    const rotateValue = Math.sin(t / 10000) * 200
    const yValue = (1 + Math.sin(t / 1000)) * -50

    rotate.set(rotateValue)
    y.set(yValue)

    if (isDesktop) {
      const container = document.querySelector(".cube-container")

      if (container) {
        const containerWidth = container.offsetWidth
        const cubeSize = isDesktop ? 150 : 200 // match CSS
        const padding = 40

        const maxDistance = (containerWidth - cubeSize - padding * 2) / 2
        const xValue = Math.sin(t / 2500) * maxDistance
        x.set(xValue)
      }
    } else {
      x.set(0)
    }
  })

  return (
    <div className="cube-wrapper">
      {/* Accessible, stable text for screen readers and users who struggle with motion */}
      <p className="visually-hidden" aria-live="polite">
        {msg}
      </p>

      <div
        className="cube-container"
        role="img"
        aria-label={msg}
        aria-hidden={shouldReduceMotion ? undefined : false}
      >
        <motion.div
          className="cube"
          style={{
            rotateX: rotate,
            rotateY: rotate,
            y,
            x,
            transformPerspective: 800,
          }}
        >
          <div className="side front" aria-hidden="true">{msg}</div>
          <div className="side left" aria-hidden="true">{msg}</div>
          <div className="side right" aria-hidden="true">{msg}</div>
          <div className="side top" aria-hidden="true">{msg}</div>
          <div className="side bottom" aria-hidden="true">{msg}</div>
          <div className="side back" aria-hidden="true">{msg}</div>
        </motion.div>
      </div>
    </div>
  )
}
