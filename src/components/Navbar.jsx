import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';  
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TwitterIcon from '@mui/icons-material/Twitter';  
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useSelector } from 'react-redux'; 
import { useState } from 'react';
import { switchmode } from '../state/pageslice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const theme =  useSelector((state)=>state.page.mode)
    const [pagemode , setpagemode] = useState(true)
    
    const dispatch = useDispatch()
    useEffect(() => {
        document.body.className = theme;
        }, [theme]);

    
    function changemode(){
        console.log(theme)
        

        if(theme == "light"){

            dispatch(switchmode("dark"))
            setpagemode(false)         
            document.getElementsByClassName("light").n

        }
        else{
            dispatch(switchmode('light'))
            setpagemode(true)
        }




    }

  return (
    <div className={`navbar-style-basic ${theme}`} > 
        <div>
            <h3 className='und text-3xl'> <Link to="/"> AA </Link></h3>
        </div>
        <div className='flex'>
            <div className='m-5  nav-links'>
                <Link to='/projects' className='und o7'>projects</Link>  </div>
            <div className='m-5 nav-links'>
                <Link to="/blog" className='und 07'>Blogs</Link> </div>
            <div className='m-5 nav-links'> <Link to="/demos" className='und'>
                    Demos
                </Link> </div>
            <div className='m-5 nav-links icon' > 
               <a href='#' className='und o7'> <TwitterIcon/> </a>
            </div>
            <div className='m-5 nav-links icon'>
               <a href="#" className='und o7'> <GitHubIcon/></a>
            </div>
            <div className='m-5 nav-links icon'>
                <a className='und o7' href="#"><InstagramIcon/></a>
            </div>
            <div className='m-5 nav-links icon'>
               <a className='und o7' href="#"> <FavoriteBorderIcon/> </a>
            </div>
            <div className='m-5 navlinks icon'>
            
                <button className='und o7 light-mode '  onClick={changemode}>
                    {
                        pagemode ? <LightModeIcon/> : <DarkModeIcon/> 
                    }
                </button>  

            </div>

        </div>
    </div>
  )
}

export default Navbar