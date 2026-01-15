// src/pages/About.js
import React, { useEffect, useState, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './about.css'
import Navbar from '../../components/Navbar/Navbar'
import headshot from '../../assets/sara2.png'

export default function About() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const sectionRef = useRef(null)
  const titleId = 'about-page-title'

  // Use framer-motion's hook for reduced motion preference
  const prefersReducedMotion = useReducedMotion()

  // Detect touch / coarse pointer on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      setIsTouchDevice(window.matchMedia('(hover: none) and (pointer: coarse)').matches)
    }
  }, [])

  // Hover animation only when allowed
  const hoverProps =
    isTouchDevice || prefersReducedMotion
      ? {}
      : {
          whileHover: { y: -4, scale: 1.02 },
          transition: { type: 'spring', stiffness: 200, damping: 15 },
        }

  // Animation variants (disabled for reduced motion)
  const container = prefersReducedMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 140,
            damping: 16,
            staggerChildren: 0.12,
          },
        },
      }

  const item = prefersReducedMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }

  // Show / hide "Back to Top" on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768
      if (!isMobile) {
        setShowScrollTop(false)
        return
      }

      setShowScrollTop(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTopOfSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="site-container" ref={sectionRef}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main 
        id="main-content"
        aria-labelledby={titleId}
      >
        <div className="about-grid">
          
          {/* LEFT SIDE */}
          <aside className="about-aside" aria-label="About Sara">
            
            {/* Photo */}
            <motion.div className="about-card" {...hoverProps}>
              <motion.img
                src={headshot}
                alt="Portrait of Sara E. King"
                className="about-photo"
              />
            </motion.div>

            {/* Profile card */}
            <motion.section
              className="about-card"
              {...hoverProps}
              aria-label="Professional summary"
            >
              <h2>Sara E. King</h2>
              <p className="about-role">Full Stack Developer</p>
              <p className="about-location">Milwaukee, WI</p>

              <ul className="about-tags">
                <li>6+ years experience</li>
                <li>MERN · MEAN</li>
                <li>Accessibility-focused</li>
              </ul>
            </motion.section>
          </aside>

          {/* RIGHT SIDE — Page Content */}
          <motion.section
            className="about-content"
            variants={container}
            initial="hidden"
            animate="show"
            aria-label="About this website and experience"
          >
            <motion.h1
              id={titleId}
              className="about-title"
              variants={item}
            >
              Crafting accessible experiences on the web.
            </motion.h1>

            <motion.p variants={item}>
            Hi, I'm Sara, a full-stack developer who loves building thoughtful, accessible digital experiences. I've worked across the stack using React, Next.js, TypeScript, Node.js, MongoDB, and Express, always with an eye toward scalability and usability.

            </motion.p>
            <motion.p variants={item}>
            I currently work at Kohl's, where I mentor interns in modern front-end practices, build internal tools, and contribute to customer-facing features, including the site's sign-in flow. Previously, I've helped build and maintain enterprise systems across industries such as retail, a major pizza chain, and healthcare.

            </motion.p>
            <motion.p variants={item}>
            Whether I'm writing a new component, improving data pipelines, or refining keyboard navigation, my goal is the same: to create intuitive, inclusive interfaces that genuinely help people.

            </motion.p>
          </motion.section>
        </div>
      </main>

      {/* Mobile-only Back to Top button */}
      {showScrollTop && (
        <button
          className="back-to-top-btn"
          type="button"
          aria-label="Back to top of page"
          onClick={scrollToTopOfSection}
        >
          ↑ Top
        </button>
      )}
    </div>
  )
}
