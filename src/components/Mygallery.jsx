import React from 'react'
import { proxy, useSnapshot } from 'valtio' 

import Masonry from 'react-masonry-css'
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const state = proxy({
  clicked: null,
  urls: [0,1, 2, 3, 4, 5,  6, 7, 8, 9, 11, 12, 13].map((u) => `/images/gallery/${u}.jpg`)
})


function Mygallery() {
  const breakpoint = {
    default: 4,
    3000: 6,
    2000: 5,
    1700: 4,
    1000: 4,
    1200: 4,
    800: 1,
    500:1
}
  const {urls} = useSnapshot(state)
  const theme =  useSelector((state)=>state.page.mode)
  const hclass =  "image_gallery-" +theme

  return (
    <div>
      <Navbar/> 
     
      <div className='m-5'>
      <div className='m-5  p-1r '>
        <h1 className='text-5xl'> My Photography </h1>
      </div>
      <Masonry
  breakpointCols={breakpoint}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column ">
                    {urls.map((el) => (
            <img  className={`mb-3  ${hclass}` }
          key={el}
            src={el}
          />
        ))} 
                </Masonry>
      </div>
    </div>
  )
}

export default Mygallery