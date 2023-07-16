import React from 'react'
import Navbar from './Navbar'
import { useSelector } from "react-redux"

function Blogs() {
        const pgstate =  useSelector((state)=>state.page.mode)
        const blogpgstate = pgstate + 'dot'
        console.log(blogpgstate)
  return (
    <div>
        <Navbar/>
        <div className='p-1r '>     
        <div    className={`m-5 p-1r p_left-20 `} >
         
         <h1 className="text-5xl p-3"> Blog Posts </h1>
         <div className="">
         <div className="p-3 w-50">
    

            <ul>
                    <li>
                    <h3 className=' text-3xl reduced-opacity'> 2022 </h3>
                        <ul className={` p-3 ${blogpgstate}`}>
                            <li className='p-3'>
                                <b>Aerodynamics of a sphere </b>: <a target='_blank' href='https://thinkersproblem.blogspot.com/2022/12/aerodynamics-of-sphere.html'> why the football curves mid-air -</a> <small> <i>December 07</i></small>
                            </li>
                            <li className='p-3'>
                                <b>Django Framework </b>: <a target='_blank' href='https://thinkersproblem.blogspot.com/2022/12/aerodynamics-of-sphere.html'> My first Look -</a> <small> <i>July 28</i></small>
                            </li>
                            <li className='p-3'>
                                <b>National Socialmism</b>: <a target='_blank' href='https://thinkersproblem.blogspot.com/2022/12/aerodynamics-of-sphere.html'>Rise and fall of nazism philosopy - </a> <small> <i>April 03</i></small>
                            </li>
                            <li className='p-3'>
                                <b> The deep web </b>: <a target='_blank' href='https://thinkersproblem.blogspot.com/2022/12/aerodynamics-of-sphere.html'> Anynomyus Internet Usage - </a> <small> <i> April 01</i> </small>
                            </li>
                            <li className='p-3'>
                                <b> IOTEX</b>: <a target='_blank' href='https://thinkersproblem.blogspot.com/2022/12/aerodynamics-of-sphere.html'> internet of things on the blockchain - </a> <small> <i> 
February 28</i> </small>
                            </li>
                        </ul>
    
                    </li>
                    <li>
                    <h3 className=' text-3xl reduced-opacity'> 2021 </h3>

                        <ul className={` p-3 ${blogpgstate}`}>
                            <li className='p-3'>
                                <b> Music On Studying  </b>: <a target='_blank' href='https://thinkersproblem.blogspot.com/2022/12/aerodynamics-of-sphere.html'> Your mind in music</a> <small> <i>Dec 07</i></small>
                            </li>
                            
                        </ul>
    
                    </li>
                </ul>
           </div>
           <div>
            
           </div>
         </div>
       </div>

        </div>
        
    </div>
  )
}

export default Blogs