// src/components/GitHubProjects.js
import React, { useEffect, useState } from 'react'
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
        console.log(res)
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
  }, [])

  return (
    <div className="site-container">
      <Navbar />

      <section className="projects-section">
        <h2 className="projects-title">GitHub Projects</h2>

        {loading && <p className="projects-status">Loading...</p>}
        {error && <p className="projects-error">Error: {error}</p>}

        {!loading && !error && repos.length === 0 && <p className="projects-status">No repositories found.</p>}

        <ul className="projects-list">
          {repos.map((repo) => (
            <li key={repo.id} className="project-card">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                <h3 className="project-name">⭐ {repo.name}</h3>

                {repo.description && <p className="project-description">{repo.description}</p>}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
