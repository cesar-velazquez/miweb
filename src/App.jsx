import './App.css'
import Navbar from './components/Navbar'
import OpenMenu from './components/OpenMenu'
import About from './components/About'
import { useState } from 'react'
import Skills from './components/Skills'
import Studies from './components/Studies'
import Projects from './components/Projects'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const MenuOpen = () => {
    setIsOpen(!isOpen)
  }

  return (    
    <main className='font-urbanist bg-blue-200 min-h-screen'>      
      <Navbar MenuOpen={MenuOpen} />
      {
        isOpen && <OpenMenu MenuOpen={MenuOpen} />
      }   
      <About/>

      <Skills/>

      <Studies/>
      
      <Projects/>
    </main>
  )
}

export default App
