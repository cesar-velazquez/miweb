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
                    <li>Acerca de mi</li>
                    <li>Proyectos</li>
                    <li>Skills</li>
                    <li>Formación</li>
                </ul>
            </div>
            {/* <div> */}
            <i onClick={MenuOpen} className='sm:hidden bx bx-menu'></i>
            {/* </div> */}
            </div>

        </nav>
    )
}

export default Navbar