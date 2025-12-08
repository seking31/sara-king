import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import resume from '../../assets/Sara E. King Resume 202512.png'
import '../../index.css'
import './resume.css'

export default function Resume() {
  return (
    <div className="container">
      <Navbar />

      <motion.div className="resume-wrapper" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}>
        <motion.div className="download-bar" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <motion.a
            href={resume}
            download
            className="download-btn"
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume (PNG)
          </motion.a>
        </motion.div>

        {/* IMAGE-BASED RESUME */}
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
          <motion.img src={resume} alt="Sara E. King Resume 202512" className="resume-image" whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 180 }} />
        </motion.div>
      </motion.div>
    </div>
  )
}
