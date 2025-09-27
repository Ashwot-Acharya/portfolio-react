import React from 'react'
import Navbar from "./Navbar"
import PDFObject from 'pdfobject';
import { useSelector } from 'react-redux'; 
import { useState, useEffect, useRef } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function Research() {
const theme =  useSelector((state)=>state.page.mode)
let undline = 'und_' + theme
let aclas = 'atag-'+theme
console.log(undline)
const [selectedPdf, setSelectedPdf] = useState(null);
const pdfContainer = useRef(null);

  useEffect(() => {
        if (selectedPdf && pdfContainer.current) {
      PDFObject.embed(selectedPdf, pdfContainer.current, {
        height: "100%",
      });
    }
  }, [selectedPdf]);

  const pdfList = [
    { name: "Research Paper", url: "/pdf/document1.pdf" },
    { name: "Project Report", url: "/pdf/document2.pdf" },
    { name: "Notes", url: "/pdf/document3.pdf" },
  ];

  return (
  <div>
    <Navbar />
    <div className="text-5xl font-bold p_left-10">Papers</div>
    <div className="flex h-screen">
      <div className="w-1/3 p-6 space-y-6 border-r border-gray-700 overflow-y-auto">

        <div
          onClick={() => setSelectedPdf("/pdf/document.pdf")}>
          <div className="text-xl font-medium">
           <div className={undline}>Working Principles of Proof Assistants and Formalization of some proofs in Agda
 </div> 
          </div>
          <div className="text-sm">
            Author: Ashwot Acharya , Bishesh Bohora , Supreme Chaudhary <a href="/pdf/document.pdf" className={aclas} download='test' > <ArrowDownwardIcon/> </a>
          </div>
        </div>

        <div onClick={() => setSelectedPdf("/pdf/paper.pdf")} className={undline}>
          <div className="text-xl font-medium">
            Working Principles of Proof Assistants and Formalization of some
            proofs in Agda
          </div>
          <div className="text-sm">
            Author: Ashwot Acharya , Bishesh Bohora , Supreme Chaudhary
          </div>
        </div>
      </div>
      

      <div className="flex-1 p-4">
        {selectedPdf ? (
          <div
            ref={pdfContainer}
            className="w-full h-full bg-white rounded-lg shadow-lg"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a paper to view
          </div>
        )}
      </div>
    </div>
  </div>
);

}

export default Research