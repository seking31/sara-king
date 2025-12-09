import React from "react"
import { motion, useMotionValue, useAnimationFrame } from "framer-motion"

import "./bounce.css"

export default function BounceSquare() {
  // Motion values for rotation and vertical position
  const rotate = useMotionValue(0)
  const y = useMotionValue(0)

  useAnimationFrame((t) => {
    // t = time in milliseconds
    const rotateValue = Math.sin(t / 10000) * 200
    const yValue = (1 + Math.sin(t / 1000)) * -50

    rotate.set(rotateValue)
    y.set(yValue)
  })

  return (
    <div className="cube-container">
      <motion.div
        className="cube"
        style={{
          rotateX: rotate,
          rotateY: rotate,
          y,
          transformPerspective: 800,
        }}
      >
        <div className="side front" >welcome to my website</div>
        <div className="side left">welcome to my website</div>
        <div className="side right" >welcome to my website</div>
        <div className="side top" >welcome to my website</div>
        <div className="side bottom" >welcome to my website</div>
        <div className="side back" >welcome to my website</div>
      </motion.div>
    </div>
  )
}
