import React from 'react'
import Navbar from './Navbar'

function Blogs() {
  return (
    <div>
        <Navbar/>
        <div className='p-1r '>     
                <div>
                    <h1 className='text-7xl'> 
                        Blogs
                    </h1>
                    <div className='card p-3'>
                        <h3>
                            Blog Title 
                        </h3>
                            <div className='p-3 w-4/12'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est, harum quibusdam commodi culpa sapiente provident odio laboriosam deleniti, saepe laborum ut explicabo? Nobis non amet ab distinctio, eaque pariatur!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestiae recusandae ratione repellendus corrupti vitae? Cupiditate amet exercitationem nemo perspiciatis obcaecati possimus optio culpa odio! Nulla unde sit voluptatem provident?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor nam officiis et, totam distinctio, quam nisi ullam harum libero nostrum commodi aut vero cumque reiciendis molestias facere eos voluptas quidem!
                            </p>
                            </div>
                    </div>
                </div>

        </div>
        
    </div>
  )
}

export default Blogs