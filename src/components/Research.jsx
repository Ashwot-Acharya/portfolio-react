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



  return (
  <div>
    <Navbar />
    <div className="text-5xl font-bold p_left-10">Papers</div>
    <div className="flex h-screen">
      <div className="w-1/3 p-6 space-y-6 border-r border-gray-700 overflow-y-auto">

        <div
          onClick={ () => {setSelectedPdf("/pdf/agda_project.pdf");}  }>
          <div className="text-xl font-medium">
           <div className={undline}>Working Principles of Proof Assistants and Formalization of some proofs in Agda
 </div> 
          </div>
          <div className="text-sm">
            Author: Ashwot Acharya , Bishesh Bohora , Supreme Chaudhary 
          </div>
           <a href="/pdf/agda_project.pdf" className={aclas} download='test' > Download <ArrowDownwardIcon/> </a>
          <div className='text-xs p-1'> Not peer reviewed* </div>
        </div>
<div
          onClick={ () => {setSelectedPdf("/pdf/ICT_economy.pdf");}  }>
          <div className="text-xl font-medium">
           <div className={undline}>The effects of Information communication on the economy of a country focusing on Nepal
 </div> 
          </div>
          <div className="text-sm">
            Author: Ashwot Acharya 
          </div>
           <a href="/pdf/ICT_economy.pdf" className={aclas} download='test' > Download <ArrowDownwardIcon/> </a>
          <div className='text-xs p-1'> Not peer reviewed* </div>
        </div>


      </div>
      

      <div className="flex-1 p-4">
        {selectedPdf ? (
         <embed
            src={selectedPdf}
            type="application/pdf"
            className="w-full h-full rounded-lg shadow-lg"
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