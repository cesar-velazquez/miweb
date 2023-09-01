import React from 'react'

const Projects = () => {
    return (
        <main className='pb-10'>
            <hr className='bg-gray-500 h-[2px] mx-4 my-4 ' />
            <h1 className='text-2xl font-urbanist text-center pb-4 '>Proyectos</h1>
            <h3 className='px-9 font-urbanist text-red-700 text-[1.1rem] font-semibold'>Proyectos basados  en la plataforma de <a className='cursor-pointer' href="https://www.frontendmentor.io/home" target='_blank'>Frontend Mentor</a>: </h3>
            <div className='bg-white m-4 shadow-lg shadow-black rounded-lg pb-4 '>

                <div className='relative w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100                    
                    '>
                        <img className=' w-[250px] h-[200px]' src="/imgs/projects/frontmentor1.PNG" alt="Front Mentor 1" />
                    </div>

                    {/* // flex flex-col m-auto gap-2 py-2 cursor-pointer w-[250px] h-[200px] my-4 */}
                    <div className='                     
                    opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  hover:bg-gray-700/70 hover:border hover:text-white hover:w-[250px] h-[180px] cursor-pointer 
                    hover:animate-bounce hover:animate-once hover:animate-ease-in-out hover:mt-4'>
                        <h3 className=' text-left font-urbanist'>Primer Challenge de la plataforma de Frontend Mentor</h3>
                        <p className='text-left font-urbanist' >HTML | CSS</p>
                        <div className='flex gap-4'>
                        <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                            className='border-b-2 border-red-500 w-[35%] hover:bg-red-700'>Visitar Sitio</a>
                        <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                            className='border-b-2 border-red-500 w-[35%]'>Ver Codigo</a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col justify-center items-center '>
                        <img className=' w-[250px] h-[200px] hover:scale-110 m-2 ' src="/imgs/projects/front2.PNG" alt="Front Mentor 1" />
                        <h3 className='text-left px-9 py-1 font-urbanist'>Segundo Challenge de la plataforma de Frontend Mentor</h3>
                        <p className='text-left px-9 py-1 font-urbanist' >HTML | CSS</p>
                    </div>
                    <div className='flex justify-center gap-4 py-2 cursor-pointer '>
                        <button className='border-b-2 border-blue-500'>Visitar Sitio</button>
                        <button className='border-b-2 border-blue-500'>Ver Codigo</button>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col justify-center items-center '>
                        <img className=' w-[250px] h-[200px] hover:scale-110 m-2 ' src="/imgs/projects/FrontMentor3.PNG" alt="Front Mentor 1" />
                        <h3 className='text-left px-9 py-1 font-urbanist'>Tercer Challenge de la plataforma de Frontend Mentor</h3>
                        <p className='text-left px-9 py-1 font-urbanist' >Html | Css </p>
                    </div>
                    <div className='flex justify-center gap-4 py-2 cursor-pointer '>
                        <button className='border-b-2 border-blue-500'>Visitar Sitio</button>
                        <button className='border-b-2 border-blue-500'>Ver Codigo</button>
                    </div>
                </div>

                <h3 className='px-9 font-urbanist text-red-700 text-[1.1rem] font-semibold'>Proyectos de Academlo: </h3>
                <div>
                    <div className='flex flex-col justify-center items-center '>
                        <img className=' w-[250px] h-[200px] hover:scale-110 m-2 ' src="/imgs/projects/ecommerce.PNG" alt="Front Mentor 1" />
                        <h3 className='text-left px-9 py-1 font-urbanist'>Ecommerce, realizado con Html, Css y Javascript</h3>
                        <p className='text-left px-9 py-1 font-urbanist' >Html | Css | JavaScript </p>
                    </div>
                    <div className='flex justify-center gap-4 py-2 cursor-pointer '>
                        <button className='border-b-2 border-blue-500'>Visitar Sitio</button>
                        <button className='border-b-2 border-blue-500'>Ver Codigo</button>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col justify-center items-center '>
                        <img className=' w-[250px] h-[200px] hover:scale-110 m-2 ' src="/imgs/projects/incluye-t.PNG" alt="Front Mentor 1" />
                        <h3 className='text-left px-9 py-1 font-urbanist'>Capacitación de atención a públicos específicos.</h3>
                        <p className='text-left px-9 py-1 font-urbanist' >Html | Css | React</p>
                    </div>
                    <div className='flex justify-center gap-4 py-2 cursor-pointer '>
                        <button className='border-b-2 border-blue-500'>Visitar Sitio</button>
                        <button className='border-b-2 border-blue-500'>Ver Codigo</button>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col justify-center items-center '>
                        <img className=' w-[250px] h-[200px] hover:scale-110 m-2 ' src="/imgs/projects/encriptador.PNG" alt="Front Mentor 1" />
                        <h3 className='text-left px-9 py-1 font-urbanist'>Programa que se encarga de encriptar mensajes de Alura.</h3>
                        <p className='text-left px-9 py-1 font-urbanist' >HTML | CSS</p>
                    </div>
                    <div className='flex justify-center gap-4 py-2 cursor-pointer '>
                        <button className='border-b-2 border-blue-500'>Visitar Sitio</button>
                        <button className='border-b-2 border-blue-500'>Ver Codigo</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects