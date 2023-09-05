
function OpenMenu({ MenuOpen }) {

    return (
        <div onClick={MenuOpen}
            className={`flex flex-col text-center items-center bg-yellow-100 bg-[url(/imgs/fondo/bgmobile.png)] bg-left bg-cover bg-no-repeat 
            text-black font-urbanist sm:invisible      
            ${MenuOpen ? 'opacity-100 duration-1000 delay-1000 animate-fade ' : 'opacity-0 '}
            `}>
            <ul id='about' className='cursor-pointer   gap-4'>
                <li className="hover:bg-white hover:text-black rounded-3xl p-1" ><a href="#about">Acerca de mi</a></li>
                <li className="hover:bg-white hover:text-black rounded-3xl p-1" ><a href="#formation">Formación</a></li>
                <li className="hover:bg-white hover:text-black rounded-3xl p-1" ><a href="#projects">Proyectos</a></li>                                
                <li className="hover:bg-white hover:text-black rounded-3xl p-1" ><a href="#skills">Skills</a></li>
            </ul>
        </div>
    )
}
export default OpenMenu