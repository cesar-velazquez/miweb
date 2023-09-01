import React from 'react'

const About = () => {
  return (
    // bg-[url(/imgs/fondo/RuedaLeft.jpg)] bg-left
    <main>
      <div className='py-4 w-[100%] flex justify-center'>
        <img className='w-[60%] shadow-2xl shadow-blue-400 ' src="/imgs/mifoto.webp" alt="Mi foto" />
      </div>
      <h1 className='font-urbanist px-2 text-center  ' >Hola.! mucho gusto, mi nombre es César Velazquez.</h1>
      <p className='text-left font-urbanist px-4 py-2'> Soy un joven apasionado por aprender y sumergirme en el mundo de las tecnologías
        del desarrollo de software.

        Actualmente me encuentro capacitándome en un bootcamp y en diferentes cursos de
        tecnología con el fin de especializarme y obtener mayores oportunidades de conseguir
        mi primer trabajo como desarrollador.

        Fuera de mi vida profesional dedico mi tiempo de ocio a ver películas en su mayoría
        de terror o acción, además disfruto de ver anime, hacer ejercicio y en ocasiones jugar
        futbol.</p>
    </main>
  )
}

export default About