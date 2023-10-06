import { t } from "i18next"

function OpenMenu({ MenuOpen }) {

    return (
        <div onClick={MenuOpen}
            className={`flex flex-col text-center items-center 
            bg-yellow-100 bg-[url(/imgs/fondo/bgmobile.png)] bg-left bg-cover bg-no-repeat 
            text-black font-urbanist sm:invisible 
            mt-16 fixed w-full z-10   
            ${MenuOpen ? 'opacity-100 duration-1000 delay-1000 animate-fade ' : 'opacity-0 '}
            dark:bg-[url(/imgs/fondo/bgmobile.png)] dark:bg-purple-bg text-black dark:text-white
            `}>
            <ul id='about' className='cursor-pointer   gap-4'>
                <li className="hover:bg-white hover:text-black rounded-3xl p-1" ><a href="#contact">{t('Contact')}</a></li>
                <li className="hover:bg-white hover:text-black rounded-3xl p-1" ><a href="#formation">{t('formation')}</a></li>
                <li className="hover:bg-white hover:text-black rounded-3xl p-1" ><a href="#projects">{t('Projects')}</a></li>                                
                <li className="hover:bg-white hover:text-black rounded-3xl p-1" ><a href="#skills">{t('Skills')}</a></li>
            </ul>
        </div>
    )
}
export default OpenMenu