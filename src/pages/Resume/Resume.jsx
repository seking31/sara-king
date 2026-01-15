import React, { useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import resume from '../../assets/Sara E. King Resume 202512.png'
import './resume.css'

export default function Resume() {
  const pageHeadingId = 'resume-heading'
  const descId = 'resume-description'
  const downloadRef = useRef(null)

  const handleSkipClick = (e) => {
    e.preventDefault()
    downloadRef.current?.focus()
  }


  return (
    <div className="site-container">
      <a
        href="#download-resume"
        className="skip-link"
        onClick={handleSkipClick}
      >
        Skip to download button
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

        <div
          className="resume-wrapper"
     
        >
          <div className="download-bar">
            <a
              id="download-resume"
              ref={downloadRef}
              href={resume}
              download
              className="download-btn"
              aria-label="Download resume as PNG file"
            >
              Download Resume (PNG)
            </a>
          </div>

          <figure
            className="resume-figure"
            aria-describedby={descId}
           
          >
            <img
              src={resume}
              alt="Visual representation of the resume for Sara E. King, Full Stack Developer."
              className="resume-image"
            />
            <figcaption className="resume-figcaption sr-only">
              Image-based resume for Sara E. King.
            </figcaption>
          </figure>
        </div>
      </main>
    </div>
  )
}
