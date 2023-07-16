import React from 'react'
import Navbar from './Navbar'
import MyParticles from './MyParticles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import { Tilt } from 'react-tilt'
import 'swiper/css/scrollbar';

function Projects() {
  
   

  return (
  <div>
    <Navbar/>
    <MyParticles/>  

  </div>      
  )
}

export default Projects