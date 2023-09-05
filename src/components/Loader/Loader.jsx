import React from 'react'
import './Loader.css'

const Loader = () => {
    // 
    return (
        <div className="bg-yellow-100 bg-[url(/imgs/fondo/EllipseMiddle.png)] dark:bg-purple-600 dark:bg-[url(/imgs/fondo/bgdesktop.png)] bg-cover bg-no-repeat bg-center
        flex justify-center items-center h-screen">
            <div className=" animate-ping rounded-full border-t-4 bg-teal-400 dark:bg-purple-700 border-opacity-25 h-72 w-72 "></div>                        
        </div>
    )
}

export default Loader