import { t } from 'i18next'
import React from 'react'

const Studies = () => {
    return (
        <main 
        id='formation' 
        className='
        pt-12
        bg-yellow-100 sm:grid 
        bg-[url(/imgs/fondo/EllipseMiddle.png)] bg-cover bg-no-repeat bg-center
        sm:bg-[url(/imgs/fondo/EllipseMiddle.png)]
        dark:bg-[url(/imgs/fondo/bgmobile.png)] dark:bg-purple-bg dark:text-white transicion
        xl:max-w-[1200px] mx-auto '>
            <hr className='bg-gray-800 h-[2px] mx-8  ' />
            <h1 className='text-center text-2xl sm:text-4xl font-extrabold' >{t('formation')}</h1>
            <div className='grid gap-4 sm:grid-cols-2 pb-8'>
                <div className='grid gap-4' >
                    <h3 className='text-center p-4 text-2xl'>{t('formAcad')}</h3>
                    <i className='text-center text-3xl bx bxs-graduation'></i>                    
                    <div className='grid justify-center' >
                        <img className='m-auto w-[100px] aspect-square  rounded-3xl' src="/imgs/estudios/itsx.jpeg" alt="Itsx" />
                        <p className='text-center ' >{t('itsx')}</p>
                    </div>

                    <div className='grid justify-center' >
                        <img className='m-auto w-[100px] aspect-square rounded-3xl ' src="/imgs/estudios/alura.png" alt="Alura" />
                        <p className='text-center ' >{t('bootcampAlura')}</p>
                    </div>

                    <div className='grid justify-center' >
                        <img className='m-auto w-[100px] aspect-square rounded-3xl bg-white  ' src="/imgs/estudios/academlo.png" alt="Academlo" />
                        <p className='text-center' >{t('bootcampAcademlo')}</p>
                    </div>
                </div>


                <div className='grid gap-4' >
                    <h3 className='text-center p-4 text-2xl '>{t('curriculum')}</h3>
                    <i className='text-center text-3xl bx bxs-briefcase'></i>                    
                    <div className='grid justify-center' >
                        <img className='m-auto w-[100px] aspect-square rounded-3xl ' src="/imgs/estudios/ux.jpeg" alt="Ux" />
                        <p className='text-center p-4  ' >{t('becarioux')}</p>
                            <p className='text-center '>18-03-2021 - 04-10-2021</p>
                    </div>

                    <div className='grid justify-center' >
                        <img className='m-auto w-[100px] aspect-square rounded-3xl ' src="/imgs/estudios/ux.jpeg" alt="Ux" />
                        <p className='text-center p-4 ' >{t('soporteux')}</p>
                            <p className='text-center'>05-10-2021 - 15-05-2023</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Studies