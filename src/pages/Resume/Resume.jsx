import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'
import resume from '../../assets/Sara E. King Resume 202512.png'
import './resume.css'

export default function Resume() {
  const shouldReduceMotion = useReducedMotion()
  const pageHeadingId = 'resume-heading'
  const descId = 'resume-description'

  const wrapperInitial = shouldReduceMotion ? {} : { opacity: 0, y: 30 }
  const wrapperAnimate = shouldReduceMotion ? {} : { opacity: 1, y: 0 }
  const barInitial = shouldReduceMotion ? {} : { opacity: 0, y: 15 }
  const barAnimate = shouldReduceMotion ? {} : { opacity: 1, y: 0 }
  const imageInitial = shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }
  const imageAnimate = shouldReduceMotion ? {} : { opacity: 1, scale: 1 }

  return (
    <div className="site-container">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main
        id="main-content"
        className="resume-main"
        aria-labelledby={pageHeadingId}
      >
        <header className="resume-header">
          <h1 id={pageHeadingId} className="resume-title">
            Resume – Sara E. King
          </h1>
          <p id={descId} className="resume-description">
            Below is a visual version of my resume. You can download it or reach
            out via the contact page if you need an alternative accessible format.
          </p>
        </header>

        <motion.div
          className="resume-wrapper"
          initial={wrapperInitial}
          animate={wrapperAnimate}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.6, type: 'spring', stiffness: 120 }
          }
        >
          <motion.div
            className="download-bar"
            initial={barInitial}
            animate={barAnimate}
            transition={shouldReduceMotion ? undefined : { delay: 0.1 }}
          >
            <motion.a
              href={resume}
              download
              className="download-btn"
              aria-label="Download resume as PNG file"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.05,
                      y: -3,
                      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            >
              Download Resume (PNG)
            </motion.a>
          </motion.div>

          {/* IMAGE-BASED RESUME */}
          <motion.figure
            className="resume-figure"
            aria-describedby={descId}
            initial={imageInitial}
            animate={imageAnimate}
            transition={
              shouldReduceMotion
                ? undefined
                : { delay: 0.2, duration: 0.6, type: 'spring', stiffness: 180 }
            }
          >
            <motion.img
              src={resume}
              alt="Visual representation of the resume for Sara E. King, Full Stack Developer."
              className="resume-image"
            />
            <figcaption className="resume-figcaption visually-hidden">
              Image-based resume for Sara E. King.
            </figcaption>
          </motion.figure>
        </motion.div>
      </main>
    </div>
  )
}
