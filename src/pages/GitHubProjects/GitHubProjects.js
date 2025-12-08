// src/components/GitHubProjects.js
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './githubprojects.css'
import '../../index.css'
import Navbar from '../../components/Navbar'

export default function GitHubProjects({ username = 'seking31', perPage = 40 }) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}`)

        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`)
        }

        const data = await res.json()
        setRepos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username, perPage])

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 130, damping: 12 },
    },
  }

  return (
    <div className="site-container">
      <Navbar />

      <motion.section className="projects-section" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}>
        <motion.h2 className="projects-title" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          GitHub Projects
        </motion.h2>

        {loading && <p className="projects-status">Loading...</p>}
        {error && <p className="projects-error">Error: {error}</p>}
        {!loading && !error && repos.length === 0 && <p className="projects-status">No repositories found.</p>}

        <motion.ul className="projects-list" variants={containerVariants} initial="hidden" animate="show">
          {repos.map((repo) => (
            <motion.li
              key={repo.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
              }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                <h3 className="project-name">⭐ {repo.name}</h3>
                {repo.description && <p className="project-description">{repo.description}</p>}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </div>
  )
}
