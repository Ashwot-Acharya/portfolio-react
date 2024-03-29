import './assets/css/main.css'
import Home from "./components/Home.jsx"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import Blogs from './components/Blogs'
import Projects from './components/Projects'
import Demo from './components/Demo'
import Mygallery from './components/Mygallery'
import Contactme from './components/Contactme'
function App() {

  return (

    <div>
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/blog' element={<Blogs/>}/>
        <Route path='/projects' element={<Projects/>} />
        <Route path='/demos' element={<Demo/>} />
        <Route path='/gallery' element={<Mygallery/>} />
        <Route path='/contactme' element={<Contactme/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
