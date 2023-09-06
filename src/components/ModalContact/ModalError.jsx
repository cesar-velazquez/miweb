import React from 'react'

const ModalError = ({closeModal}) => {
    return (
        <div className="fixed bg-yellow-200/70 bg-[url(/imgs/fondo/EllipseMiddle.png)] bg-center bg-cover bg-no-repeat dark:bg-black/90 dark:bg-[url(/imgs/fondo/bgmobile.png)] left-0 right-0 top-0 bottom-0 flex justify-center items-center transition-[opacity_transform] duration-500">
            <div className="modal-content">
                <span className="relative left-[90%] p-1  bg-red-700 text-3xl cursor-pointer rounded-full  " onClick={closeModal}>&times;</span>
                <div className='flex flex-col justify-center'>
                    <img className='w-[100px] aspect-square m-auto rounded-full ' src="/imgs/modal/success.gif" alt="Success" />
                    <p className='text-xl text-center p-4 dark:text-white ' >Tu formulario se ha enviado con éxito.</p>
                </div>
            </div>
        </div>
    )
}

export default ModalError