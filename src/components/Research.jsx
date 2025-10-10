import React, { useState } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Research() {
  const theme = useSelector((state) => state.page.mode);
  const undline = "und_" + theme;
  const aclas = "atag-" + theme;

  const [selectedPdf, setSelectedPdf] = useState(null);

  const papers = [
    {
      title:
        "Working Principles of Proof Assistants and Formalization of some proofs in Agda",
      authors: "Ashwot Acharya, Bishesh Bohora, Supreme Chaudhary",
      pdf: "/pdf/agda_project.pdf",
      reviewed: false,
    },
    {
      title:
        "The effects of Information Communication on the Economy of a Country Focusing on Nepal",
      authors: "Ashwot Acharya",
      pdf: "/pdf/ICT_economics.pdf",
      reviewed: false,
    },
  ];

  const isMobile = () => window.innerWidth < 1024;

  const handleTitleClick = (pdfPath) => {
    if (isMobile()) {
      window.open(pdfPath, "_blank");
    } else {
      setSelectedPdf(pdfPath);
    }
  };

  return (
    <div className={`research-page ${theme}`}>
      <Navbar />

      <div className="text-5xl font-bold p_left-10 py-5">Papers</div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)]">
        
        {/* === Left Column: Paper List === */}
        <div className="w-full lg:w-1/3 p-6 space-y-6 border-b lg:border-r border-gray-700 overflow-y-auto">
          {papers.map((paper, index) => (
            <div
              key={index}
              onClick={() => handleTitleClick(paper.pdf)}
              className={`cursor-pointer rounded-xl p-4 transition duration-300 hover:scale-[1.01] ${
                theme === "dark"
                  ? "hover:bg-[rgba(255,255,255,0.08)]"
                  : "hover:bg-[rgba(0,0,0,0.05)]"
              }`}
            >
              <div className={`text-lg font-semibold leading-snug ${undline}`}>
                {paper.title}
              </div>
              <div className="text-sm opacity-80 mt-1">{paper.authors}</div>

              <a
                href={paper.pdf}
                className={`${aclas} text-sm flex items-center gap-1 mt-2`}
                download
              >
                Download <ArrowDownwardIcon fontSize="small" />
              </a>

              <div className="text-xs mt-1 opacity-60">
                {paper.reviewed ? "Peer reviewed" : "Not peer reviewed*"}
              </div>
            </div>
          ))}
        </div>

        {/* === Right Column: PDF Viewer (desktop only) === */}
        <div className="hidden lg:flex flex-1 p-4">
          {selectedPdf ? (
            <embed
              src={selectedPdf}
              type="application/pdf"
              className="w-full h-full rounded-lg shadow-lg"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 italic">
              Select a paper to view
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Research;
