import { Tilt } from "react-tilt"

import Navbar from "./Navbar"
import { useSelector } from "react-redux"


  function Home() {
    const theme =  useSelector((state)=>state.page.mode)

    

  return (
    <div >
        <Navbar/>
        <div className={`m-5  p-1r p_left-20  ${theme}`}>
           <div>
         
            <h1 className="text-5xl p-3"> Ashwot Acharya </h1>
            <div className="">
            <div className="p-3 w-50  ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia corporis placeat quo totam consequuntur! Voluptatum, excepturi eos veritatis cupiditate accusantium maxime, officia esse sit maiores corporis at optio neque modi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repudiandae omnis harum. Iste, facilis dolor minima mollitia at tempora. Maxime nostrum, quod iure asperiores omnis illo minus tempore tenetur libero.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio reprehenderit quisquam exercitationem eos a perspiciatis aliquid corporis debitis temporibus vitae, ratione quaerat nisi, at nulla impedit et placeat? Eveniet.
              </div>
              <div>
               
              </div>
            </div>
          
           </div>
      </div>


</div>
  )     
}

export default Home