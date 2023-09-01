import React from 'react'

const Skills = () => {
    return (
        <main className=''>
            <hr className='bg-gray-500 h-[2px] mx-4 my-4 ' />
            <h1 className='font-urbanist text-2xl px-2 py-4 text-center' >Mis <span className='underline' >Habilidades</span></h1>
            <section className='grid grid-cols-2 gap-4'>
            <div  className='p-4 ' >
                <img  className='w-[150px] aspect-square rounded-full hover:scale-110 ' src="/imgs/skills/css.jpg" alt="" />
            </div>
            <div  className='p-4' >
                <img  className='w-[150px] aspect-square rounded-full hover:scale-110 ' src="/imgs/skills/html5.jpg" alt="" />
            </div>
            <div  className='p-4' >
                <img  className='w-[150px] aspect-square rounded-full hover:scale-110' src="/imgs/skills/js.jpg " alt="" />
            </div>
            <div  className='p-4' >
                <img  className='w-[150px] aspect-square rounded-full hover:scale-110' src="/imgs/skills/react.jpg" alt="" />
            </div>
            <div className='p-4 '>
                <img className=' w-[150px] aspect-square rounded-full hover:scale-110 ' src="/imgs/skills/tailwind.jpg" alt="" />
            </div>
            <div  className='p-4' >
                <img  className='w-[150px] aspect-square rounded-full hover:scale-110' src="/imgs/skills/github.jpg" alt="" />
            </div>
            <div  className='p-4' >
                <img  className='w-[150px] aspect-square rounded-full hover:scale-110' src="/imgs/skills/sql.jpg" alt="" />
            </div>
            </section>
        </main>
    )
}

export default Skills