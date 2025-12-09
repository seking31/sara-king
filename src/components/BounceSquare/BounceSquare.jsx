import React, { useEffect, useState } from "react"
import { motion, useMotionValue, useAnimationFrame } from "framer-motion"

import "./bounce.css"

export default function BounceSquare() {
  const rotate = useMotionValue(0)
  const y = useMotionValue(0)
  const x = useMotionValue(0)

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

useAnimationFrame((t) => {
  const rotateValue = Math.sin(t / 10000) * 200
  const yValue = (1 + Math.sin(t / 1000)) * -50

  rotate.set(rotateValue)
  y.set(yValue)

  if (isDesktop) {
    const container = document.querySelector(".cube-container")

    if (container) {
      const containerWidth = container.offsetWidth
      const cubeSize = isDesktop ? 150 : 200  // ✅ match CSS
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
    <div className="cube-container">
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
        <div className="side front">{msg}</div>
        <div className="side left">{msg}</div>
        <div className="side right">{msg}</div>
        <div className="side top">{msg}</div>
        <div className="side bottom">{msg}</div>
        <div className="side back">{msg}</div>
      </motion.div>
    </div>
  )
}
