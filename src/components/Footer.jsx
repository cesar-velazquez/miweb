import { t } from 'i18next'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-yellow-50 bg-[url(/imgs/fondo/EllipseMobile.png)] bg-center bg-cover bg-no-repeat
        dark:bg-[url(/imgs/fondo/bgmobile.png)] dark:bg-purple-bg dark:text-white pb-6  '>
            <div>
                <ul className='flex justify-center gap-4 p-4' >
                    <li><a href="https://github.com/cesar-velazquez" target="_blank"><i className='bx bxl-github'></i></a></li>
                    <li><a href="https://www.linkedin.com/in/c%C3%A9sar-velazquez-722a9121b/" target="_blank"><i className='bx bxl-linkedin-square'></i></a></li>                    
                </ul>
            </div>
            <p className="text-center  "> © {t('copyright')} <a href="#"><b>César
                Velazquez</b></a> </p>
        </footer>
    )
}

export default Footer