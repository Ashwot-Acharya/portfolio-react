import React from 'react'
import Navbar from './Navbar'
import Swiper from 'swiper';

function Projects() {
  const defaultOptions = {
    reverse: false, 
    max: 25,     
    perspective: 800,   
    scale: 1.1,    
    speed: 800,   
    transition: true,   
    axis: null,   
    reset: true,   
    easing: "cubic-bezier(.03,.98,.52,.99)",    
    }
  return (
    <div className=''>
        <Navbar/>
    </div>
  )
}

export default Projects