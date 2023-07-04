import React from 'react'
import Navbar from './Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';

import 'swiper/css/scrollbar';
import back from '../assets/images/cognitiveai.jpg'

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
        <div>
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Navigation ,Autoplay]}
        className="Swiper">
        <SwiperSlide> <a href='https://github.com/EnvisionCodeLabs/Cognition'> <img src={back}/> </a>  </SwiperSlide>

        <SwiperSlide>Slide 2</SwiperSlide>

        <SwiperSlide>Slide 3</SwiperSlide>

        <SwiperSlide>Slide 4</SwiperSlide>
        
        
      </Swiper>


        </div>
  </div>      
  )
}

export default Projects