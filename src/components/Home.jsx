import { Tilt } from "react-tilt"
import ashwo from '../assets/images/ashwo.png'
import background from "../assets/images/background.jpg"
import Navbar from "./Navbar"
import { useSelector } from "react-redux"

  function Home() {
    const theme =  useSelector((state)=>state.page.mode)

  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 25,     // max tilt rotation (degrees)
    perspective: 800,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 800,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <div >
        <Navbar/>
        <div className={`m-5 w-50 read ${theme}`}>
           <div>
            <h1 className="text-5xl p-3"> Ashwot Acharya </h1>
            <div className="flex">
            <div className="p-3 border-solid  ">
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