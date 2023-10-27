const InicioBanner = [
    {
        id: 1,
        titulo: '',
        img:'/Inicio/inicio-banner-1.jpg'
    },
    {
        id: 2,
        titulo: '',
        img:'/Inicio/inicio-banner-2.jpg'
    },
    {
        id: 3,
        titulo: '',
        img:'/Inicio/inicio-banner-3.jpg'
    }
]
const InicioProyectos = [
    {
        id: 1,
        titulo: '',
        img:'/Inicio/inicio-proyecto-1.jpg'
    },
    {
        id: 2,
        titulo: '',
        img:'/Inicio/inicio-proyecto-2.jpg'
    },
    {
        id: 3,
        titulo: '',
        img:'/Inicio/inicio-proyecto-3.jpg'
    },
    {
        id: 4,
        titulo: '',
        img:'/Inicio/inicio-proyecto-3.jpg'
    },
    {
        id: 5,
        titulo: '',
        img:'/Inicio/inicio-proyecto-3.jpg'
    }
]
const InicioEquipo = {
    img: '/Inicio/inicio-equipo.jpg'
}
const InicioTestimonios = [
    {
        id: 1,
        titulo: '',
        img:'/Inicio/inicio-testimonio-1.jpg'
    },
    {
        id: 2,
        titulo: '',
        img:'/Inicio/inicio-testimonio-2.jpg'
    },
    {
        id: 3,
        titulo: '',
        img:'/Inicio/inicio-testimonio-3.jpg'
    },
    {
        id: 4,
        titulo: '',
        img:'/Inicio/inicio-testimonio-4.jpg'
    },
    {
        id: 5,
        titulo: '',
        img:'/Inicio/inicio-testimonio-5.jpg'
    },
    {
        id: 6,
        titulo: '',
        img:'/Inicio/inicio-testimonio-6.jpg'
    },
]
const InicioContactos = {
    telefono: '+51 999999999',
    correo: 'ejemplo@gmail.com',
    direccion: 'Avenida ejemplo, chiclayo',
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
        nombre: 'Eten',
        provincia: 1
    },
    {
        id: 4,
        nombre: 'Cañaris',
        provincia: 2
    },
    {
        id: 5,
        nombre: 'Incahuasi',
        provincia: 2
    },
    {
        id: 6,
        nombre: 'Pitipo',
        provincia: 2
    },
    {
        id: 7,
        nombre: 'Chochope',
        provincia: 3
    },
    {
        id: 8,
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
            direccion: 'Dirección ejemplo 1',
            img: '/Proyecto/1/Proyecto.jpg',
            titulo: 'EL BOSQUE DE PIMENTEL',
            descripcion: "Lorem Ipsum is simply dummy text of the printing only five centuries",
            estado: "Estreno"
        },
        page:{
            fondo: '/Proyecto/1/Banner.jpg',
            video: 'https://www.youtube.com/embed/8EbjtG5_FkA',
            mapa_foto: '/Proyecto/1/Mapa.jpg',
            mapa_google: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.5885753652738!2d-77.07572628754102!3d-12.068821544332323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c915ab65b3f5%3A0xf52c0690fb3f1b33!2sAv.%20Mariano%20H.%20Cornejo%202256%2C%20Lima%2015088!5e0!3m2!1ses-419!2spe!4v1686710019002!5m2!1ses-419!2spe'
        },
        metrajes:[
            '100 m²',
            '100 m²',
            '100 m²'
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
                titulo: "DESAGUE",
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
                img: '/Proyecto/1/BROCHUR BOSQUE DE PIMENTEL_page-0002.jpg'
            },
            {
                id: 2,
                titulo: "Valores",
                img: '/Proyecto/1/BROCHUR BOSQUE DE PIMENTEL_page-0003.jpg'
            },
            {
                id: 3,
                titulo: "Beneficios",
                img: '/Proyecto/1/BROCHUR BOSQUE DE PIMENTEL_page-0004.jpg'
            },
            {
                id: 4,
                titulo: "Planos",
                img: '/Proyecto/1/BROCHUR BOSQUE DE PIMENTEL_page-0005.jpg'
            },
            {
                id: 5,
                titulo: "Mapa",
                img: '/Proyecto/1/BROCHUR BOSQUE DE PIMENTEL_page-0006.jpg'
            },
            {
                id: 6,
                titulo: "Referencias",
                img: '/Proyecto/1/BROCHUR BOSQUE DE PIMENTEL_page-0007.jpg'
            },
            {
                id: 7,
                titulo: "Referencias",
                img: '/Proyecto/1/BROCHUR BOSQUE DE PIMENTEL_page-0008.jpg'
            },
            {
                id: 8,
                titulo: "Título de Propiedad",
                img: '/Proyecto/1/BROCHUR BOSQUE DE PIMENTEL_page-0009.jpg'
            },
            {
                id: 9,
                titulo: "Copia Literal",
                img: '/Proyecto/1/BROCHUR BOSQUE DE PIMENTEL_page-0010.jpg'
            }
        ],
        promociones: [
            {
                id: 1,
                titulo: '',
                img:'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
            },
            {
                id: 2,
                titulo: '',
                img:'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
            },
            {
                id: 3,
                titulo: '',
                img:'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
            },
            {
                id: 4,
                titulo: '',
                img:'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
            },
            {
                id: 5,
                titulo: '',
                img:'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
            }
        ]
    },
    {
        id: 2,
        informacion: {
            habilitado: true,
            departamento: 1,
            provincia: 1,
            distrito: 1,
            direccion: 'Dirección ejemplo 1',
            img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            titulo: 'Proyecto 2',
            descripcion: "Lorem Ipsum is simply dummyn book. It has survived not only five centuries",
            estado: "Estreno"
        },
        metrajes:[
            '100 m²',
            '60 m²'
        ]
    },
    {
        id: 3,
        informacion: {
            habilitado: true,
            departamento: 1,
            provincia: 1,
            distrito: 1,
            direccion: 'Dirección ejemplo 1',
            img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            titulo: 'Proyecto 3',
            descripcion: "Lorem Ipssum has been the industry's stahe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            estado: "Estreno"},
        metrajes:[
            '120 m²',
            '60 m²',
            '100 m²'
        ]
    },
    {
        id: 4,
        informacion: {
            habilitado: true,
            departamento: 1,
            provincia: 1,
            distrito: 1,
            direccion: 'Dirección ejemplo 1',
            img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            titulo: 'Proyecto 4',
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            estado: "Estreno"
        },
        metrajes:[
            '120 m²',
            '60 m²',
            '100 m²'
        ]
    },
    {
        id: 5,
        informacion: {
            habilitado: true,
            departamento: 1,
            provincia: 1,
            distrito: 1,
            direccion: 'Dirección ejemplo 1',
            img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            titulo: 'Proyecto 5',
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            estado: "Estreno"},
        metrajes:[
            '120 m²',
            '60 m²',
            '100 m²'
        ]
    },
    {
        id: 6,
        informacion: {
            habilitado: true,
            departamento: 1,
            provincia: 1,
            distrito: 1,
            direccion: 'Dirección ejemplo 1',
            img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            titulo: 'Proyecto 6',
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            estado: "Estreno"
        },
        metrajes:[
            '120 m²',
            '60 m²',
            '100 m²'
        ]
    },
    {
        id: 7,
        informacion: {
            habilitado: true,
            departamento: 1,
            provincia: 1,
            distrito: 1,
            direccion: 'Dirección ejemplo 1',
            img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            titulo: 'Proyecto 7',
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            estado: "Estreno"
        },
        metrajes:[
            '120 m²',
            '60 m²',
            '100 m²'
        ]
    },
    {
        id: 8,
        informacion: {
            habilitado: true,
            departamento: 1,
            provincia: 1,
            distrito: 1,
            direccion: 'Dirección ejemplo 1',
            img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            titulo: 'Proyecto 8',
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            estado: "Estreno"
        },
        metrajes:[
            '120 m²',
            '60 m²',
            '100 m²'
        ]
    },
]

const servicios = [
    {
        id: 1,
        titulo: 'Construcción',
        descripcion: 'ejemplo ejemplo ejemplo ejemplo ejemplo',
        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
    },
    {
        id: 2,
        titulo: 'Planos',
        descripcion: 'ejemplo ejemplo ejemplo ejemplo ejemplo',
        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
    },
    {
        id: 3,
        titulo: 'Asesoramiento',
        descripcion: 'ejemplo ejemplo ejemplo ejemplo ejemplo',
        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
    },
    {
        id: 4,
        titulo: 'Diseño de interiores',
        descripcion: 'ejemplo ejemplo ejemplo ejemplo ejemplo',
        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
    },
    {
        id: 5,
        titulo: 'Ejemplo',
        descripcion: 'ejemplo ejemplo ejemplo ejemplo ejemplo',
        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
    }
]

const Data = {
    InicioBanner,
    InicioProyectos,
    InicioEquipo,
    InicioTestimonios,
    InicioContactos,
    
    departamentos,
    provincias,
    distritos,
    ProyectosLista,
    servicios
}

export default Data
