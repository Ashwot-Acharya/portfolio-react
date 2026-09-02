import React from 'react'
import Navbar from './Navbar'
import {
  FaShieldAlt, FaSyncAlt, FaDna, FaChartLine, FaBug, FaThLarge
} from "react-icons/fa"
import { projects } from '../data/projects'

const iconMap = {
  shield: <FaShieldAlt />,
  sync: <FaSyncAlt />,
  dna: <FaDna />,
  chart: <FaChartLine />,
  bug: <FaBug />,
  grid: <FaThLarge />,
}

function Projects() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="projects-main">
        <div className="projects-terminal">
          <span className="c-user">ashwot@portfolio</span>
          <span className="c-colon">:</span>
          <span className="c-path">~/projects</span>
          <span className="c-dollar">$ </span>
          <span className="c-cmd">ls --format=grid</span>
        </div>

        <h1 className="projects-title">
          <span className="acc">/</span>Projects
        </h1>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="project-card"
            >
              <div className="project-card-header">
                <span className="project-card-dot red"></span>
                <span className="project-card-dot yellow"></span>
                <span className="project-card-dot green"></span>
                <span className="project-card-path">{proj.title.toLowerCase()}.sh</span>
              </div>
              <div className="project-card-body">
                <div className="project-card-title-row">
                  <span className="project-card-icon">{iconMap[proj.icon] || iconMap.grid}</span>
                  <h3 className="project-card-title">{proj.title}</h3>
                </div>
                <p className="project-card-desc">{proj.desc}</p>
                <div className="project-card-footer">
                  <span className="project-card-action">[ open repository &gt;&gt; ]</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Projects
