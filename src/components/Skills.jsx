import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Skills = () => {
    return (
        <main
            id='skills'
            className='
        pt-12        
        bg-yellow-100 bg-[url(/imgs/fondo/EllipseMiddle.png)]
        bg-center bg-cover bg-no-repeat
        sm:bg-[url(/imgs/fondo/EllipseMiddle.png)]         
        
        dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-700 via-purple-bg to-purple-bg
        dark:text-white dark:transition-colors dark:duration-1000
        mx-auto 
        sm:w-full xl:max-w-[1200px]
        '>
            <hr className='bg-gray-500 h-[2px] mx-4' />
            <h1
                className='font-urbanist text-2xl px-2 py-4 
            text-center sm:text-4xl font-extrabold' >Mis <span
                    className='underline' >Habilidades</span></h1>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper                
                "
            >
                {/* <hr className='bg-gray-800 h-[2px] mx-8 ' /> */}
                <div
                    className=' h-[90%] grid justify-center 
                items-center m-auto
                '>
                    <div
                        className='
                grid 
                sm:grid-cols-2 lg:grid-cols-3 
                gap-4 m-auto                                                
                '></div>
                    <SwiperSlide>
                        <div className=' p-4 py-12 grid justify-center items-center m-auto'>
                            <img className='m-auto w-[100px] sm:w-[200px] aspect-square rounded-full hover:scale-110 ' src="/imgs/skills/css.jpg" alt="CSS" />
                            <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >CSS</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' py-12 p-4 m-auto'>
                            <img className='m-auto w-[100px] sm:w-[200px] aspect-square rounded-full hover:scale-110 '
                                src="/imgs/skills/html5.jpg" alt="HTML" />
                            <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >HTML</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' py-12 p-4 m-auto'>
                            <img className='m-auto w-[100px] sm:w-[200px] aspect-square rounded-full hover:scale-110 '
                                src="/imgs/skills/js.jpg" alt="HTML" />
                            <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >JS</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' py-12 p-4 m-auto'>
                            <img
                                className='m-auto w-[100px] sm:w-[200px] aspect-square 
                        rounded-full hover:scale-110 object-cover '
                                src="/imgs/skills/react.jpg" alt="HTML" />
                            <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >React</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' py-12 p-4 m-auto'>
                            <img className='m-auto w-[100px] sm:w-[200px] aspect-square 
                        rounded-full hover:scale-110  '
                                src="/imgs/skills/tailwind.jpg" alt="Tailwind" />
                            <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >Tailwind</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' py-12 p-4 m-auto'>
                            <img className='m-auto w-[100px] sm:w-[200px] aspect-square 
                        rounded-full hover:scale-110  '
                                src="/imgs/skills/github.jpg" alt="HTML" />
                            <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >Github</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' py-12 p-4 m-auto'>
                            <img className='m-auto w-[100px] sm:w-[200px] aspect-square 
                        rounded-full hover:scale-110  '
                                src="/imgs/skills/sql.jpg" alt="Sql" />
                            <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >Sql</h1>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </main>
    )
}

export default Skills