import React from 'react'

const Studies = () => {
    return (
        <main id='formation' className='bg-yellow-100 sm:grid 
        bg-[url(/imgs/fondo/bgmobilestudies.png)] bg-cover bg-no-repeat bg-center
        sm:bg-[url(/imgs/fondo/EllipseMiddle.png)]
        dark:bg-[url(/imgs/fondo/bgmobile.png)] dark:bg-purple-bg dark:text-white transicion '>
            <hr className='bg-gray-800 h-[2px] mx-8  ' />
            <h1 className='text-center text-2xl sm:text-4xl font-extrabold' >Formación</h1>
            <div className='grid gap-4 sm:grid-cols-2 pb-8'>
                <div className='grid gap-4' >
                    <h3 className='text-center p-4 '>Formación Académica</h3>
                    <div className='grid justify-center' >
                        <img className='m-auto w-[100px] aspect-square  rounded-3xl' src="/imgs/estudios/itsx.jpeg" alt="Itsx" />
                        <p className='text-center ' >Instituto Tecnológico Superior de Xalapa</p>
                    </div>

                    <div className='grid justify-center' >
                        <img className='m-auto w-[100px] aspect-square rounded-3xl ' src="/imgs/estudios/alura.png" alt="Alura" />
                        <p className='text-center ' >Bootcamp Alura</p>
                    </div>

                    <div className='grid justify-center' >
                        <img className='m-auto w-[100px] aspect-square rounded-3xl bg-white  ' src="/imgs/estudios/academlo.png" alt="Academlo" />
                        <p className='text-center' >Bootcamp Academlo</p>
                    </div>
                </div>


                <div className='grid gap-4' >
                    <h3 className='text-center p-4 '>Curriculum</h3>
                    <div className='grid justify-center' >
                        <img className='m-auto w-[100px] aspect-square rounded-3xl ' src="/imgs/estudios/ux.jpeg" alt="Ux" />
                        <p className='text-center ' >Becario en Universidad de Xalapa en el
                            área de Coordinación de Tecnologías
                            de la Información.</p>
                    </div>

                    <div className='grid justify-center' >
                        <img className='m-auto w-[100px] aspect-square rounded-3xl ' src="/imgs/estudios/ux.jpeg" alt="Ux" />
                        <p className='text-center ' >Soporte técnico en el área de
                            Coordinación de Tecnologías de la
                            Información.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Studies