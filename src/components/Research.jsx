import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaArrowDown, FaTimes } from "react-icons/fa";
import { papers } from "../data/papers";

function Research() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const openViewer = (pdfPath) => setSelectedPdf(pdfPath);
  const closeViewer = () => setSelectedPdf(null);

  const statusLabel = (status) => {
    return status === "peer-reviewed" ? "Peer reviewed" : "Preprint";
  };

  const selectedPaper = papers.find(p => p.pdf === selectedPdf);

  return (
    <div className="research-page">
      <Navbar />

      <main className="research-header">
        <div className="research-terminal">
          <span className="t-user">ashwot@portfolio</span>
          <span className="t-colon">:</span>
          <span className="t-path">~/papers</span>
          <span className="t-dollar">$ </span>
          <span className="t-cmd">ls -la</span>
        </div>
        <h1 className="research-title">
          <span className="t-purple">/</span>Papers
        </h1>
      </main>

      <div className={`research-layout ${selectedPdf ? "has-viewer" : ""}`}>
        <section className="paper-list" aria-label="List of research papers">
          {papers.map((paper, index) => {
            const isSelected = selectedPdf === paper.pdf;
            return (
              <article
                key={index}
                onClick={() => openViewer(paper.pdf)}
                className={`paper-card ${isSelected ? "selected" : ""}`}
              >
                <div className="paper-term-header">
                  <span className="paper-term-dot red"></span>
                  <span className="paper-term-dot yellow"></span>
                  <span className="paper-term-dot green"></span>
                  <span className="paper-term-path">~/papers/{paper.pdf.split('/').pop()}</span>
                </div>
                <div className="paper-body">
                <h2 className="paper-title">
                  <span className="acc">$ </span>{paper.title}
                </h2>
                <p className="paper-description">{paper.description}</p>
                <div className="paper-authors">{paper.authors.join(', ')}</div>
                <div className="paper-keywords">
                  {paper.keywords.map(kw => (
                    <span key={kw} className="paper-keyword">#{kw}</span>
                  ))}
                </div>
                <div className="paper-status">
                  Status: {statusLabel(paper.status)} • {paper.venue}
                </div>

                <a
                  href={paper.pdf}
                  className="paper-download"
                  download
                  onClick={(e) => e.stopPropagation()}
                >
                  [Download] <FaArrowDown size={12} />
                </a>
                </div>
              </article>
            );
          })}
        </section>

        <section className="paper-preview" aria-label="PDF preview" aria-live="polite">
          {selectedPdf && selectedPaper ? (
            <div className="paper-viewer">
              <div className="paper-viewer-bar">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="paper-viewer-title">viewer {selectedPaper.pdf}</span>
                <button type="button" onClick={closeViewer} aria-label="Close PDF viewer" className="paper-close-btn">
                  <FaTimes size={12} /> close
                </button>
              </div>

              <iframe
                src={selectedPdf}
                title={`PDF preview of ${selectedPaper.title}`}
                className="paper-viewer-frame"
              />

              <a href={selectedPdf} download className="paper-viewer-download">
                [Download] <FaArrowDown size={12} />
              </a>
            </div>
          ) : (
            <div className="paper-viewer-placeholder"></div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Research;
