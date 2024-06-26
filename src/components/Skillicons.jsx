import React from 'react'

import { FaReact, FaHtml5, FaPython , FaLaravel } from "react-icons/fa";
import {BiLogoTailwindCss, BiLogoMongodb} from "react-icons/bi";
import {SiPandas, SiTensorflow, SiPhp, SiMysql, SiSvelte , SiVite,  SiFlutter , SiPytorch} from "react-icons/si"
function Skillicons() {
  return (
    <div className="flex text-2xl ">
              <div className='expand p-3'>
                <FaReact/>
              </div>
              <div className='expand p-3'>
              <FaHtml5/>
              </div>
              <div className='expand p-3'>
              <BiLogoTailwindCss/>
              </div> 
              <div className='expand p-3'>
              <FaPython/>
                </div>
                  <div className='expand p-3'>
                  <SiTensorflow/> 
                  </div>
                  <div className='expand p-3'>
                 <SiMysql/>
                  </div> <div className='expand p-3'>
                  < FaLaravel/>
                    </div>
              </div>
              
  )
}

export default Skillicons