// src/pages/About.js
import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './about.css'
import Navbar from '../../components/Navbar/Navbar'
import headshot from '../../assets/headshot.png'

export default function About() {
  const [showScrollTop, setShowScrollTop] = useState(false)
 const sectionRef = useRef(null)

  const container = {
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  // Show / hide "back to top" button on mobile when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768
      if (!isMobile) {
        setShowScrollTop(false)
        return
      }

      // Show button after user scrolls a bit down the page
      if (window.scrollY > 200) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
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

  // Detect touch / coarse pointer
  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(hover: none) and (pointer: coarse)').matches

  const hoverProps = isTouchDevice
    ? {}
    : {
        whileHover: { y: -4, scale: 1.02 },
        transition: { type: 'spring', stiffness: 200, damping: 15 },
      }

  return (
    <div className="site-container" ref={sectionRef}>
      <Navbar />
      <main >
          <div className="about-grid">
            {/* LEFT SIDE */}
            <aside className="about-aside">
              <motion.div className="about-photo-wrapper" {...hoverProps}>
                <motion.img
                  src={headshot}
                  alt="Sara E. King"
                  className="about-photo"
                />
              </motion.div>

              <motion.div className="about-card" {...hoverProps}>
                <h2>Sara E. King</h2>
                <p className="about-role">Full Stack Developer</p>
                <p className="about-location">Milwaukee, WI</p>
                <ul className="about-tags">
                  <li>6+ years experience</li>
                  <li>MERN · MEAN</li>
                  <li>Accessibility-focused</li>
                </ul>
              </motion.div>
            </aside>

            {/* RIGHT SIDE */}
            <motion.div className="about-content" variants={container}>
              <motion.h1 className="about-title" variants={item}>
                Crafting accessible experiences on the web.
              </motion.h1>

              <motion.p variants={item}>
                Hi, I'm Sara, a full-stack developer who loves building thoughtful, 
                accessible digital experiences. I've worked across the stack using React, Next.js, TypeScript, 
                Node.js, Mongodb, and Express, always with an eye toward scalability and usability.
              </motion.p>
              <motion.p variants={item}>
                I currently work at Kohl's, 
                where I also mentor interns in modern front-end practices, build internal tools, and worked on the sign in flow on the website.
                 Before that, I contributed 
                to enterprise systems in industries such as retail, a popular pizza chain, and hospitals.
              </motion.p>
              <motion.p variants={item}>
                Whether I'm writing a new component, improving data pipelines, or refining keyboard navigation, my goal 
                is the same: create intuitive, inclusive interfaces that genuinely help people.
              </motion.p>
            </motion.div>
          </div>
      </main>
            {/* Mobile-only back to top button */}
      {showScrollTop && (
        <button
          className="back-to-top-btn"
          type="button"
          onClick={scrollToTopOfSection}
        >
          ↑ Top
        </button>
      )}
    </div>
  )
}
