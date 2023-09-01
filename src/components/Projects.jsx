import React from 'react'

const Projects = () => {
    return (
        <main className='pb-10'>
            <hr className='bg-gray-500 h-[2px] mx-4 my-4 ' />
            <h1 className='text-2xl font-urbanist text-center pb-4 '>Proyectos</h1>
            <h3 className='px-9 font-urbanist text-red-700 text-[1.1rem] font-semibold'>Proyectos de la plataforma de Frontend Mentor: </h3>
            <div className='    bg-white m-4 shadow-lg shadow-black rounded-lg pb-4 '>
                <div>
                    <div className='flex flex-col justify-center items-center '>
                        <img className=' w-[250px] h-[200px] hover:scale-110 m-2 ' src="/imgs/projects/frontmentor1.PNG" alt="Front Mentor 1" />
                        <h3 className='text-left px-9 py-1 font-urbanist'>Primer Challenge de la plataforma de Front Mentor</h3>
                        <p className='text-left px-9 py-1 font-urbanist' >HTML | CSS</p>
                    </div>
                    <div className='flex justify-center gap-4 py-2 cursor-pointer '>
                        <button className='border-b-2 border-blue-500'>Visitar Sitio</button>
                        <button className='border-b-2 border-blue-500'>Ver Codigo</button>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col justify-center items-center '>
                        <img className=' w-[250px] h-[200px] hover:scale-110 m-2 ' src="/imgs/projects/front2.PNG" alt="Front Mentor 1" />
                        <h3 className='text-left px-9 py-1 font-urbanist'>Segundo Challenge de la plataforma de Front Mentor</h3>
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
                        <h3 className='text-left px-9 py-1 font-urbanist'>Tercer Challenge de la plataforma de Front Mentor</h3>
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