const InicioPage = [
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
    }    
]
const LotesPage = [
    {
        id: 1,
        titulo: '',
        img:'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
    }
]
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
        nombre: 'Chongoyape',
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
const lotes = [
    {
        id: 1,
        informacion: {
            habilitado: true,
            departamento: 1,
            provincia: 2,
            distrito: 4,
            direccion: 'Dirección ejemplo 1',
            img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            titulo: 'Proyecto 1',
            descripcion: "Lorem Ipsum is simply dummy text of the printing only five centuries",
            estado: "Estreno"
        },
        page:{
            fondo: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            video: 'https://www.youtube.com/embed/8EbjtG5_FkA'
        },
        metrajes:[
            '100 m²',
            '100 m²',
            '100 m²'
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

const testimonios = [
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

const Data = {
    InicioPage,
    LotesPage,
    departamentos,
    provincias,
    distritos,
    lotes,
    servicios,
    testimonios
}

export default Data
