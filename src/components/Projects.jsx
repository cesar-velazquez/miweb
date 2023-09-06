import React from 'react'
import 'animate.css';

const Projects = () => {
    return (
        <main
            id='projects'
            className='bg-yellow-100 bg-[url(/imgs/fondo/GradientSmall.png)] bg-center bg-cover bg-no-repeat
        sm:bg-[url(/imgs/fondo/EllipseMiddle.png)]  sm:grid 
        dark:bg-[url(/imgs/fondo/bgmobile.png)] dark:bg-purple-bg dark:text-white transicion'>

            <hr className='bg-gray-500 h-[2px] mx-8 ' />
            <h1 className='text-2xl font-urbanist text-center sm:text-4xl font-extrabold my-4 '>Proyectos</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-12 m-auto max-w-[1200px]'>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/frontmentor1.PNG" alt="Front Mentor 1" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[200px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300
                    dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900'>
                        <h3 className=' text-center font-urbanist p-2 text-black dark:text-white dark:bg-black/20 dark:rounded-3xl '>Primer Challenge de la plataforma de Frontend Mentor</h3>
                        <div className='flex justify-center items-center gap-3' >
                            <i className='bx bxl-html5 text-[20px] text-black dark:text-white '></i>
                            <i className='bx bxl-css3 text-[20px] text-black dark:text-white'></i>
                        </div>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://challengfrontendmentor.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black hover:text-white text-black dark:text-white'>Visitar Sitio</a>
                            <a href='https://github.com/cesar-velazquez/frontendmentor1' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black hover:text-white text-black dark:text-white'>Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/front2.PNG" alt="Front Mentor 2" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[200px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300
                    dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900'>
                        <h3 className=' text-center font-urbanist p-2 text-black dark:text-white dark:bg-black/20 dark:rounded-3xl '>Segundo Challenge de la plataforma de Frontend Mentor</h3>
                        <div className='flex justify-center items-center gap-3' >
                            <i className='bx bxl-html5 text-[20px] text-black dark:text-white '></i>
                            <i className='bx bxl-css3 text-[20px] text-black dark:text-white'></i>
                        </div>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://challengfrontendmentor2.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black hover:text-white text-black dark:text-white'>Visitar Sitio</a>
                            <a href='https://github.com/cesar-velazquez/frontendmentor2' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black hover:text-white text-black dark:text-white'>Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/FrontMentor3.PNG" alt="Front Mentor 3" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[200px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300
                    dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900'>
                        <h3 className=' text-center font-urbanist p-2 text-black dark:text-white dark:bg-black/20 dark:rounded-3xl '>Tercer Challenge de la plataforma de Frontend Mentor</h3>
                        <div className='flex justify-center items-center gap-3' >
                            <i className='bx bxl-html5 text-[20px] text-black dark:text-white '></i>
                            <i className='bx bxl-css3 text-[20px] text-black dark:text-white'></i>
                        </div>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://frontmentor3.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black hover:text-white text-black dark:text-white'>Visitar Sitio</a>
                            <a href='https://github.com/cesar-velazquez/FrontMentor3' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black hover:text-white text-black dark:text-white'>Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/restandcountries.PNG" alt="Front Mentor 4" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[200px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300
                    dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900'>
                        <h3 className=' text-center font-urbanist p-2 text-black dark:text-white dark:bg-black/20 dark:rounded-3xl '>Cuarto Challenge de la plataforma de Frontend Mentor</h3>
                        <div className='flex justify-center items-center gap-3' >
                            <i className='bx bxl-html5 text-[20px] text-black dark:text-white '></i>
                            <i className='bx bxl-tailwind-css text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-react text-[20px] text-black dark:text-white'></i>
                        </div>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://restcountryfrontmentor4.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black hover:text-white text-black dark:text-white'>Visitar Sitio</a>
                            <a href='https://github.com/cesar-velazquez/Rest-Country-FrontMentor4' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black hover:text-white text-black dark:text-white'>Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/ecommerce.PNG" alt="ecommerce" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[200px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300
                    dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900'>
                        <h3 className=' text-center font-urbanist p-2 text-black dark:text-white dark:bg-black/20 dark:rounded-3xl '>Ecommerce, realizado con Html, Css y Javascript.</h3>
                        <div className='flex justify-center items-center gap-3' >
                            <i className='bx bxl-html5 text-[20px] text-black dark:text-white '></i>
                            <i className='bx bxl-css3 text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-javascript text-[20px] text-black dark:text-white'></i>
                        </div>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://ecommerceacadem.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black hover:text-white text-black dark:text-white'
                            >Visitar Sitio</a>
                            <a href='https://github.com/cesar-velazquez/Ecommerce' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black hover:text-white text-black dark:text-white'
                            >Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/encriptador.PNG" alt="Encriptador" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[200px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300
                    dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900'>
                        <h3 className=' text-center font-urbanist p-2 text-black dark:text-white dark:bg-black/20 dark:rounded-3xl '>Programa que se encarga de encriptar mensajes de Alura.</h3>
                        <div className='flex justify-center items-center gap-3' >
                            <i className='bx bxl-html5 text-[20px] text-black dark:text-white '></i>
                            <i className='bx bxl-css3 text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-react text-[20px] text-black dark:text-white'></i>
                        </div>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://aluraencriptador.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black hover:text-white text-black dark:text-white'
                            >Visitar Sitio</a>
                            <a href='https://github.com/cesar-velazquez/Encriptador-Alura' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black hover:text-white text-black dark:text-white'
                            >Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/phrases.PNG" alt="Frases" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[200px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300
                    dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900'>
                        <h3 className=' text-center font-urbanist p-2 text-black dark:text-white dark:bg-black/20 dark:rounded-3xl '>Frases Aleatorias.</h3>
                        <div className='flex justify-center items-center gap-3' >
                            <i className='bx bxl-javascript text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-tailwind-css text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-react text-[20px] text-black dark:text-white'></i>
                        </div>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://curiositiespace.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black hover:text-white text-black dark:text-white'
                            >Visitar Sitio</a>
                            <a href='https://github.com/cesar-velazquez/phrases' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black hover:text-white text-black dark:text-white'
                            >Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/weather.PNG" alt="Clima" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[200px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300
                    dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900'>
                        <h3 className=' text-center font-urbanist p-2 text-black dark:text-white dark:bg-black/20 dark:rounded-3xl '>App del Clima.</h3>
                        <div className='flex justify-center items-center gap-3' >
                            <i className='bx bxl-javascript text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-tailwind-css text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-react text-[20px] text-black dark:text-white'></i>
                        </div>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://weatheracad.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black hover:text-white text-black dark:text-white'
                            >Visitar Sitio</a>
                            <a href='https://github.com/cesar-velazquez/weather' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black hover:text-white text-black dark:text-white'
                            >Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/rickandmorty.PNG" alt="Rick" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[200px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300
                    dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900'>
                        <h3 className=' text-center font-urbanist p-2 text-black dark:text-white dark:bg-black/20 dark:rounded-3xl '>Consumiendo la Api de Rick and Morty.</h3>
                        <div className='flex justify-center items-center gap-3' >
                            <i className='bx bxl-javascript text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-tailwind-css text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-react text-[20px] text-black dark:text-white'></i>
                        </div>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://acadrickandmorty.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black hover:text-white text-black dark:text-white'
                            >Visitar Sitio</a>
                            <a href='https://github.com/cesar-velazquez/RickandMorty' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black hover:text-white text-black dark:text-white'
                            >Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/crud.PNG" alt="Crud" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[200px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300
                    dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900'>
                        <h3 className=' text-center font-urbanist p-2 text-black dark:text-white dark:bg-black/20 dark:rounded-3xl '>Crud.</h3>
                        <div className='flex justify-center items-center gap-3' >
                            <i className='bx bxl-javascript text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-tailwind-css text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-react text-[20px] text-black dark:text-white'></i>
                        </div>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://acadcrud.netlify.app/' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black hover:text-white text-black dark:text-white'
                            >Visitar Sitio</a>
                            <a href='https://github.com/cesar-velazquez/crud' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black hover:text-white text-black dark:text-white'
                            >Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/pokedex.PNG" alt="Pokedex" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[200px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300
                    dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900'>
                        <h3 className=' text-center font-urbanist p-2 text-black dark:text-white dark:bg-black/20 dark:rounded-3xl '>Api de pokemon</h3>
                        <div className='flex justify-center items-center gap-3' >
                            <i className='bx bxl-javascript text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-tailwind-css text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-react text-[20px] text-black dark:text-white'></i>
                        </div>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://acadpokedex.netlify.app/pokedex' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black hover:text-white text-black dark:text-white'
                            >Visitar Sitio</a>
                            <a href='https://github.com/cesar-velazquez/Pokedex' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black hover:text-white text-black dark:text-white'
                            >Ver Código</a>
                        </div>
                    </div>
                </div>

                <div className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                    <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                        <img className='rounded-3xl w-[250px] h-[200px]' src="/imgs/projects/pokedex.PNG" alt="Pokedex" />
                    </div>
                    <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[200px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300
                    dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900'>
                        <h3 className=' text-center font-urbanist p-2 text-black dark:text-white dark:bg-black/20 dark:rounded-3xl '>Api de pokemon</h3>
                        <div className='flex justify-center items-center gap-3' >
                            <i className='bx bxl-javascript text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-tailwind-css text-[20px] text-black dark:text-white'></i>
                            <i className='bx bxl-react text-[20px] text-black dark:text-white'></i>
                        </div>
                        <div className='flex gap-4 justify-center py-4'>
                            <a href='https://acadpokedex.netlify.app/pokedex' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black hover:text-white text-black dark:text-white'
                            >Visitar Sitio</a>
                            <a href='https://github.com/cesar-velazquez/Pokedex' target='_blank'
                                className='cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black hover:text-white text-black dark:text-white'
                            >Ver Código</a>
                        </div>
                    </div>
                </div>



            </div>
        </main>
    )
}

export default Projects