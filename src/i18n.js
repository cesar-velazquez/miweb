import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {          
            es: {
                translation: {
                    buttonT: 'English',
                    Contact:'Contáctame',
                    Projects: 'Proyectos',
                    formation: 'Formación',
                    Technologies: 'Tecnologías',
                    Skills: 'Habilidades',
                    greeting: 'Hola.! mucho gusto, mi nombre es',
                    aboutfirst: 'Soy un joven apasionado por aprender y sumergirme en el mundo de las tecnologías del desarrollo de software.',
                    about: 'Actualmente me encuentro capacitándome en un bootcamp y en diferentes cursos de tecnología con el fin de especializarme y obtener mayores oportunidades de conseguir mi primer trabajo como desarrollador.',
                    downloadcv:'Descargar CV',
                    my:'Mis',
                    skills:'Habilidades',
                    formAcad:'Formación Académica',
                    itsx:'Instituto Tecnológico Superior de Xalapa',
                    bootcampAlura:'Bootcamp Alura',
                    bootcampAcademlo:'Bootcamp Academlo',
                    curriculum:'Curriculum',
                    becarioux:'Becario en Universidad de Xalapa en el área de Coordinación de Tecnologías de la Información.',
                    soporteux:'Soporte técnico en el área de Coordinación de Tecnologías de la Información.'                    ,
                    nameUser: 'Nombre',
                    email:'Correo',
                    message:'Mensaje',
                    send:'Enviar',
                    copyright:'Copyright 2023 Realizado por'
                    

                },
            },
            en: {
                translation: {
                    buttonT: 'Español',
                    Contact:'Contact',
                    Projects: 'Projects',
                    formation: 'Formation',
                    Technologies: 'Technologies',
                    Skills: 'Skills',
                    greeting: 'Hello.! Nice to meet you, my name is',
                    aboutfirst: 'I am a young man passionate about learning and immersing myself in the world of software development technologies.',
                    about:"I am currently training in a bootcamp and in different technology courses in order to specialize and obtain greater opportunities to get my first job as a developer.",
                    downloadcv:'Download CV',
                    my:'My',
                    skills:'Skills',
                    formAcad:'Academic training',
                    itsx:'Higher Technological Institute of Xalapa',
                    bootcampAlura:'Bootcamp Alura',
                    bootcampAcademlo:'Bootcamp Academlo',
                    curriculum:'Curriculum',
                    becarioux:'Intern at the University of Xalapa in the area of Information Technology Coordination.',
                    soporteux:'Technical support in the area of Information Technology Coordination.',
                    nameUser: 'Username',
                    email:'E-mail',
                    message:'Message',
                    send:'Send',
                    copyright:'Copyright 2023 Made by'
                    
                    

                }
            },
        },
        lng: 'es',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;