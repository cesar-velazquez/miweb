import React from 'react'

const Navbar = ({MenuOpen, handleChangeMode, isdarkMode}) => {
    return (        
        <nav 
        className='bg-[url(/imgs/fondo/EllipseMiddle.png)] px-4 bg-yellow-100 bg-center bg-cover bg-no-repeat
        dark:bg-[url(/imgs/fondo/bgmobile.png)] dark:bg-purple-bg dark:text-white transicion fixed w-full z-20 ' >            
            <div className='flex h-16 items-center justify-between max-w-[1200px]  m-auto '>
            {/* bg-yellow-300 -translate-x-1/2 */}
            <div className='relative '>
                <ul className='flex gap-4 text-xl ' >
                    <li><a href="https://github.com/cesar-velazquez" target="_blank"><i className='bx bxl-github'></i></a></li>
                    <li><a href="https://www.linkedin.com/in/c%C3%A9sar-velazquez-722a9121b/" target="_blank"><i className='bx bxl-linkedin-square'></i></a></li>
                    <li onClick={handleChangeMode} >
                        {
                            isdarkMode ?
                            <i className='cursor-pointer bx bxs-sun bx-spin-hover '></i>
                            :
                            <i className='cursor-pointer bx bxs-moon bx-spin-hover'></i>
                        }
                    </li>
                </ul>
            </div>
            {/* bg-blue-500 translate-x-1/2  */}
            <div className='hidden sm:block sm:text-xl  '>
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