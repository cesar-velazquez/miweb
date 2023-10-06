import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs, { sendForm } from '@emailjs/browser';
import ModalSuccess from './ModalContact/ModalSuccess';
import { useForm } from 'react-hook-form';
import ModalError from './ModalContact/ModalError';

const Contact = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [isShowModal, setIsShowModal] = useState(false);
    const form = useRef();

    const sendEmail = (data) => {
        emailjs.sendForm('service_xe77o2d', 'template_bzcvttj', form.current, 'dHdulfhsOYul4kPWH')
            .then((result) => {
                // console.log(result.text);
                form.current.reset();
                setIsShowModal(true);
            })
            .catch((error) => {
                console.log(error.text);
                setIsShowModal(false);
            });
    };

    const onSubmit = (data) => {
        sendEmail(data);
    }

    const closeModal = () => {
        setIsShowModal(false);
    };

    return (
        <section
            id='contact'
            className='
            pt-12
            bg-yellow-100 bg-[url(/imgs/fondo/EllipseMiddle.png)] bg-center bg-cover bg-no-repeat
        sm:bg-[url(/imgs/fondo/EllipseMiddle.png)] 
        dark:bg-[url(/imgs/fondo/bgmobile.png)] dark:bg-purple-bg text-black dark:text-white  pb-16 transicion
        xl:max-w-[1200px] mx-auto' >

            <hr className='bg-gray-500 h-[2px] mx-4' />
            <h2 className='text-center text-2xl p-4 sm:text-4xl font-bold'>Contáctame</h2>
            <form action=""
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                className='font-semibold p-4 mx-6 flex flex-col gap-1 shadow-lg shadow-black max-w-[600px] sm:m-auto '>

                <label htmlFor="name" className='text-left mx-3 mt-2' >Nombre</label>
                <input type="text" id='name' placeholder='Nombre...'
                    className='mx-3 outline-none rounded-3xl text-center dark:bg-black/30 bg-yellow-100/60'
                    name="user_name"
                    {...register("name", {
                        required: {
                            value: true,
                            message: "Este campo es requerido"
                        },
                        maxLength: {
                            value: 15,
                            message: "Longitud excedida (máximo 15 caracteres)"
                        },
                        minLength: {
                            value: 3,
                            message: "Es demasiado corto el nombre"
                        },
                        pattern: {
                            value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
                            message: "Escriba solo letras"
                        }
                    })
                    } />
                {errors.name && <p className='text-red-700 text-center m-auto font-semibold rounded-3xl w-[200px] bg-white/40'>{errors.name.message}</p>}

                <label htmlFor="email" className='text-left mx-3 mt-2'>E-mail</label>
                <input type="email" required id='email' placeholder='Email...'
                    className='mx-3 outline-none rounded-3xl text-center dark:bg-black/30 bg-yellow-100/60'
                    name="user_email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Es requerido su email"
                        },
                        pattern: {
                            value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                            message: "esriba un email valido"
                        }
                    })
                    } />
                {errors.email && <p className='text-red-700 text-center m-auto font-semibold rounded-3xl w-[200px] bg-white/40'>{errors.email.message}</p>}
                <label htmlFor="message" className='text-left mx-3 mt-2'>Mensaje</label>
                <textarea type="text" id='message' placeholder='Mensaje...'
                    className='mx-3 outline-none rounded-3xl text-center dark:bg-black/30 bg-yellow-100/60'
                    name="message"
                    {...register("message", {
                        required: {
                            value: true,
                            message: "Escriba su mensaje"
                        },
                        minLength: {
                            value: 7,
                            message: "Es demasiado corto el nombre"
                        }
                    })

                    } />
                {errors.message && <p className='text-red-700 text-center m-auto font-semibold rounded-3xl w-[200px] bg-white/40'>{errors.message.message}</p>}

                <input className='bg-blue-600 w-[100px] my-4 m-auto rounded-3xl cursor-pointer text-white font-bold hover:bg-white hover:text-blue-700 dark:bg-purple-700 dark:hover:bg-black dark:hover:text-white ' type="submit" value={"Enviar"} />

            </form>
            {isShowModal && (
                <ModalSuccess closeModal={closeModal} />
            )}
        </section>
    )
}

export default Contact