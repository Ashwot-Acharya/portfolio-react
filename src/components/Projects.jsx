import React from 'react'
import Navbar from './Navbar'
import MyParticles from './MyParticles'
import { Link } from 'react-router-dom'
import {
  FaPenFancy, FaCopyright, FaNewspaper, FaLink
} from "react-icons/fa"
import { TbSocial, TbNotes } from 'react-icons/tb'
import { MdPayment, MdHealthAndSafety } from 'react-icons/md'

function Projects() {
  const projects = [
    {
      icon: <MdPayment />,
      title: "Merchant Plus",
      desc: "Blockchain based payment system",
      link: "https://github.com/apurbadh/MerchantPlus"
    },
    {
      icon: <FaNewspaper />,
      title: "Portfolio Website",
      desc: "This very portfolio website",
      link: "https://github.com/Ashwot-Acharya/portfolio-react"
    },
    {
      icon: <TbNotes />,
      title: "Good Notes",
      desc: "A Google Docs clone made using MERN stack",
      link: "https://github.com/Ashwot-Acharya/GoodNotes"
    },
    {
      icon: <FaCopyright />,
      title: "Cognition",
      desc: "A machine learning tool designed to lower copyright issues",
      link: "/allure",
      internal: true
    },
    {
      icon: <TbSocial />,
      title: "Allure",
      desc: "A Laravel-based social media app for sharing media",
      link: "https://github.com/Ashwot-Acharya/allure"
    },
    {
      icon: <FaLink />,
      title: "Refine It",
      desc: "Automatic referencing tool",
      link: "https://github.com/Ashwot-Acharya/refine-it"
    },
    {
      icon: <FaPenFancy />,
      title: "Co-write Me",
      desc: "Quick one-day project using LLMs and APIs — made for fun",
      link: "https://github.com/Ashwot-Acharya/co-write.me"
    },
    {
      icon: <MdHealthAndSafety />,
      title: "Osiris",
      desc: "Find doctors based on provided symptoms",
      link: "https://github.com/apurbadh/Osiris"
    }
  ]

  return (
    <div>
      <Navbar />
      <MyParticles />
      <div className="projects-container p_left-10">
        <h1 className="text-5xl p-3">Projects</h1>

        {projects.map((proj, i) => (
          proj.internal ? (
            <Link to={proj.link} key={i} className="project-item und">
              <div className="project-icon">{proj.icon}</div>
              <div className="project-text">
                <span className="project-title">{proj.title}</span>
                <span className="project-desc">{proj.desc}</span>
              </div>
            </Link>
          ) : (
            <a href={proj.link} target="_blank" rel="noopener noreferrer" key={i} className="project-item und">
              <div className="project-icon">{proj.icon}</div>
              <div className="project-text">
                <span className="project-title">{proj.title}</span>
                <span className="project-desc">{proj.desc}</span>
              </div>
            </a>
          )
        ))}
      </div>
    </div>
  )
}

export default Projects
