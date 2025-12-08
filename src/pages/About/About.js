// src/pages/About.js
import React from 'react'
import { motion } from 'framer-motion'
import '../../index.css'
import './about.css'
import Navbar from '../../components/Navbar'
import headshot from '../../assets/headshot.png'

export default function About() {
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

  return (
    <div className="site-container">
      <Navbar />
      <main>
        <motion.section id="aboutID" className="about" initial="hidden" animate="show" variants={container}>
          <div className="about-orbit" aria-hidden="true" />

          <div className="about-grid">
            {/* LEFT SIDE */}
            <aside className="about-aside">
              <motion.div className="about-photo-wrapper" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 160, damping: 18 }} whileHover={{ y: -6, rotate: -1 }}>
                <motion.img src={headshot} alt="Sara E. King" className="about-photo" />
              </motion.div>

              <motion.div className="about-card" whileHover={{ y: -4, scale: 1.02 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }}>
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

              <motion.p variants={item}>I am a Full Stack Developer with a passion for building accessible, user-centered digital experiences. With experience across React, Next.js, Node.js, and modern JavaScript/TypeScript ecosystems, I focus on crafting interfaces and systems that are performant, inclusive, and maintainable.</motion.p>

              <motion.p variants={item}>My work blends thoughtful front-end engineering with strong backend foundations. I specialize in semantic HTML, WCAG-compliant design, API development, and component architecture that scales across teams and products. I’m equally comfortable collaborating with designers, mentoring developers, or architecting solutions that enhance usability and long-term reliability.</motion.p>

              <motion.p variants={item}>I’m driven by a commitment to accessibility, clear communication, and clean, intentional code. Whether I’m building an internal tool, refining a design system, or improving developer workflows, my goal is always the same: deliver intuitive, high-quality experiences for every user.</motion.p>

              <motion.p variants={item}>Outside of engineering, I enjoy continuous learning, exploring new frameworks and accessibility techniques, and finding creative ways to blend design and technology.</motion.p>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
