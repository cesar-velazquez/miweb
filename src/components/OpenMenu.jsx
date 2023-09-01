
function OpenMenu({ MenuOpen }) {

    return (
        <div onClick={MenuOpen}
            className={`flex flex-col text-center items-center bg-white/10
            text-white font-urbanist sm:invisible      
            transition duration-500 ease-in-out opacity-0 transform ${MenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}>
            <ul id='about' className=' gap-4'>
                <li><a href="#about">Acerca de mi</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#formation">Formación</a></li>
            </ul>
        </div>
    )
}
export default OpenMenu