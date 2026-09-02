import React from 'react';
import Navbar from './Navbar';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const socials = [
  {
    href: "mailto:ashwotacharya@gmail.com",
    external: false,
    icon: <FaEnvelope />,
    name: "Email",
    detail: "ashwotacharya@gmail.com"
  },
  {
    href: "https://github.com/Ashwot-Acharya",
    external: true,
    icon: <FaGithub />,
    name: "GitHub",
    detail: "@Ashwot-Acharya"
  },
  {
    href: "https://linkedin.com/in/ashwot-acharya",
    external: true,
    icon: <FaLinkedin />,
    name: "LinkedIn",
    detail: "ashwot-acharya"
  },
  {
    href: "https://x.com/ashwotacharya",
    external: true,
    icon: <FaTwitter />,
    name: "Twitter/X",
    detail: "@ashwotacharya"
  }
];

function Contactme() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="contact-main">
        <div className="contact-card">
          {/* Terminal Window Bar */}
          <div className="contact-terminal-bar">
            <span className="contact-dot red"></span>
            <span className="contact-dot yellow"></span>
            <span className="contact-dot green"></span>
            <span className="contact-terminal-path">ashwot@portfolio: ~/contact.sh</span>
          </div>

          <div className="contact-prompt-line">
            <span className="c-user">ashwot@portfolio</span>
            <span className="c-colon">:~$ </span>
            <span className="c-cmd">ls -l social/</span>
          </div>

          <h1 className="contact-title">
            <span className="acc">/</span>Get in Touch
          </h1>

          <p className="contact-subtitle">
            # Reach out through any of my platforms below:
          </p>

          <div className="contact-grid">
            {socials.map((s, i) => {
              const content = (
                <>
                  <span className="contact-social-icon">{s.icon}</span>
                  <div>
                    <div className="contact-social-name">{s.name}</div>
                    <div className="contact-detail">{s.detail}</div>
                  </div>
                </>
              );
              return (
                <a
                  key={i}
                  href={s.href}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="contact-card-item"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contactme;
