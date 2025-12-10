// src/components/GitHubProjects.js
import React, { useEffect, useState, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './githubprojects.css'
import Navbar from '../../components/Navbar/Navbar'

export default function GitHubProjects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const mainRef = useRef(null)

  const username = process.env.REACT_APP_USERNAME
  const pageSize = parseInt(process.env.REACT_APP_PERPAGE || '9', 10)

  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    async function fetchRepos() {
      setLoading(true)
      setError(null)

      try {
        if (!username) {
          throw new Error('GitHub username is not configured.')
        }

        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        )

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
  }, [username])

  // Show / hide "Back to top" button on mobile when scrolling
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
    if (mainRef.current) {
      mainRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  // Pagination math
  const totalPages = Math.max(1, Math.ceil(repos.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const visibleRepos = repos.slice(startIndex, endIndex)

  const handlePrev = () => {
    setPage((prev) => Math.max(1, prev - 1))
  }

  const handleNext = () => {
    setPage((prev) => Math.min(totalPages, prev + 1))
  }

  const containerVariants = shouldReduceMotion
    ? { hidden: {}, show: {} }
    : {
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

  const cardVariants = shouldReduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 20, scale: 0.96 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: 'spring', stiffness: 130, damping: 12 },
        },
      }

  const sectionInitial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 40 }

  const sectionAnimate = { opacity: 1, y: 0 }

  const pageHeadingId = 'github-projects-heading'
  const statusRegionId = 'github-projects-status'

  return (
    <div className="site-container">
      <Navbar />

      <main
        ref={mainRef}
        className="projects-main"
        aria-labelledby={pageHeadingId}
      >
        <motion.section
          className="projects-section"
          initial={sectionInitial}
          animate={sectionAnimate}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.6, type: 'spring', stiffness: 120 }
          }
        >
          <motion.h1
            id={pageHeadingId}
            className="projects-title"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { delay: 0.1 }}
          >
            GitHub Projects
          </motion.h1>

          <p className="projects-intro">
            A list of my public GitHub repositories, sorted by most recently
            updated. Use the pagination controls to browse more projects.
          </p>

          {/* Status / feedback for screen readers */}
          <div
            id={statusRegionId}
            className="projects-status-region"
            role="status"
            aria-live="polite"
          >
            {loading && <p className="projects-status">Loading projects…</p>}
            {error && (
              <p className="projects-error">
                Error loading projects: {error}
              </p>
            )}
            {!loading && !error && repos.length === 0 && (
              <p className="projects-status">No repositories found.</p>
            )}
          </div>

          {!loading && !error && visibleRepos.length > 0 && (
            <>
              {/* Pagination controls */}
              <nav
                className="projects-pagination"
                aria-label="GitHub projects pagination"
              >
                <button
                  className="projects-page-button"
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  aria-label={
                    currentPage === 1
                      ? 'Previous page, current page is the first page'
                      : `Go to previous page, page ${currentPage - 1}`
                  }
                >
                  ‹ Prev
                </button>

                <span
                  className="projects-page-indicator"
                  aria-live="polite"
                >
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  className="projects-page-button"
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  aria-label={
                    currentPage === totalPages
                      ? 'Next page, current page is the last page'
                      : `Go to next page, page ${currentPage + 1}`
                  }
                >
                  Next ›
                </button>
              </nav>

              <motion.ul
                className="projects-list"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                aria-label="List of GitHub repositories"
              >
                {visibleRepos.map((repo) => (
                  <motion.li
                    key={repo.id}
                    className="project-card"
                    variants={cardVariants}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -6,
                            scale: 1.03,
                            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                          }
                    }
                    transition={
                      shouldReduceMotion
                        ? undefined
                        : { type: 'spring', stiffness: 200 }
                    }
                  >
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${repo.name}${repo.description ? `: ${repo.description}` : ''}`}
                    >
                      <h2 className="project-name">
                        <span aria-hidden="true">🩷 </span>
                        <span>{repo.name}</span>
                      </h2>
                      {repo.description && (
                        <p className="project-description">
                          {repo.description}
                        </p>
                      )}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </>
          )}
        </motion.section>

        {/* Mobile-only back to top button */}
        {showScrollTop && (
          <button
            className="back-to-top-btn"
            type="button"
            onClick={scrollToTopOfSection}
            aria-label="Back to top of projects section"
          >
            ↑ Top
          </button>
        )}
      </main>
    </div>
  )
}
