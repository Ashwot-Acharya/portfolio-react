import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';  
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import { useSelector } from 'react-redux'; 
import { useState } from 'react';
import { switchmode } from '../state/pageslice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';


function Navbar() {
    const theme =  useSelector((state)=>state.page.mode)
    const [pagemode , setpagemode] = useState(true)
    const myPagetheme = localStorage.getItem('pagetheme')
    const dispatch = useDispatch()
    const und = "und_"+theme
    const hambur = "hambur_"+theme

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
        
useEffect(() => {
  const checkbox = document.getElementById('menu-toggle');
  const menu = document.querySelector('.menu-items');

  if (!checkbox || !menu) return;

  // Initially hide menu
  menu.style.display = 'none';

  const handleChange = () => {
    if (checkbox.checked) {
      menu.style.display = 'flex'; // show when checked
    } else {
      menu.style.display = 'none'; // hide when unchecked
    }
  };

  checkbox.addEventListener('change', handleChange);

  // Cleanup when component unmounts
  return () => {
    checkbox.removeEventListener('change', handleChange);
  };
}, []);


 
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
           <div className={und}> <h3 className='und text-3xl logo'> <Link to="/"> AA </Link></h3></div> 
        </div>

        <div className='flex '>
            <div className='navlinks flex' >
            <div className='m-5  nav-links'>
                <Link to='/projects' className={ `${und} o7 `}>Projects</Link>  </div>
            <div className='m-5 nav-links'>
                <Link to="/papers" className={ `${und} o7`}>Papers</Link> </div>
            <div className='m-5 nav-links'> <Link to="/gallery" className={ `${und} o7`}>
                    Gallery
                </Link> </div>
            <div className='m-5 nav-links icon'>
               <Link  className={ `${und} o7`} to="/contactme"> Contact Me </Link>
            </div>
            <div className='m-5 nav-links icon' > 
               <a href='https://www.instagram.com/obsessed_pictures/' target='__blank' className={ `${und} o7`}> <CameraAltIcon/> </a>
            </div>
            <div className='m-5 nav-links icon'>
               <a href="https://github.com/Ashwot-Acharya/" target='__blank' className={ `${und} o7`}> <GitHubIcon/></a>
            </div>
            <div className='m-5 nav-links icon'>
                <a className={ `${und} o7`} target='__blank' href="https://www.instagram.com/ashwot_acharya/"><InstagramIcon/></a>
            </div>
            
            <div className='m-5 navlinks icon'>
            
                <button className={ `${und} o7`}  onClick={changemode}>
                    {
                        pagemode ? <LightModeIcon/> : <DarkModeIcon/> 
                    }
                </button> 
             {/*mobile view   */}
             
                </div>
                </div>
                        <div>
                    <div className='mobile-view'>
                        <nav className="navbar">
                        <div className="navbar-container container">
                        <input type="checkbox" name="" id=""/>
                        <div className={`hamburger-lines ${hambur} `} >
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                            </div>
                            <ul className={`menu-items ${theme}`}>
                                <li><Link to='/papers'>Papers</Link></li>
                                <li><Link to='/projects'>Projects</Link></li>
                                <li><Link to='/contactme'> Contact Me </Link> </li>
                                <li><a href='https://www.instagram.com/obsessed_pictures/' target='__blank'><FaCamera/> </a></li>
                                <li>
                                    <button className="o7 light-mode" onClick={changemode}>
                                    {pagemode ? "Light Mode" : "Dark Mode"}
                                    </button>
                                </li>
                            </ul>

                        </div> 
                    </nav>
                    </div>

                </div>
           </div>
      
    </div>
  )
}

export default Navbar