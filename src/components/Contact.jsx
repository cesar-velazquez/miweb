import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Loader from './Loader/Loader';
import ModalSuccess from './ModalSucces/ModalSuccess';

const Contact = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xe77o2d', 'template_bzcvttj', form.current, 'dHdulfhsOYul4kPWH')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                setIsShowModal(true); // Mostrar el modal después del envío exitoso
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    const closeModal = () => {
        setIsShowModal(false);
    };

    return (
        <section
            id='contact'
            className='bg-yellow-100 bg-[url(/imgs/fondo/GradientSmall.png)] bg-center bg-cover bg-no-repeat
        sm:bg-[url(/imgs/fondo/EllipseMiddle.png)] 
        dark:bg-[url(/imgs/fondo/bgmobile.png)] dark:bg-purple-bg text-black  pb-16 transicion' >

            <hr className='bg-gray-500 h-[2px] mx-4' />
            <h2 className='text-center text-2xl p-4 sm:text-4xl font-bold'>Contáctame</h2>
            <form action=""
                ref={form}
                onSubmit={sendEmail}
                className=' p-4 mx-6 flex flex-col gap-1 shadow-lg shadow-black max-w-[600px] sm:m-auto '>

                <label htmlFor="name" className='text-left mx-3 mt-2' >Nombre</label>
                <input type="text" id='name' placeholder='Nombre...'
                    className='mx-3 outline-none rounded-3xl text-center'
                    name="user_name" />

                <label htmlFor="email" className='text-left mx-3 mt-2'>E-mail</label>
                <input type="email" required id='email' placeholder='Email...'
                    className='mx-3 outline-none rounded-3xl text-center'
                    name="user_email" />

                {/* <label htmlFor="asunto" className='text-left mx-3 mt-2' >Asunto</label>
                <input type="text" id='asunto' placeholder='Asunto...'
                    className='mx-3 outline-none rounded-3xl text-center' /> */}

                <label htmlFor="message" className='text-left mx-3 mt-2'>Mensaje</label>
                <textarea type="text" id='message' placeholder='Mensaje...'
                    className='mx-3 outline-none rounded-3xl text-center'
                    name="message" />

                <input className='bg-blue-600 w-[100px] my-4 m-auto rounded-3xl cursor-pointer text-white font-bold' type="submit" value={"Enviar"} />

            </form>
            {isShowModal && (              
                <ModalSuccess closeModal={closeModal} />                
            )}
        </section>
    )
}

export default Contact