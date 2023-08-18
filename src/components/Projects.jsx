import React from 'react'
import Navbar from './Navbar'
import MyParticles from './MyParticles';
import { Tilt } from 'react-tilt'
import {FaRobot , FaCopyright , FaNewspaper , FaSchool  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {TbSocial , TbNotes} from 'react-icons/tb'
import {MdPayment} from 'react-icons/md'

function Projects() {
  
   

  return (
  <div>
    <Navbar/>
    <MyParticles/>  
    <div className='m-5  p-1r p_left-30'>
    <h1 className="text-5xl p-3 "> Projects </h1>
    <div className='p-3'>
    <Link to={'/allure'}>
      <div className='flex '> 
        <TbSocial className='text-5xl' /> 
        <div className='font-bold p-3 '>
          <b className=''> Allure</b>
        </div>
        <p className='p-3 text-xs und'> A laravel based social media application to share music, videos and pictures </p>
        
      </div>
      </Link>
    </div>
    <div className='p-3'>
    <Link to={'/allure'}>
      <div className='flex '> 
        <FaRobot className='text-5xl' /> 
        <div className='font-bold p-3 '>
          <b className=''> Tweetbot</b>
        </div>
        <p className='p-3 text-xs und'> A simple twitter bot that tweets jokes made from tweepy</p>
        
      </div>
      </Link>
    </div>
    <div className='p-3'>
    <Link to={'/allure'}>
      <div className='flex '> 
        <MdPayment className='text-5xl' /> 
        <div className='font-bold p-3 '>
          <b className=''> Mearchant Plus</b>
        </div>
        <p className='p-3 text-xs und'> Blockchain based payment system</p>
        
      </div>
      </Link>
    </div>
    <div className='p-3 '>
    <Link to={'/allure'}>
      <div className='flex '> 
        <TbNotes className='text-5xl' /> 
        <div className='font-bold p-3 '>
          <b className=''> Good Notes</b>
        </div>
        <p className='p-3 text-xs und'> A google docs clone made using Mern stack </p>
        
      </div>
      </Link>
    </div>
    <div className='p-3'>
    <Link to={'/allure'}>
      <div className='flex '> 
        <FaCopyright className='text-5xl' /> 
        <div className='font-bold p-3 '>
          <b className=''> Cognition</b>
        </div>
        <p className='p-3 text-xs und'> A machine learning tool design to lower copyright issue </p>
        
      </div>
      </Link>
    </div>
    <div className='p-3'>
    <Link to={'/allure'}>
      <div className='flex '> 
        <FaNewspaper className='text-5xl' /> 
        <div className='font-bold p-3 '>
          <b className=''>Coeus </b>
        </div>
        <p className='p-3 text-xs und'> A news scrapper and magement tool</p>
        
      </div>
      </Link>
    </div>
    <div className='p-3'>
    <Link to={'/allure'}>
      <div className='flex '> 
        <FaSchool className='text-5xl' /> 
        <div className='font-bold p-3 '>
          <b className=''>Minerva</b>
        </div>
        <p className='p-3 text-xs und'> A news scrapper and magement tool</p>
        
      </div>
      </Link>
    </div>
    </div> 
    

  </div>      
  )
}

export default Projects