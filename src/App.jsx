import './App.css'
import Navbar from './components/Navbar'
import OpenMenu from './components/OpenMenu'
import About from './components/About'
import { useState } from 'react'
import Skills from './components/Skills'
import Studies from './components/Studies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const MenuOpen = () => {
    setIsOpen(!isOpen)
  }

  return (    
    <main className='font-urbanist bg-yellow-100'>      
      <Navbar MenuOpen={MenuOpen} />
      {
        isOpen && <OpenMenu MenuOpen={MenuOpen} />
      }   
      <About/>

      <Skills/>

      <Studies/>
      
      <Projects/>

      <Contact/>

      <Footer/>
    </main>
  )
}

export default App
