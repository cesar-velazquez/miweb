import React from 'react'

const Studies = () => {
    return (
        <main id='formation' className=''>
            <hr className='bg-gray-500 h-[2px] mx-4 my-4 ' />
            <h1 className='font-urbanist text-center text-2xl'>Formación Academica</h1>
            <div className='relative  h-[400px]' >
                <div className='content-center absolute top-5 bg-red-600 w-[1px] h-[90%] left-[15%] sm:left-[50%] '>
                    <div className='grid gap-8 rounded-3xl '>

                        <div className=' flex justify-center pl-12 items-center gap-4 '>
                            <i className='bx bxs-graduation bx-tada '></i>
                            <h3 className=''>Instituto Tecnológico Superior de Xalapa</h3>
                            <img className='w-[100px] aspect-square rounded-3xl' src="/imgs/estudios/itsx.jpeg" alt="Itsx" />
                        </div>

                        <div className=' flex justify-start items-center gap-4 '>
                            <i className='bx bxs-graduation bx-tada '></i>
                            <h3 className=''>Bootcamp Alura Latam</h3>
                            <img className='w-[100px] aspect-square rounded-3xl' src="/imgs/estudios/alura.png" alt="Alura" />
                        </div>
                        <div className=' flex justify-start items-center gap-4 '>
                            <i className='bx bxs-graduation bx-tada '></i>
                            <h3 className=''>Bootcamp Academlo</h3>
                            <img className='bg-white w-[100px] aspect-square rounded-3xl ' src="/imgs/estudios/academlo.png" alt="Academlo" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Studies