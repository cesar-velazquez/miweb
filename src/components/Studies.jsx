import React from 'react'

const Studies = () => {
    return (
        <main className=''>
            <hr className='bg-gray-500 h-[2px] mx-4 my-4 ' />
            <h1 className='font-urbanist text-center text-2xl'>Formación Academica</h1>            
           <div className='grid gap-4 p-4 bg-slate-800/10 mx-4 rounded-3xl '>
           <div className=' flex justify-start items-center gap-4 '>
                <i className='bx bxs-graduation bx-tada '></i>
                <h3 className=''>Instituto Tecnológico Superior de Xalapa</h3>
            </div>

            <div className=' flex justify-start items-center gap-4 '>
                <i className='bx bxs-graduation bx-tada '></i>
                <h3 className=''>Bootcamp Alura Latam</h3>
            </div>
            <div className=' flex justify-start items-center gap-4 '>
                <i className='bx bxs-graduation bx-tada '></i>
                <h3 className=''>Bootcamp Academlo</h3>
            </div>
           </div>

        </main>
    )
}

export default Studies