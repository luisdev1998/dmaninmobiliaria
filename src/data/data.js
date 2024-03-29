const Whatsapp = 'https://wa.link/onsojp'
/****************************************/
/****************************************/
const FooterRedes = [
    {
        icon: 'fa-facebook',
        url: 'https://www.facebook.com/dmaninmobiliaria'
    },
    {
        icon: 'fa-youtube',
        url: 'https://www.youtube.com/@Dmaninmobiliariaoficial'
    },
    {
        icon: 'fa-instagram',
        url: 'https://www.instagram.com/dmaninmobiliaria/'
    },
    {
        icon: 'fa-tiktok',
        url: 'https://www.tiktok.com/@dman_inmobiliaria'
    }
]
/****************************************/
/****************************************/
const InicioBanner = [
    {
        titulo: '',
        img:'/Inicio/inicio-banner-1.jpg'
    },
    {
        titulo: '',
        img:'/Inicio/inicio-banner-2.jpg'
    },
    {
        titulo: '',
        img:'/Inicio/inicio-banner-3.jpg'
    }
]
const InicioProyectos = [
    {
        id:3,
        titulo: '',
        img:'/Inicio/inicio-proyecto-1.jpg'
    },
    {
        id:5,
        titulo: '',
        img:'/Inicio/inicio-proyecto-2.jpg'
    },
    {
        id:4,
        titulo: '',
        img:'/Inicio/inicio-proyecto-3.jpg'
    },
    {
        id:2,
        titulo: '',
        img:'/Inicio/inicio-proyecto-4.jpg'
    },
    {
        id:1,
        titulo: '',
        img:'/Inicio/inicio-proyecto-5.jpg'
    }
]
const InicioEquipo = {
    descripcion: 'Conoce el equipo de ventas, que se encarga de brindarte el mejor servicio y asesorías para que puedas agilizar el proceso y papeleos para la obtención de tu lote.',
    img: '/Inicio/inicio-equipo.jpg'
}
const InicioTestimonios = {
    descripcion: 'Nuestro principal objetivo es ayudarles a cumplir su sueño de vivienda propia. Por ello, nos esforzamos en ofrecer un servicio de calidad, atención personalizada y soluciones a medida para cada uno de nuestros clientes.',
    fotos: [
        {
            titulo: '',
            img:'/Inicio/inicio-testimonio-1.jpg'
        },
        {
            titulo: '',
            img:'/Inicio/inicio-testimonio-2.jpg'
        },
        {
            titulo: '',
            img:'/Inicio/inicio-testimonio-3.jpg'
        },
        {
            titulo: '',
            img:'/Inicio/inicio-testimonio-4.jpg'
        },
        {
            titulo: '',
            img:'/Inicio/inicio-testimonio-5.jpg'
        },
        {
            titulo: '',
            img:'/Inicio/inicio-testimonio-6.jpg'
        }
    ]
}
const InicioContactos = [
    {
        icon: 'fa-phone',
        titulo: 'CONTÁCTANOS',
        descripcion: '+51 933-334-533'
    },
    {
        icon: 'fa-envelope',
        titulo: 'ESCRÍBENOS',
        descripcion: 'dmanindustriasperu@gmail.com'
    },
    {
        icon: 'fa-map',
        titulo: 'UBICACIÓN',
        descripcion: 'Las Acacias #292 - Sta. Victoria, Chiclayo, Peru'
    }
]
/****************************************/
/****************************************/
const Constructora = {
    banner: '/Constructora/Banner.jpg',
    titulo: 'Realiza con nosotros mejor inversión de futuro a largo plazo!',
    video: '/Constructora/Video.mp4',
    descripcion: 'Somos una empresa con más de 2 años de experiencia, brindando solidez y confianza en su futuro proyecto de vida adquiriendo lotes o construcción de su hogar. Contamos con la infraestructa y equipo adecuado para poder ofrecerle al cliente la mejor experiencia.',
    mision: '',
    vision: '',
    valores: '',
    servicios: [
        {
            icon: '',
            titulo: '',
            descripcion: ''
        },
        {
            icon: '',
            titulo: '',
            descripcion: ''
        },
        {
            icon: '',
            titulo: '',
            descripcion: ''
        },
        {
            icon: '',
            titulo: '',
            descripcion: ''
        },
        {
            icon: '',
            titulo: '',
            descripcion: ''
        },
        {
            icon: '',
            titulo: '',
            descripcion: ''
        }
    ]
}
/****************************************/
/****************************************/
const departamentos = [
    {
        id: 0,
        nombre: 'Todos'
    },
    {
        id: 1,
        nombre: 'Lambayeque'
    }
]
const provincias = [
    {
        id: 1,
        nombre: 'Chiclayo',
        departamento: 1
    },
    {
        id: 2,
        nombre: 'Ferreñafe',
        departamento: 1
    },
    {
        id: 3,
        nombre: 'Lambayeque',
        departamento: 1
    }
]
const distritos = [
    {
        id: 1,
        nombre: 'Chiclayo',
        provincia: 1
    },
    {
        id: 2,
        nombre: 'Pimentel',
        provincia: 1
    },
    {
        id: 3,
        nombre: 'Monsefú',
        provincia: 1
    },
    {
        id: 4,
        nombre: 'La Victoria',
        provincia: 1
    },
    {
        id: 5,
        nombre: 'Cañaris',
        provincia: 2
    },
    {
        id: 6,
        nombre: 'Incahuasi',
        provincia: 2
    },
    {
        id: 7,
        nombre: 'Pitipo',
        provincia: 2
    },
    {
        id: 8,
        nombre: 'Chochope',
        provincia: 3
    },
    {
        id: 9,
        nombre: 'Illimo',
        provincia: 3
    },
    {
        id: 9,
        nombre: 'Jayanca',
        provincia: 3
    },
]
/****************************************/
/****************************************/
const ProyectosLista = [
    {
        id: 1,
        informacion: {
            habilitado: true,
            departamento: 1,
            provincia: 1,
            distrito: 2,
            direccion: 'La Pradera',
            img: '/Proyecto/1/Proyecto.jpg',
            descuento: '',
            titulo: 'EL BOSQUE DE PIMENTEL',
            descripcion: "Proyecto Bosque de Pimentel ubicado en La Pradera, Pimentel a 2 min de la Universidad San Martín y a 5 minutos del resto de universidades.",
            estado: "50% de avance de obras"
        },
        page:{
            fondo: '/Proyecto/1/Banner.jpg',
            video: 'https://www.youtube.com/embed/47jCIedj3h8',
            mapa_foto: '/Proyecto/1/Mapa.jpg',
            mapa_google: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.9470641480393!2d-79.89671242500485!3d-6.776297793220613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDYnMzQuNyJTIDc5wrA1MyczOC45Ilc!5e0!3m2!1ses-419!2spe!4v1700698368307!5m2!1ses-419!2spe'
        },
        metrajes:[
            '72 m²'
        ],
        beneficios: [
            {
                id: 1,
                titulo: "AGUA",
                icon: 'fa-faucet-drip'
            },
            {
                id: 2,
                titulo: "PARQUE",
                icon: 'fa-tree'
            },
            {
                id: 3,
                titulo: "DESAGÜE",
                icon: 'fa-toilet'
            },
            {
                id: 4,
                titulo: "VEREDAS",
                icon: 'fa-person-walking-arrow-right'
            },
            {
                id: 5,
                titulo: "LUZ TRIFÁSICA",
                icon: 'fa-lightbulb'
            },
            {
                id: 6,
                titulo: "CALLES AFIRMADAS",
                icon: 'fa-road'
            }
        ],
        fotos: [
            {
                id: 1,
                titulo: "Misión y Visión",
                img: '/Proyecto/1/Conocenos-1.jpg'
            },
            {
                id: 2,
                titulo: "Valores",
                img: '/Proyecto/1/Conocenos-2.jpg'
            },
            {
                id: 3,
                titulo: "Beneficios",
                img: '/Proyecto/1/Conocenos-3.jpg'
            },
            {
                id: 4,
                titulo: "Planos",
                img: '/Proyecto/1/Conocenos-4.jpg'
            },
            {
                id: 5,
                titulo: "Mapa",
                img: '/Proyecto/1/Conocenos-5.jpg'
            },
            {
                id: 6,
                titulo: "Referencias",
                img: '/Proyecto/1/Conocenos-6.jpg'
            },
            {
                id: 7,
                titulo: "Referencias",
                img: '/Proyecto/1/Conocenos-7.jpg'
            },
            {
                id: 8,
                titulo: "Título de Propiedad",
                img: '/Proyecto/1/Conocenos-8.jpg'
            },
            {
                id: 9,
                titulo: "Copia Literal",
                img: '/Proyecto/1/Conocenos-9.jpg'
            }
        ],
        promociones: []
    },
    {
        id: 2,
        informacion: {
            habilitado: true,
            departamento: 1,
            provincia: 1,
            distrito: 3,
            direccion: 'Dirección ejemplo 1',
            descuento: '',
            img: '/Proyecto/2/Proyecto.jpg',
            titulo: 'EL BOSQUE DE VALLE HERMOSO',
            descripcion: "Calles afirmadas y falta el cableado para la tercera y primera etapa. A 5 minutos del centro de Monsefú",
            estado: "75% de avance de obra"
        },
        page:{
            fondo: '/Proyecto/2/Banner.jpg',
            video: 'https://www.youtube.com/embed/jW6xEcKbTeM',
            mapa_foto: '/Proyecto/2/Mapa.jpg',
            mapa_google: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2726463728663!2d-79.88635769999999!3d-6.8578897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ce5338cfd55d9%3A0x6f3f5229610a1570!2sBOSQUE%20DE%20VALLE%20HERMOSO%2CMONSEFU!5e0!3m2!1ses-419!2spe!4v1701709659564!5m2!1ses-419!2spe'
        },
        metrajes:[
            '120 m²',
            '160 m²'
        ],
        beneficios: [
            {
                id: 1,
                titulo: "AGUA",
                icon: 'fa-faucet-drip'
            },
            {
                id: 2,
                titulo: "3 PARQUES",
                icon: 'fa-tree'
            },
            {
                id: 3,
                titulo: "VEREDAS",
                icon: 'fa-person-walking-arrow-right'
            },
            {
                id: 4,
                titulo: "LUZ TRIFÁSICA",
                icon: 'fa-lightbulb'
            },
            {
                id: 5,
                titulo: "CALLES AFIRMADAS",
                icon: 'fa-road'
            }
        ],
        fotos: [
            {
                id: 1,
                titulo: "Avance de Obras",
                img: '/Proyecto/2/Conocenos-1.jpg'
            },
            {
                id: 2,
                titulo: "Mapa",
                img: '/Proyecto/2/Conocenos-2.jpg'
            },
            {
                id: 3,
                titulo: "Fotos",
                img: '/Proyecto/2/Conocenos-3.jpg'
            },
            {
                id: 4,
                titulo: "Bienvenida",
                img: '/Proyecto/2/Conocenos-4.jpg'
            },
            {
                id: 5,
                titulo: "Beneficios",
                img: '/Proyecto/2/Conocenos-5.jpg'
            },
            {
                id: 6,
                titulo: "Copia Literal Tetapa I,II,III",
                img: '/Proyecto/2/Conocenos-6.jpg'
            },
            {
                id: 7,
                titulo: "Título de Propiedad Etapa I",
                img: '/Proyecto/2/Conocenos-7.jpg'
            },
            {
                id: 8,
                titulo: "Ensa",
                img: '/Proyecto/2/Conocenos-8.jpg'
            },
            {
                id: 9,
                titulo: "Zona",
                img: '/Proyecto/2/Conocenos-9.jpg'
            }
        ],
        promociones: []
    },
    {
        id: 3,
        informacion: {
            habilitado: true,
            departamento: 1,
            provincia: 1,
            distrito: 3,
            direccion: 'Villa Cusupe - Monsefú',
            descuento: '',
            img: '/Proyecto/3/Proyecto.jpg',
            titulo: 'VILLA CUSUPE',
            descripcion: 'Bella Urbanización "Villa Cúsupe" ubicada en Monsefú a 2 minutos de la plaza central.',
            estado: "90% de avance de obras"
        },
        page:{
            fondo: '/Proyecto/3/Banner.jpg',
            video: 'https://www.youtube.com/embed/xrjGQnWn_OM?si=4j0dbZK37v2sAjSj',
            mapa_foto: '/Proyecto/3/Mapa.jpg',
            mapa_google: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.073905181567!2d-79.86078992500387!3d-6.881749993117163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTInNTQuMyJTIDc5wrA1MScyOS42Ilc!5e0!3m2!1ses-419!2spe!4v1700698263247!5m2!1ses-419!2spe'
        },
        metrajes:[
            '120 m²'
        ],
        beneficios: [
            {
                id: 1,
                titulo: "AGUA",
                icon: 'fa-faucet-drip'
            },
            {
                id: 2,
                titulo: "2 PARQUES",
                icon: 'fa-tree'
            },
            {
                id: 3,
                titulo: "DESAGÜE",
                icon: 'fa-toilet'
            },
            {
                id: 4,
                titulo: "ESTACIONAMIENTO",
                icon: 'fa-car-side'
            },
            {
                id: 5,
                titulo: "VEREDAS",
                icon: 'fa-person-walking-arrow-right'
            },
            {
                id: 6,
                titulo: "LUZ TRIFÁSICA",
                icon: 'fa-lightbulb'
            },
            {
                id: 7,
                titulo: "CALLES AFIRMADAS",
                icon: 'fa-road'
            },
            {
                id: 8,
                titulo: "PLATAFORMA DEPORTIVA",
                icon: 'fa-futbol'
            }
        ],
        fotos: [
            {
                id: 1,
                titulo: "Misión y Visión",
                img: '/Proyecto/3/Conocenos-1.jpg'
            },
            {
                id: 2,
                titulo: "Valores",
                img: '/Proyecto/3/Conocenos-2.jpg'
            },
            {
                id: 3,
                titulo: "Beneficios",
                img: '/Proyecto/3/Conocenos-3.jpg'
            },
            {
                id: 4,
                titulo: "Planos",
                img: '/Proyecto/3/Conocenos-4.jpg'
            },
            {
                id: 5,
                titulo: "Mapa",
                img: '/Proyecto/3/Conocenos-5.jpg'
            },
            {
                id: 6,
                titulo: "Acerca De",
                img: '/Proyecto/3/Conocenos-6.jpg'
            },
            {
                id: 7,
                titulo: "Acerca De",
                img: '/Proyecto/3/Conocenos-7.jpg'
            },
            {
                id: 8,
                titulo: "Título de Propiedad",
                img: '/Proyecto/3/Conocenos-8.jpg'
            },
            {
                id: 9,
                titulo: "Copia Literal",
                img: '/Proyecto/3/Conocenos-9.jpg'
            },
            {
                id: 10,
                titulo: "Avance de Obra",
                img: '/Proyecto/3/Conocenos-10.jpg'
            },
            {
                id: 11,
                titulo: "Avance de Obra",
                img: '/Proyecto/3/Conocenos-11.jpg'
            }
        ],
        promociones: []
    },
    {
        id: 4,
        informacion: {
            habilitado: true,
            departamento: 1,
            provincia: 1,
            distrito: 4,
            direccion: 'Chacupe, La Victoria',
            descuento: '',
            img: '/Proyecto/4/Proyecto.jpg',
            titulo: 'VILLA ROSARIO',
            descripcion: 'Nuevo Proyecto Urbano "Villa Rosario" ubicado en Chacupe, La Victoria, a 1 minuto de la Av. Grau.',
            estado: "Estreno"
        },
        page:{
            fondo: '/Proyecto/4/Banner.jpg',
            video: 'https://www.youtube.com/embed/QK0HW9Oi4ww',
            mapa_foto: '/Proyecto/4/Mapa.jpg',
            mapa_google: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3961.4541954939687!2d-79.8675435!3d-6.836021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ce51659092853%3A0x342efb475d7423a8!2sVilla%20Rosario!5e0!3m2!1sen!2spe!4v1700698071895!5m2!1sen!2spe'
        },
        metrajes:[
            '98 m²'
        ],
        beneficios: [
            {
                id: 1,
                titulo: "AGUA",
                icon: 'fa-faucet-drip'
            },
            {
                id: 2,
                titulo: "2 PARQUES",
                icon: 'fa-tree'
            },
            {
                id: 3,
                titulo: "VEREDAS",
                icon: 'fa-person-walking-arrow-right'
            },
            {
                id: 4,
                titulo: "LUZ TRIFÁSICA",
                icon: 'fa-lightbulb'
            },
            {
                id: 5,
                titulo: "CALLES AFIRMADAS",
                icon: 'fa-road'
            }
        ],
        fotos: [
            {
                id: 1,
                titulo: "Misión y Visión",
                img: '/Proyecto/4/Conocenos-1.jpg'
            },
            {
                id: 2,
                titulo: "Valores",
                img: '/Proyecto/4/Conocenos-2.jpg'
            },
            {
                id: 3,
                titulo: "Beneficios",
                img: '/Proyecto/4/Conocenos-3.jpg'
            },
            {
                id: 4,
                titulo: "Planos",
                img: '/Proyecto/4/Conocenos-4.jpg'
            },
            {
                id: 5,
                titulo: "Mapa",
                img: '/Proyecto/4/Conocenos-5.jpg'
            },
            {
                id: 6,
                titulo: "Acerca De",
                img: '/Proyecto/4/Conocenos-6.jpg'
            },
            {
                id: 7,
                titulo: "Acerca De",
                img: '/Proyecto/4/Conocenos-7.jpg'
            },
            {
                id: 8,
                titulo: "Título de Propiedad",
                img: '/Proyecto/4/Conocenos-8.jpg'
            },
            {
                id: 9,
                titulo: "Localización",
                img: '/Proyecto/4/Conocenos-9.jpg'
            },
            {
                id: 10,
                titulo: "Avance de Obra",
                img: '/Proyecto/4/Conocenos-10.jpg'
            }
        ],
        promociones: []
    },
    {
        id: 5,
        informacion: {
            habilitado: true,
            departamento: 1,
            provincia: 1,
            distrito: 1,
            direccion: 'La Victoria - Chacupe Bajo',
            descuento: '',
            img: '/Proyecto/5/Proyecto.jpg',
            titulo: 'VILLA FLORES',
            descripcion: "A 5 minutos del centro Poblado sagrado corazón de Jesús donde hay paradero de colectivos y prácticamente cerca al proyecto Villa Flores.",
            estado: "80% de avance de obra"
        },
        page:{
            fondo: '/Proyecto/5/Banner.jpg',
            video: 'https://www.youtube.com/embed/XcRNZPNyTos',
            mapa_foto: '/Proyecto/5/Mapa.jpg',
            mapa_google: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.660779469014!2d-79.86783659999999!3d-6.8110517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef182a8dcc59%3A0x71917ddf7e72f24!2sLotizaci%C3%B3n%20Villa%20Flores!5e0!3m2!1ses-419!2spe!4v1701709749875!5m2!1ses-419!2spe'
        },
        metrajes:[
            '90 m²'
        ],
        beneficios: [
            {
                id: 1,
                titulo: "AGUA",
                icon: 'fa-faucet-drip'
            },
            {
                id: 2,
                titulo: "VEREDAS",
                icon: 'fa-person-walking-arrow-right'
            },
            {
                id: 3,
                titulo: "LUZ TRIFÁSICA",
                icon: 'fa-lightbulb'
            },
            {
                id: 4,
                titulo: "CALLES AFIRMADAS",
                icon: 'fa-road'
            }
        ],
        fotos: [
            // {
            //     id: 1,
            //     titulo: "Misión y Visión",
            //     img: '/Proyecto/5/Conocenos-1.jpg'
            // },
            // {
            //     id: 2,
            //     titulo: "Valores",
            //     img: '/Proyecto/5/Conocenos-2.jpg'
            // },
            // {
            //     id: 3,
            //     titulo: "Beneficios",
            //     img: '/Proyecto/5/Conocenos-3.jpg'
            // },
            // {
            //     id: 4,
            //     titulo: "Planos",
            //     img: '/Proyecto/5/Conocenos-4.jpg'
            // },
            // {
            //     id: 5,
            //     titulo: "Mapa",
            //     img: '/Proyecto/5/Conocenos-5.jpg'
            // },
            // {
            //     id: 6,
            //     titulo: "Acerca De",
            //     img: '/Proyecto/5/Conocenos-6.jpg'
            // },
            // {
            //     id: 7,
            //     titulo: "Acerca De",
            //     img: '/Proyecto/5/Conocenos-7.jpg'
            // },
            // {
            //     id: 8,
            //     titulo: "Título de Propiedad",
            //     img: '/Proyecto/5/Conocenos-8.jpg'
            // },
            // {
            //     id: 9,
            //     titulo: "Localización",
            //     img: '/Proyecto/5/Conocenos-9.jpg'
            // },
            // {
            //     id: 10,
            //     titulo: "Avance de Obra",
            //     img: '/Proyecto/5/Conocenos-10.jpg'
            // }
        ],
        promociones: []
    }
]

const Data = {
    Whatsapp,

    FooterRedes,

    InicioBanner,
    InicioProyectos,
    InicioEquipo,
    InicioTestimonios,
    InicioContactos,
    
    departamentos,
    provincias,
    distritos,
    ProyectosLista,

    Constructora
}

export default Data
