import React from 'react'
import Navbar from './Navbar'
import MyParticles from './MyParticles'
import { useSelector } from 'react-redux'; 
 
function Contactme() {
    const theme =  useSelector((state)=>state.page.mode)
    const feild_theme = "inp-" + theme

  return (
    <div>
        <Navbar/>
        <MyParticles/>
            <div className='m-5  p-1r p_left-30'>
            <form action="https://formkeep.com/f/189a664a185d"
                accept-charset="UTF-8"
                enctype="multipart/form-data"
                method="POST">
               <div className='p-3'>
               <input type='text'  name='Name' placeholder=' Name' className={`p-3   ${feild_theme}` } />
                </div>
                
                <div className='p-3'>
                <input type='email' name='emailid' placeholder=' Email' className={` p-3 ${feild_theme}`} />
                    </div>
                <div className='p-3'>
                <textarea placeholder='Type message here...' className= {` p-3 ${feild_theme}`} name='mainmessage'></textarea>
                    </div> 
                <div className='p-3'>
                    <button type='Submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' >  Submit </button>
                </div>
            </form>

            </div>

    </div>
    )

  
}

export default Contactme