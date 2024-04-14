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
    </div>
    
    <div className={`m-5  p-1r p_left-20  ${theme}`}>
           <div>
         
            <h1 className="text-5xl p-3"> Ashwot Acharya </h1>
            <div className="">
            <div className="p-3 w-50">
              <div className="text" > 
               Hello there!!!!!!! , I am Ashwot Acharya, Currently a student and planning to major computer science and mathematics.  I am also someone who Loves to create websites and I am currently working on <a className={`${clname}`} href="https://github.com/Ashwot-Acharya/Zyte"> Zyte</a>. 
               I also have other many ongoing projects like an <b className="fornt-bold "> <a className= {`${clname}`} href="#"> emailing API </a> </b> system made using fastapi. I have taken part in many hackathon but recently with my friends won a track in <a className={ `${clname}`}> Deerhack 2023</a>
              I am highly interested in machine learning and different Artifical Intellegence works. I also love the feild of cyber security. Things like zero-day vunerabilities and reverse engineering an application excites me. 
              I am still learning and developing, and would love to grow in each feild possible. I am also interested in music and hiking and love roaming around. 

              </div>
                <Skillicons/>   
              </div>
              <div>
               
              </div>
            </div>
          
           </div>
      </div>


      <div className="mobile-view">

        <div className={`m-5  p-1r p_left-20  ${theme}`}>
           <div>
         
            <h1 className="text-5xl p-3"> Ashwot Acharya </h1>
            <div className="">
            <div className="p-3 w-50">
              <div className="text" > 
               Hello there!!!!!!! , I am Ashwot Acharya, Currently a student and planning to major computer science and mathematics.  I am also someone who Loves to create websites and I am currently working on <a className={`${clname}`} href="https://github.com/Ashwot-Acharya/Zyte"> Zyte</a>. 
               I also have other many ongoing projects like an <b className="fornt-bold "> <a className= {`${clname}`} href="#"> emailing API </a> </b> system made using fastapi. I have taken part in many hackathon but recently with my friends won a track in <a className={ `${clname}`}> Deerhack 2023</a>
              I am highly interested in machine learning and different Artifical Intellegence works. I also love the feild of cyber security. Things like zero-day vunerabilities and reverse engineering an application excites me. 
              I am still learning and developing, and would love to grow in each feild possible. I am also interested in music and hiking and love roaming around. 

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