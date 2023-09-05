import './App.css'
import Navbar from './components/Navbar'
import OpenMenu from './components/OpenMenu'
import About from './components/About'
import { useEffect, useState } from 'react'
import Skills from './components/Skills'
import Studies from './components/Studies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader/Loader'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isdarkMode, setIsdarkMode] = useState(localStorage.getItem('theme') === 'dark')
  const [isloading, setIsloading] = useState(true)

  const MenuOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleChangeMode = ()=>{
    setIsdarkMode(!isdarkMode)
  }
useEffect (() =>{
  setTimeout(() => {
    setIsloading(false);
  }, 2000);


  isdarkMode
  ? (document.documentElement.classList.add('dark'), localStorage.setItem('theme', 'dark'))
  : (document.documentElement.classList.remove('dark'), localStorage.setItem('theme', 'light'))
}, [isdarkMode])

  return (    
    <div className="">
      {isloading ? (
        <Loader />
      ) : (
        <main className='font-urbanist bg-yellow-100
        dark:bg-purple-bg dark:text-white '>      
          <Navbar isdarkMode={isdarkMode} handleChangeMode={handleChangeMode} MenuOpen={MenuOpen} />
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
      )}
    </div>
  );  
}

export default App
