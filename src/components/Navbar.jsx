import React from 'react'

const Navbar = ({MenuOpen}) => {
    return (        
        <nav 
        className='bg-[url(/imgs/fondo/GradientSmall.png)] px-4 bg-yellow-100 '>            
            <div className='flex h-16 items-center justify-between max-w-[1200px] m-auto '>
            <div>
                <ul className='flex gap-4' >
                    <li><a href="https://github.com/cesar-velazquez" target="_blank"><i className='bx bxl-github'></i></a></li>
                    <li><a href="https://www.linkedin.com/in/c%C3%A9sar-velazquez-722a9121b/" target="_blank"><i className='bx bxl-linkedin-square'></i></a></li>
                    <li><i className='bx bxs-moon'></i></li>
                </ul>
            </div>

            <div className='hidden sm:block'>
                <ul id='about' className='flex gap-4'>
                    <li><a href="#contact">Contáctame</a></li>
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