import React from 'react'

const Contact = () => {
    return (
        <section className='bg-yellow-100 bg-[url(/imgs/fondo/GradientSmall.png)] bg-center bg-cover bg-no-repeat
        sm:bg-[url(/imgs/fondo/EllipseMiddle.png)] 
        dark:bg-[url(/imgs/fondo/bgmobile.png)] dark:bg-purple-bg dark:text-white' >            
        
            <hr className='bg-gray-500  mx-4' />
            <h2 className='text-center text-2xl p-4' >Contáctame</h2>
            <form action="" 
            className=' p-4 mx-6 flex flex-col gap-1 shadow-lg shadow-black max-w-[600px] sm:m-auto '>

                <label htmlFor="name" className='text-left mx-3 mt-2' >Nombre</label>
                <input type="text" id='name' placeholder='Nombre...'
                    className='mx-3 outline-none rounded-3xl text-center' />

                <label htmlFor="email" className='text-left mx-3 mt-2'>E-mail</label>
                <input type="email" required id='email' placeholder='Email...'
                    className='mx-3 outline-none rounded-3xl text-center' />

                <label htmlFor="asunto" className='text-left mx-3 mt-2' >Asunto</label>
                <input type="text" id='asunto' placeholder='Asunto...'
                    className='mx-3 outline-none rounded-3xl text-center' />

                <label htmlFor="message" className='text-left mx-3 mt-2'>Mensaje</label>
                <textarea type="text" id='message' placeholder='Mensaje...'
                    className='mx-3 outline-none rounded-3xl text-center' />

                <input className='bg-blue-600 w-[100px] my-4 m-auto rounded-3xl text-white font-bold' type="submit" value={"Enviar"} />

            </form>
        </section>
    )
}

export default Contact