import React, { useEffect, useState } from 'react'
import ProjectData from '../Data/Projects.json'
import 'animate.css';
import { t } from 'i18next';

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setProjects(ProjectData);
        }, 1000)
    }, [])
    return (
        <main
            id='projects'
            className='pt-12
        bg-yellow-100 bg-[url(/imgs/fondo/EllipseMiddle.png)] bg-center bg-cover bg-no-repeat
    sm:bg-[url(/imgs/fondo/EllipseMiddle.png)]  sm:grid 
    dark:bg-[url(/imgs/fondo/bgmobile.png)] dark:bg-purple-bg dark:text-white transicion
    xl:max-w-[1200px] mx-auto'>

            <hr className='bg-gray-500 h-[2px] mx-8 ' />
            <h1 className='text-2xl font-urbanist text-center sm:text-4xl font-extrabold my-4 '>{t('Projects')}</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-12 m-auto max-w-[1200px] pb-16'>
                {
                    projects.map((project, index) => (
                        <div
                            key={index}
                            className='relative  w-[250px] h-[200px] flex m-auto py-4'>
                            <div className=' flex flex-col justify-center items-center cursor-pointer hover:opacity-100'>
                                <img className='rounded-3xl w-[250px] h-[200px]'
                                    src={project.image} alt={project.alt} />
                            </div>

                            <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                    hover:border hover:text-white hover:w-[250px] h-[200px] rounded-3xl font-bold
                    hover:animate-fade-down hover:animate-ease-out
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300
                    dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900'>
                                <h3 className=' text-center font-urbanist p-2 text-black dark:text-white dark:bg-black/20 dark:rounded-3xl '>
                                    {project.title}</h3>
                                <div className='flex justify-center items-center gap-3' >
                                    {
                                        // console.log(project.technology)
                                        project.technology.includes("html5") && (
                                            <i className='bx bxl-html5 text-[20px] text-black dark:text-white '></i>
                                        )
                                    }
                                    {
                                        project.technology.includes("css3") && (
                                            <i className='bx bxl-css3 text-[20px] text-black dark:text-white'></i>
                                        )
                                    }
                                    {
                                        project.technology.includes("js") && (
                                            <i className='bx bxl-javascript text-[20px] text-black dark:text-white'></i>
                                        )
                                    }
                                    {
                                        project.technology.includes("react") && (
                                            <i className='bx bxl-react text-[20px] text-black dark:text-white'></i>
                                        )
                                    }
                                    {
                                        project.technology.includes("tailwind") && (
                                            <i className='bx bxl-tailwind-css text-[20px] text-black dark:text-white'></i>
                                        )
                                    }
                                </div>
                                <div className='flex gap-4 justify-center py-4'>
                                    <a href={project.siteLink} target='_blank'
                                        className='transition-colors duration-700 cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl p-1  hover:bg-black hover:text-white text-black dark:text-white'>Visitar Sitio</a>
                                    <a href={project.codeLink} target='_blank'
                                        className='transition-colors duration-700 cursor-pointer hover:border border-b-2 border-black w-[50%] m-1 text-center rounded-3xl hover:p-1 py-2 hover:bg-black hover:text-white text-black dark:text-white'>Ver Código</a>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default Projects