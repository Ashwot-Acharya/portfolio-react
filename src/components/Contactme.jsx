import React from 'react'
import Navbar from './Navbar'
import MyParticles from './MyParticles'
import { useSelector } from 'react-redux'; 
import { useForm, ValidationError } from '@formspree/react';

function Contactme() {
    const theme =  useSelector((state)=>state.page.mode)
    const feild_theme = "inp-" + theme
    const und = "und_" + theme
  const [state, handleSubmit] = useForm("xldpjkdw");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <div>
        <Navbar/>
        <div className={`text-3xl p_left-30 ${und}`} > lets connect ! </div>
            <div className='w-full  p-1r p_left-30'>
            <form className='w-full' onSubmit={handleSubmit}>
                
               <div className='p-3'>
               <input type='text' id='name' name='name' placeholder=' Name' className={`p-3   ${feild_theme}` } />
                </div>
                
                <div className='p-3'>
                <input    id="email" type="email" name="email" className={` p-3 ${feild_theme}`} />
                  <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    </div>
                <div className='p-3'>
                <textarea  id="message" name="message" placeholder='Type message here...' className= {` p-3 ${feild_theme}`} ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div> 
                <div className='p-3'>
                    <button type="submit" disabled={state.submitting} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' >  Submit </button>
                </div>
            </form>

            </div>

    </div>
    )

  
}

export default Contactme


