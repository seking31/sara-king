import React from 'react'
import Navbar from '../../components/Navbar'
import resume from '../../assets/'
import './resume.css'

export default function Resume() {
  return (
    <div className="site-container">
      <Navbar />

      <div className="resume-wrapper">
        <div className="download-bar">
          <a href={resume} download className="download-btn">
            Download Resume (PNG)
          </a>
        </div>

        <div className="resume">
          {/* LEFT COLUMN */}
          <aside className="left-col">
            <section className="contact">
              <h3>CONTACT</h3>
              <p>720-447-1285</p>
              <p>sara@sara-king.com</p>
              <p>Milwaukee, WI</p>
            </section>

            <section className="skills">
              <h3>SKILLS</h3>
              <ul>
                <li>React.js</li>
                <li>Next.js</li>
                <li>JavaScript, TypeScript</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>CSS, Tailwind</li>
                <li>API Integration</li>
                <li>Test Driven Development</li>
                <li>Playwright</li>
                <li>Google Lighthouse</li>
                <li>Accessibility & Inclusive Design</li>
              </ul>
            </section>

            <section className="education">
              <h3>EDUCATION</h3>
              <p>
                <strong>University of Colorado-Denver</strong>
                <br />
                BA, Philosophy
              </p>
              <p>
                <strong>Galvanize Inc</strong>
                <br />
                Full Stack Development
              </p>
              <p>
                <strong>Bellevue University</strong>
                <br />
                BS, Web Development
              </p>
            </section>

            <section className="certs">
              <h3>CERTIFICATIONS</h3>

              <p>
                <strong>Python Programming Certificate</strong> – 2023
                <br />
                Cornell University
              </p>

              <p>
                <strong>Soft Skills for Success</strong> – 2023
                <br />
                ANCORA
              </p>

              <p>
                <strong>Undergraduate Certificate in Artificial Intelligence</strong> – 2024
                <br />
                Wilmington University
              </p>
            </section>
          </aside>

          {/* RIGHT COLUMN */}
          <main className="right-col">
            <h1 className="resume-name">S A R A &nbsp; E. &nbsp; K I N G</h1>
            <h2 className="subtitle">FULL STACK DEVELOPER</h2>

            <section className="profile">
              <h3>PROFILE</h3>
              <p>Engineer with 6 years’ experience designing accessible, user-centered software solutions. Skilled in JavaScript, TypeScript, React, Node.js, HTML, and CSS. Passionate about inclusive UX, accessibility standards, and strong product-focused engineering.</p>
            </section>

            <section className="experience">
              <h3>WORK EXPERIENCE</h3>

              <div className="job">
                <h4>Kohl’s | 2021 – Current</h4>
                <p className="job-title">Software Engineer</p>
                <ul>
                  <li>Developed Express.js API pipelines ensuring accessible, high-quality data processing.</li>
                  <li>Mentored interns in accessible UI development and component architecture.</li>
                  <li>Built internal tools using React & Next.js focused on semantic HTML and keyboard navigation.</li>
                </ul>
              </div>

              <div className="job">
                <h4>World Wide Technology | 2019 – 2021</h4>
                <p className="job-title">Software Engineer</p>
                <ul>
                  <li>Delivered enterprise-level full-stack systems with accessibility-first design.</li>
                  <li>Architected React, Redux, and Node.js solutions with strong performance and compliance focus.</li>
                  <li>Served as ReactJS SME, guiding accessibility and design system integration.</li>
                </ul>
              </div>

              <div className="job">
                <h4>Vertafore | 2017 – 2019</h4>
                <p className="job-title">Test Engineer</p>
                <ul>
                  <li>Developed automated test suites for UI and backend services.</li>
                  <li>Maintained and executed manual + automated test plans.</li>
                  <li>Created Selenium automated test cases across multiple browsers.</li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
