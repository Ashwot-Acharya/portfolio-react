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
    const myPagetheme = localStorage.getItem('pagetheme')
    const dispatch = useDispatch()

    useEffect(() => {
        document.body.className = theme;
        if (myPagetheme ==  "light"){
        
            dispatch(switchmode("dark"))
            setpagemode(false)         
            
            }
        else if (myPagetheme == 'dark'){ 
                dispatch(switchmode('light'))
                setpagemode(true)
                
        }
      
        }, [theme]);

 
    function changemode(){
        console.log(theme)
        

        if(theme == "light"){

            dispatch(switchmode("dark"))
            setpagemode(false)         
            document.getElementsByClassName("light")
            localStorage.setItem('pagetheme', (theme));
            
        }
        else{
            dispatch(switchmode('light'))
            setpagemode(true)
            localStorage.setItem('pagetheme', (theme));
        }

        


    }

  return (
    <div className={`navbar-style-basic ${theme}`} > 
        <div>
            <h3 className='und text-3xl logo'> <Link to="/"> AA </Link></h3>
        </div>
        <div className='flex navlinks'>
            <div className='m-5  nav-links'>
                <Link to='/projects' className='und o7'>projects</Link>  </div>
            <div className='m-5 nav-links'>
                <Link to="/blog" className='und o7'>Blogs</Link> </div>
            <div className='m-5 nav-links'> <Link to="/gallery" className='und'>
                    Gallery
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
               <Link  className='und o7' to="#"> <FavoriteBorderIcon/> </Link>
            </div>
            <div className='m-5 navlinks icon'>
            
                <button className='und o7 light-mode '  onClick={changemode}>
                    {
                        pagemode ? <LightModeIcon/> : <DarkModeIcon/> 
                    }
                </button>  

            </div>
            <div className='mobile-view'>
            <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id=""/>
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className={`menu-items  ${theme}`}>
                    <li>
                        <Link to='/blog' className='' > Blogs </Link>
                    </li>
                    <li>
                        <Link to='/projects' className='' > Projects </Link>
                    </li>
                    <li>
                        <Link to='/demos    ' className='' > Demo </Link>
                    </li>
                    <li>
                        <Link to='/' > <TwitterIcon/> </Link>
                    </li>
                    <li><a href=""><GitHubIcon/></a></li>
                    <li><a href=""><FavoriteBorderIcon/></a></li>
                    <li> 
                    <button className=' o7 light-mode '  onClick={changemode}>
                    {
                        pagemode ? <LightModeIcon/> : <DarkModeIcon/> 
                    }
                </button> 
                    </li>
                </ul>
            </div> 
        </nav>
            </div>

        </div>
    </div>
  )
}

export default Navbar