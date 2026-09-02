import Navbar from "./Navbar"
import { FaDownload } from "react-icons/fa"

function Home() {
  return (
    <div className="page-shell">
      <Navbar/>

      <main className="home-main">
        <div className="home-card">
          {/* Terminal header */}
          <div className="home-term-header">
            <span className="home-term-dot red"></span>
            <span className="home-term-dot yellow"></span>
            <span className="home-term-dot green"></span>
            <span className="home-term-path">~/ashwot</span>
          </div>

          <div className="home-body">
          {/* Header */}
          <div className="home-header">
            <img
              src="/images/Ashwot.jpg"
              alt="Ashwot Acharya"
              className="profile-pic"
            />
            <div className="home-header-body">
              <h1 className="home-title">
                <span className="acc">$ </span>Ashwot
              </h1>
              <div className="home-role">
                CS &amp; Mathematics @ Kathmandu University
              </div>
              <div className="home-tagline">
                I build things to understand them — from scratch, in code.
              </div>
              <a
                href="/Ashwot_Acharya_FlowCV_Resume_2026-08-21.pdf"
                download
                className="cv-btn"
              >
                <FaDownload /> [ download cv.pdf ]
              </a>
            </div>
          </div>

          <hr className="home-hr" />

          <section>
            <h2 className="home-section-title">
              <span className="acc-dim">## </span>Projects in progress
            </h2>
            <div className="home-project-block">
              <strong className="home-project-title">Spectral Learning Pipeline</strong>
              <p className="home-project-desc">
                Connecting Weighted Finite Automata and Recurrent Neural Networks via SVD-based spectral learning. Implementation from the Rabusseau, Li &amp; Precup paper. Built in NumPy.
              </p>
            </div>
          </section>

          <hr className="home-hr" />

          <section>
            <h2 className="home-section-title">
              <span className="acc-dim">## </span>Stack
            </h2>
            <div className="home-stack">
              <div className="home-stack-row">
                <strong className="home-stack-label">Languages</strong> — Python, JavaScript , C , Haskell
              </div>
              <div className="home-stack-row">
                <strong className="home-stack-label">Math/ML</strong> — NumPy, linear algebra, formal language theory, complex analysis, Graph Theory
              </div>
              <div className="home-stack-row">
                <strong className="home-stack-label">Tools</strong> — Git, Ollama, Neovim , React, FastAPI  
              </div>
            </div>
          </section>

          <hr className="home-hr" />

            <section>
              <h2 className="home-section-title">
              <span className="acc-dim">## </span>Currently
            </h2>
            <ul className="home-currently">
              <li><span className="home-bullet">-</span> Building a WFA &rarr; Hankel matrix &rarr; SVD &rarr; RNN recovery pipeline</li>
              <li><span className="home-bullet">-</span> Exploring Rust for kernel driver development</li>
            </ul>
          </section>

          <hr className="home-hr" />

          <div className="home-location">
            Kathmandu, Nepal
          </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
