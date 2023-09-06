import React from 'react'

const About = () => {
  return (
    // bg-[url(/imgs/fondo/RuedaLeft.jpg)] bg-left
    <main className='bg-yellow-100 bg-[url(/imgs/fondo/EllipseMiddle.png)] bg-left bg-no-repeat bg-cover
    dark:bg-[url(/imgs/fondo/bgdesktop.png)] dark:bg-purple-bg dark:text-white transicion
    sm:bg-[url(/imgs/fondo/EllipseMiddle.png)] sm:bg-right  md:h-[100vh] sm:flex ' >

      <div className='flex flex-col gap-4 md:grid md:grid-cols-2 md:px-4   max-w-[1200px] m-auto '>
        <div id='about' className='pt-[5rem] pb-4 sm:pt-[5rem] w-[100%] flex justify-center'>
          <img className='w-[60%] rounded-3xl ' src="/imgs/mifoto.webp" alt="Mi foto" />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-urbanist px-2 text-center md:text-3xl lg:text-4xl font-semibold' >Hola.! mucho gusto, mi nombre es <span className='border border-b-blue-800 border-none' > César Velazquez.</span></h1>
          <p className='text-left font-urbanist px-4 py-2   '> Soy un joven apasionado por aprender y sumergirme en el mundo de las tecnologías
            del desarrollo de software.
            <br />
            Actualmente me encuentro capacitándome en un bootcamp y en diferentes cursos de
            tecnología con el fin de especializarme y obtener mayores oportunidades de conseguir
            mi primer trabajo como desarrollador.
            <br />
            Fuera de mi vida profesional dedico mi tiempo de ocio a ver películas en su mayoría
            de terror o acción, además disfruto de ver anime, hacer ejercicio y en ocasiones jugar
            futbol.</p>
            <div className='p-4 pb-8' >
              <a className='p-4 border border-purple-700 bg-yellow-100 dark:bg-purple-bg dark:text-white dark:hover:text-purple-800 font-semibold hover:text-blue-600' href="/cv/César Velazquez Ortiz CV.pdf" target='_blank'>Descargar CV <i className='bx bxs-download dark:hover:text-yellow-200 hover:text-blue-500 '></i></a>
            </div>
        </div>
      </div>
    </main>
  )
}

export default About