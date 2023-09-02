import React from 'react'

const Navbar = ({MenuOpen}) => {
    return (        
        <nav 
        className='bg-black/40 text-white px-4 '>            
            <div className='flex h-16 items-center justify-between max-w-[1200px] m-auto '>
            <div>
                <ul className='flex gap-4' >
                    <li><i className='bx bxl-github'></i></li>
                    <li><i className='bx bxl-linkedin-square'></i></li>
                    <li><i className='bx bxs-moon'></i></li>
                </ul>
            </div>

            <div className='hidden sm:block'>
                <ul id='about' className='flex gap-4'>
                    <li><a href="about">Acerca de mi</a></li>
                    <li><a href="#projects">Proyectos</a></li>                    
                    <li><a href="#formation">Formación</a></li>
                    <li><a href="#skills">Skills</a></li>                    
                </ul>
            </div>
            {/* <div> */}
            <i onClick={MenuOpen} className='sm:hidden bx bx-menu cursor-pointer'></i>
            {/* </div> */}
            </div>

        </nav>
    )
}

export default Navbar