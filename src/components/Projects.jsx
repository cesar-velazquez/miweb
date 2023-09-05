import React from 'react'
import 'animate.css';

const Projects = () => {
    return (
        <main
            id='projects'
            className='bg-yellow-100 bg-[url(/imgs/fondo/GradientSmall.png)] bg-center bg-cover bg-no-repeat
        sm:bg-[url(/imgs/fondo/EllipseMiddle.png)]  sm:grid 
        dark:bg-[url(/imgs/fondo/bgmobile.png)] dark:bg-purple-bg dark:text-white'>

            <hr className='bg-gray-500 h-[2px] mx-4 ' />
            <h1 className='text-2xl font-urbanist text-center '>Proyectos</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 m-auto max-w-[1200px]'>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/frontmentor1.PNG" alt="Front Mentor 1" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                    hover:border hover:text-white hover:w-[250px] h-[170px] transition duration-1000 hover:mt-4 font-bold rounded-3xl'>
                        <h3 className=' text-center font-urbanist p-2'>Primer Challenge de la plataforma de Frontend Mentor</h3>
                        <p className='text-center font-urbanist' >HTML | CSS</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black'>Visitar Sitio</a>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black'>Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/front2.PNG" alt="Front Mentor 1" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:bg-gray-700/70 hover:border hover:text-white hover:w-[250px] h-[170px] 
                    hover:animate-bounce hover:animate-once hover:animate-ease-in-out 
                    hover:mt-4 font-bold rounded-3xl'>
                        <h3 className=' text-center font-urbanist p-2'>Segundo Challenge de la plataforma de Frontend Mentor</h3>
                        <p className='text-center font-urbanist' >HTML | CSS</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black'>Visitar Sitio</a>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black'>Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/FrontMentor3.PNG" alt="Front Mentor 1" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0 rounded-3xl 
                    hover:bg-gray-700/70 hover:border hover:text-white hover:w-[250px] h-[170px] hover:mt-4 font-bold 
                    bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900
                    hover:animate-jump animate-ease-out hover:duration-200
                    '>
                        <h3 className=' text-center font-urbanist p-2'>Tercer Challenge de la plataforma de Frontend Mentor</h3>
                        <p className='text-center font-urbanist' >HTML | CSS</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black'>Visitar Sitio</a>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black'>Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/ecommerce.PNG" alt="Front Mentor 1" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:bg-gray-700/70 hover:border hover:text-white hover:w-[250px] h-[170px] rounded-3xl
                    hover:animate-bounce hover:animate-once hover:animate-ease-in-out hover:mt-4 font-bold
                    bg-gradient-to-r from-gray-700 via-gray-900 to-black
                    '>
                        <h3 className=' text-center font-urbanist p-2'>Ecommerce, realizado con Html, Css y Javascript</h3>
                        <p className='text-center font-urbanist' >HTML | CSS | JavaScript</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black'>Visitar Sitio</a>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black'>Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/incluye-t.PNG" alt="Front Mentor 1" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[170px] rounded-3xl hover:mt-4 font-bold
                    hover:animate-fade-down hover:animate-ease-out 
                    bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900
                    '>
                        <h3 className=' text-center font-urbanist p-2'>Capacitación de atención a públicos específicos.</h3>
                        <p className='text-center font-urbanist' >HTML | CSS | React.js</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black'>Visitar Sitio</a>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black'>Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/encriptador.PNG" alt="Front Mentor 1" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[190px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600
                    '>
                        <h3 className=' text-center font-urbanist p-2'>Programa que se encarga de encriptar mensajes de Alura.</h3>
                        <p className='text-center font-urbanist' >HTML | CSS | React.js</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black'>Visitar Sitio</a>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black'>Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/encriptador.PNG" alt="Front Mentor 1" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[190px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600
                    '>
                        <h3 className=' text-center font-urbanist p-2'>Programa que se encarga de encriptar mensajes de Alura.</h3>
                        <p className='text-center font-urbanist' >HTML | CSS | React.js</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black'>Visitar Sitio</a>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black'>Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/encriptador.PNG" alt="Front Mentor 1" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[190px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600
                    '>
                        <h3 className=' text-center font-urbanist p-2'>Programa que se encarga de encriptar mensajes de Alura.</h3>
                        <p className='text-center font-urbanist' >HTML | CSS | React.js</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black'>Visitar Sitio</a>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black'>Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/encriptador.PNG" alt="Front Mentor 1" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[190px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600
                    '>
                        <h3 className=' text-center font-urbanist p-2'>Programa que se encarga de encriptar mensajes de Alura.</h3>
                        <p className='text-center font-urbanist' >HTML | CSS | React.js</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black'>Visitar Sitio</a>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black'>Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/encriptador.PNG" alt="Front Mentor 1" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[190px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600
                    '>
                        <h3 className=' text-center font-urbanist p-2'>Programa que se encarga de encriptar mensajes de Alura.</h3>
                        <p className='text-center font-urbanist' >HTML | CSS | React.js</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black'>Visitar Sitio</a>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-red-500 w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black'>Ver Código</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects