const inicio = [
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
/****************************************/
/****************************************/
const departamentos = [
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
const proyectos = [
    {
        id: 1,
        informacion: {
            habilitado: true,
            mostrarInicio: true,
            departamento: 1,
            provincia: 1,
            distrito: 1,
            direccion: 'Dirección ejemplo 1'
        },
        inicio: {
            img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            titulo: 'Proyecto 1',
        }
    },
    {
        id: 2,
        informacion: {
            habilitado: true,
            mostrarInicio: true
        },
        inicio: {
            img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            titulo: 'Proyecto 2',
        }
    }
]
/*
const proyectos = [
    {
        id: 1,
        informacion:{
            habilitado: true,
            mostrarInicio: true,
            estado: 'Estreno',
            banners: [
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
            ],
            titulo: 'Ejemplo Proyecto 1',
            logo: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
            departamento: 'Lambayeque',
            distrito: 'Chiclayo',
            provincia: 'Provincia 1',
        },
        inicio:{
            img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            titulo: 'Proyecto 1',
            precio: 'S/120,000',
            area: '60 m²',
            dormitorios: '2 a 3 Dorm',
        },
        areascomunes:[
            {
                id: 1,
                titulo: 'Lobby',
                img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
            },
            {
                id: 2,
                titulo: 'Sala de espera',
                img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'                
            },
            {
                id: 3,
                titulo: 'Estacionamiento',
                img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
            },
            {
                id: 4,
                titulo: 'Jardin',
                img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
            },
        ],
        departamentos:[
            {
                id: 1,
                piso: 10,
                precio: 'S/200,000',
                area: '100 m²',
                dormitorios: '3 Dormitorios',
                baños: '3 Baños',
                galeria:[
                    {
                        id: 1,
                        titulo: 'Sala',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        id: 2,
                        titulo: 'Dormitorio 1',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        id: 3,
                        titulo: 'Dormitorio 2',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        id: 4,
                        titulo: 'Dormitorio 3',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        id: 5,
                        titulo: 'Baño 1',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        id: 6,
                        titulo: 'Baño 2',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        id: 7,
                        titulo: 'Baño 3',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    }
                ]
            },
            {
                id: 2,
                piso: 10,
                precio: 'S/120,000',
                area: '60 m²',
                dormitorios: '2 Dormitorios',
                baños: '2 Baños',
                galeria:[
                    {
                        titulo: 'Sala',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Dormitorio 1',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Dormitorio 2',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Baño 1',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Baño 2',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                ]
            },
            {
                id: 3,
                piso: 10,
                precio: 'S/250,000',
                area: '150 m²',
                dormitorios: '3 Dormitorios',
                baños: '2 Baños',
                galeria:[
                    {
                        titulo: 'Sala',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Dormitorio 1',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Dormitorio 2',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Dormitorio 3',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Baño 1',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Baño 2',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        informacion:{
            habilitado: true,
            mostrarInicio: true,
            estado: 'Pre Venta',
            banners: [
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
            ],
            titulo: 'Ejemplo Proyecto 1',
            logo: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
            departamento: 'Lambayeque',
            distrito: 'Chiclayo',
            provincia: 'Provincia 1',
        },
        inicio:{
            img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
            titulo: 'Proyecto 2',
            precio: 'S/120,000',
            area: '60 m²',
            dormitorios: '2 a 3 Dorm',
        },
        areascomunes:[
            {
                id: 1,
                titulo: 'Lobby',
                img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
            },
            {
                id: 2,
                titulo: 'Sala de espera',
                img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'                
            },
            {
                id: 3,
                titulo: 'Estacionamiento',
                img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
            },
            {
                id: 4,
                titulo: 'Jardin',
                img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
            },
        ],
        departamentos:[
            {
                id: 1,
                piso: 10,
                precio: 'S/200,000',
                area: '100 m²',
                dormitorios: '3 Dormitorios',
                baños: '3 Baños',
                galeria:[
                    {
                        id: 1,
                        titulo: 'Sala',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        id: 2,
                        titulo: 'Dormitorio 1',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        id: 3,
                        titulo: 'Dormitorio 2',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        id: 4,
                        titulo: 'Dormitorio 3',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        id: 5,
                        titulo: 'Baño 1',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        id: 6,
                        titulo: 'Baño 2',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        id: 7,
                        titulo: 'Baño 3',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    }
                ]
            },
            {
                id: 2,
                piso: 10,
                precio: 'S/120,000',
                area: '60 m²',
                dormitorios: '2 Dormitorios',
                baños: '2 Baños',
                galeria:[
                    {
                        titulo: 'Sala',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Dormitorio 1',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Dormitorio 2',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Baño 1',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Baño 2',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                ]
            },
            {
                id: 3,
                piso: 10,
                precio: 'S/250,000',
                area: '150 m²',
                dormitorios: '3 Dormitorios',
                baños: '2 Baños',
                galeria:[
                    {
                        titulo: 'Sala',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Dormitorio 1',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Dormitorio 2',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Dormitorio 3',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Baño 1',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                    {
                        titulo: 'Baño 2',
                        img: 'https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg',
                    },
                ]
            }
        ]
    }
]*/

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
    inicio,
    proyectos,
    servicios,
    testimonios
}

export default Data