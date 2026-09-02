import { useEffect } from 'react'
import './assets/css/main.css'
import Home from "./components/Home.jsx"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import Projects from './components/Projects'
import Contactme from './components/Contactme'
import Research from './components/Research'

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contactme' element={<Contactme/>} />
        <Route path='/papers' element= {<Research/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
