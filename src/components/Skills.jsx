import React from 'react'

const Skills = () => {
    return (
        <main 
        className='bg-yellow-100 bg-[url(/imgs/fondo/GradientSmall.png)] bg-center bg-cover bg-no-repeat
        sm:bg-[url(/imgs/fondo/EllipseMiddle.png)] sm:h-[100vh] sm:grid 
        dark:bg-[url(/imgs/fondo/bgmobile.png)] dark:bg-purple-bg dark:text-white'
        id='skills'>
            <hr className='bg-gray-500 h-[2px] mx-4 ' />
            <h1 className='font-urbanist text-2xl px-2 py-4 text-center' >Mis <span className='underline' >Habilidades</span></h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 m-auto max-w-[1200px]'>
                
                <div className='w-[300px] p-4 m-auto'>
                    <img className='m-auto w-[100px] aspect-square rounded-full hover:scale-110 ' src="/imgs/skills/css.jpg" alt="CSS" />
                    <h1 className='text-center' >CSS</h1>
                    <div className="flex m-auto w-[250px] bg-black rounded-full dark:bg-gray-700">
                        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full transition-colors animate-duration-1000" style={{ width: '85%' }}>85%</div>
                    </div>
                </div>

                <div className='w-[300px] p-4 m-auto'>
                    <img className='m-auto w-[100px] aspect-square rounded-full hover:scale-110 ' src="/imgs/skills/html5.jpg" alt="HTML" />
                    <h1 className='text-center' >HTML</h1>
                    <div className="flex m-auto w-[250px] bg-black rounded-full dark:bg-gray-700">
                        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full transition-colors animate-duration-1000" style={{ width: '88%' }}>88%</div>
                    </div>
                </div>

                <div className='w-[300px] p-4 m-auto'>
                    <img className='m-auto w-[100px] aspect-square rounded-full hover:scale-110 ' src="/imgs/skills/js.jpg" alt="JS" />
                    <h1 className='text-center' >CSS</h1>
                    <div className="flex m-auto w-[250px] bg-black rounded-full dark:bg-gray-700">
                        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full transition-colors animate-duration-1000" style={{ width: '75%' }}>75%</div>
                    </div>
                </div>

                <div className='w-[300px] p-4 m-auto'>
                    <img className='m-auto w-[100px] aspect-square rounded-full hover:scale-110 ' src="/imgs/skills/react.jpg" alt="React" />
                    <h1 className='text-center' >React</h1>
                    <div className="flex m-auto w-[250px] bg-black rounded-full dark:bg-gray-700">
                        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full transition-colors animate-duration-1000" style={{ width: '50%' }}>50%</div>
                    </div>
                </div>

                <div className='w-[300px] p-4 m-auto'>
                    <img className='m-auto w-[100px] aspect-square rounded-full hover:scale-110 ' src="/imgs/skills/tailwind.jpg" alt="Tailwind" />
                    <h1 className='text-center' >CSS</h1>
                    <div className="flex m-auto w-[250px] bg-black rounded-full dark:bg-gray-700">
                        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full transition-colors animate-duration-1000" style={{ width: '85%' }}>80%</div>
                    </div>
                </div>

                <div className='w-[300px] p-4 m-auto'>
                    <img className='m-auto w-[100px] aspect-square rounded-full hover:scale-110 ' src="/imgs/skills/sql.jpg" alt="" />
                    <h1 className='text-center' >Sql Server</h1>
                    <div className="flex m-auto w-[250px] bg-black rounded-full dark:bg-gray-700">
                        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full transition-colors animate-duration-1000" style={{ width: '50%' }}>50%</div>
                    </div>
                </div>

                <div className='w-[300px] p-4 m-auto'>
                    <img className='m-auto w-[100px] aspect-square rounded-full hover:scale-110 ' src="/imgs/skills/github.jpg" alt="Github" />
                    <h1 className='text-center' >Github</h1>
                    <div className="flex m-auto w-[250px] bg-black rounded-full dark:bg-gray-700">
                        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full transition-colors animate-duration-1000" style={{ width: '70%' }}>70%</div>
                    </div>
                </div>    
            </div>
        </main>
    )
}

export default Skills