import React from 'react'

const Studies = () => {
    return (
        <main id='formation' className='bg-yellow-100 sm:h-[80vh] sm:grid 
        bg-[url(/imgs/fondo/bgmobilestudies.png)] bg-cover bg-no-repeat bg-center
        sm:bg-[url(/imgs/fondo/EllipseMiddle.png)]
        dark:bg-[url(/imgs/fondo/bgmobile.png)] dark:bg-purple-bg dark:text-white'>
            <hr className='bg-gray-500 h-[2px] mx-4  ' />
            <h1 className='text-center text-2xl ' >Formación</h1>

            <div className='sm:grid sm:grid-cols-2 grid justify-center pb-8 px-16   ' >

                <div className='relative  h-[400px]' >
                    <h1 className='font-urbanist text-center text-2xl mt-4 '>Formación Academica</h1>
                    <div className='content-center absolute top-16 bg-red-600 w-[1px] h-[90%] left-[15%] sm:left-[50%] '>
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

                <div className='relative  h-[400px] p-4 my-4 ' >
                    <h1 className='font-urbanist text-center text-2xl '>Curriculum</h1>
                    <div className='content-center absolute top-12 bg-red-600 w-[1px] h-[80%] left-[15%] sm:left-[50%] '>
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
            </div>
        </main>
    )
}

export default Studies