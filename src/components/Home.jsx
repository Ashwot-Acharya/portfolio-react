import Navbar from "./Navbar"
import { useSelector } from "react-redux"
import MyParticles from "./MyParticles"
import Skillicons from "./Skillicons"
  function Home() {
    const theme =  useSelector((state)=>state.page.mode)
    const clname = "atag-"+theme
    

  return (
    <div >
      <Navbar/>
    <div className="desktop">
    <MyParticles/>
        
    <div className={`m-5  p-1r p_left-20  ${theme}`}>
           <div>
         
            <h1 className="text-5xl p-3"> Ashwot Acharya </h1>
            <div className="">
            <div className="p-3 w-50">
              <div className="text" > 
              
              <div>Undergraduate student specializing in Mathematics and Computer Science. Passionate about topics of Graph Theory, Analysis, and programming. My academic interests lie in understanding the deep structures that govern computational and mathematical systems, particularly how theoretical concepts can inform efficient algorithms and models. </div>       
              <div>I Enjoy problem solving , have a strong interest in building projects that connect theory and technology, from exploring graph algorithms to developing analytical tools and data-driven applications </div> 
              <div> I'm interested in  opportunities for collaboration on research and other developmental projects  </div>
              </div>
                <Skillicons/>   
              </div>
              <div>
               
              </div>
            </div>
          
           </div>
      </div>
    </div>



      <div className="mobile-view">

        <div className={` p-1r p_left-10  ${theme}`}>
           <div>
         
            <h1 className="text-5xl p-3"> Ashwot Acharya </h1>
            <div className="">
            <div className="p-3 w-50">
              <div className="text" > 
              
              <div>Undergraduate student specializing in Mathematics and Computer Science. Passionate about topics of Graph Theory, Analysis, and programming. My academic interests lie in understanding the deep structures that govern computational and mathematical systems, particularly how theoretical concepts can inform efficient algorithms and models. </div>       
              <div>I Enjoy problem solving , have a strong interest in building projects that connect theory and technology, from exploring graph algorithms to developing analytical tools and data-driven applications </div> 
              <div> I'm interested in  opportunities for collaboration on research and other developmental projects  </div>
              </div>
                <Skillicons/>   
              </div>
              <div>
               
              </div>
            </div>
          
           </div>
      </div>
      </div>
</div>
  )     
}

export default Home