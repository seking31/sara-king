import React from 'react'
import './liveprojects.css'
import Navbar from '../../components/Navbar/Navbar'

export default function LiveProjects() {
  const project = {
    name: 'Project Management Application (MEAN CRUD)',
    tagline: 'Full-stack MEAN app for managing projects and tasks with CRUD workflows.',
    liveUrl: 'https://tms-client-ok73.onrender.com',
    clientRepoUrl: 'https://github.com/seking31/tms-client',
    serverRepoUrl: 'https://github.com/seking31/tms-server',
    tech: ['MongoDB', 'Express', 'Angular', 'Node.js', 'REST API'],
    highlights: [
      'Create, view, update, and delete projects and tasks',
      'Full-stack architecture: API + database + client UI',
      'Clean UI focused on productivity and workflow',
    ],
  }

  return (
    <div className="site-container">
      {/* Skip link helps keyboard users bypass repeated nav */}
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1}>
        <section
          className="dev-profile"
          aria-labelledby="live-projects-title"
        >
          <header className="dev-profile__header">
            <div className="dev-profile__identity">
              <h1 id="live-projects-title" className="page-title">
                Live Projects
              </h1>
            </div>

            {/* Use nav + aria-label so screen readers know what these links are */}
            <nav className="project-links" aria-label="Project links">
              <ul className="pill-row pill-row--links">
     

                {project.clientRepoUrl ? (
                  <li>
                    <a
                      className="btn"
                      href={project.clientRepoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open client repository on GitHub in a new tab"
                    >
                      Client Repo <span className="sr-only">(opens in new tab)</span>
                    </a>
                  </li>
                ) : null}

                {project.serverRepoUrl ? (
                  <li>
                    <a
                      className="btn"
                      href={project.serverRepoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open server repository on GitHub in a new tab"
                    >
                      Server Repo <span className="sr-only">(opens in new tab)</span>
                    </a>
                  </li>
                ) : null}
              </ul>
            </nav>
          </header>

          <div className="dev-profile__grid">
            {/* Project Card */}
            <article className="card" aria-labelledby="project-title">
              <div className="card__top">
                <h2 id="project-title" className="card__title">
                  {project.name}
                </h2>
                <p className="card__tagline">{project.tagline}</p>
              </div>

              <div className="card__section" aria-labelledby="tech-stack-title">
                <h3 id="tech-stack-title" className="card__heading">
                  Tech Stack
                </h3>
                <ul className="pill-row" aria-label="Tech stack list">
                  {project.tech.map((t) => (
                    <li className="pill" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card__section" aria-labelledby="highlights-title">
                <h3 id="highlights-title" className="card__heading">
                  Key Highlights
                </h3>
                <ul className="bullets" aria-label="Key highlights list">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="card__section card__actions">
                <a
                  className="btn"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Explore the application in a new tab"
                >
                  Explore the App <span className="sr-only">(opens in new tab)</span>
                </a>
              </div>
            </article>

            {/* Live Preview */}
            <aside className="card card--preview" aria-labelledby="preview-title">
              <div className="card__top">
                <h2 id="preview-title" className="card__title">
                  Preview
                </h2>
           
              </div>

              <div className="preview" role="region" aria-label="Live demo preview">
                <iframe
                  title="Live demo preview of the Project Management Application"
                  src={project.liveUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}
