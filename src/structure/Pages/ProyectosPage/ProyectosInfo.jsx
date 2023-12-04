import { useState } from "react";
import { useParams } from 'react-router-dom';
import Carousel from "../../../components/Carousel";
import Modal from 'react-modal';
Modal.setAppElement('#root');

function ProyectosInfo(props){
    const {Data} = props;
    const { id } = useParams();
    const Lote = Data.ProyectosLista.find(d => d.id == id);
    const [Info] = useState(Lote);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [imagen, setImagen] = useState();
    const customStyles = {
        content: {
          top: '55%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '60%'
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }
    };
    const [mapa,setMapa] = useState(1);

    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [telefono,setTelefono] = useState('');
    const [email,setEmail] = useState('');
    const [dni,setDni] = useState('');

    const handleNombreChange = (e) => setNombre(e.target.value);
    const handleApellidoChange = (e) => setApellido(e.target.value);
    const handleTelefonoChange = (e) => setTelefono(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleDniChange = (e) => setDni(e.target.value);

    const createWhatsAppLink = () => {
        const mensaje = `Hola, soy ${nombre} ${apellido} con teléfono ${telefono}, con email ${email} y dni ${dni}. Deseo más información del proyecto ${Info.informacion.titulo}`;
        const encodedMensaje = encodeURIComponent(mensaje);
        return `https://wa.me/51933334533?text=${encodedMensaje}`;
    };

    return(
        <>
            <section id="ProyectosInfoBanner" className="flex horizontal-center" style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("+Info.page.fondo+")"}}>
                <div className="space-container flex horizontal-col-2 gap-2em">
                    <div className="flex column-direction gap-10px">
                        <label className="text-principal-bold text-red sombra text-size-2">Conoce el Proyecto</label>
                        <label className="text-principal-bold text-white sombra text-size-2">{Info.informacion.titulo}</label>
                        <iframe
                                height="100%" 
                                src={Info.page.video} 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                                style={{border:"none"}}
                                className="sombra"
                            >
                        </iframe>
                    </div>
                    <div className="card red flex column-direction gap-2em padding-3em sombra">
                        <div className="text-principal-bold text-size-3 text-white text-center sombra">Solicito más información del proyecto "{Info.informacion.titulo}"</div>
                        <div className="flex column-direction gap-1em text-size-4" style={{height:"100%"}}>
                            <div className="flex horizontal-col-2 gap-1em">
                                <input className="padding-10px sombra text-white" placeholder="Nombres*" onChange={handleNombreChange} />
                                <input className="padding-10px sombra text-white" placeholder="Apellidos*" onChange={handleApellidoChange} />
                            </div>
                            <div className="flex horizontal-col-2 gap-1em">
                                <input className="padding-10px sombra text-white" placeholder="DNI*" onChange={handleDniChange} />
                                <input className="padding-10px sombra text-white" placeholder="Celular*" onChange={handleTelefonoChange} />
                            </div>
                            <input className="padding-10px sombra text-white" placeholder="Correo Electrónico*" on onChange={handleEmailChange}/>
                            <a className="btn white text-center text-secundario-bold text-size-4 text-red sombra" href={createWhatsAppLink()} target="_blank">ENVIAR</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            {
                Info.informacion.descuento != '' ?
                <section id="ProyectosInfoDescuento" className="flex horizontal-center">
                    <div className='space-container'>
                        <div className='text-principal-bold text-size-1 text-center sombra'>
                            <label className="text-black">DESCUENTOS </label>
                            <label className="text-red">IDEALES</label>
                        </div>
                        <div className="line-decorate sombra">
                            <div className="red"></div>
                        </div>
                        <div className="text-center sombra">
                            <img src={Info.informacion.descuento}/>
                        </div>
                    </div>
                </section> : <></>
            }
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}            
            <section id='ProyectosInfoFotos' className="flex horizontal-center">
                <div className='space-container'>
                    <div className='text-principal-bold text-size-1 text-center sombra'>
                        <label className="text-red">CONOCENOS</label>
                    </div>
                    <div className="line-decorate sombra">
                        <div className="red"></div>
                    </div>

                    <div className='flex row-direction horizontal-center horizontal-col-3 gap-1em'>
                    {
                        Info.fotos.map((element,index) => {
                            return(
                                <a key={index} style={{cursor: "pointer"}} onClick={()=>{ setImagen(element.img), setModalIsOpen(true)}}>
                                    <div className="titulo">
                                        <label className="text-secundario-bold text-size-3 text-white">{element.titulo}</label>
                                    </div>
                                    <div className="foto">
                                        <img style={{width:"100%"}} src={element.img}></img>
                                    </div>
                                </a>
                            )
                        })
                    }
                    </div>
                </div>
            </section>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            <section id='ProyectosBeneficios' className="flex horizontal-center">
                <div className='space-container'>
                    <div className='text-principal-bold text-size-1 text-center sombra'>
                        <label className="text-red">BENEFICIOS</label>
                    </div>
                    <div className="line-decorate sombra">
                        <div className="red"></div>
                    </div>
                    <div className='flex row-direction horizontal-center horizontal-col-3 gap-1em'>
                    {
                        Info.beneficios.map((element,index) => {
                            return(
                                <div key={index} className="text-center">
                                    <i className={"fa-solid text-red text-size-1 sombra " + element.icon}></i>
                                    <div>
                                        <p className="text-secundario-bold text-black sombra">{element.titulo}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </section>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            {
                Info.promociones.Count > 0 ?
                <section id='ProyectosPromociones' className="flex horizontal-center">
                    <div className='space-container'>
                        <div className='text-principal-bold text-size-1 text-center sombra'>
                            <label className="text-white">PROMOCIONES</label>
                        </div>
                        <div className="line-decorate sombra">
                            <div className="white"></div>
                        </div>
                        <div className="flex horizontal-col-1 gap-2em">
                        <div className="sombra text-center carousel">
                            <Carousel images={Info.promociones}/>
                        </div>
                        </div>
                    </div>
                </section>
                : <></>
            }
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            <section id='ProyectosUbicacion' className="flex horizontal-center">
                <div className='space-container'>
                    <div className='text-principal-bold text-size-1 text-center sombra'>
                        <label className="text-red">UBICACION</label>
                    </div>
                    <div className="line-decorate sombra">
                        <div className="red"></div>
                    </div>
                    <div className="flex horizontal-col-2 gap-1em">
                        {
                            mapa == 1 ? 
                            <button className="btn red text-secundario-bold text-white text-size-3 padding-10px sombra"
                            >Referencia</button> :
                            <button className="btn white text-secundario-bold text-red text-size-3 padding-10px sombra"
                            onClick={()=>setMapa(1)}
                            >Referencia</button>
                        }
                        {
                            mapa == 1 ? 
                            <button className="btn white text-secundario-bold text-red text-size-3 padding-10px sombra"
                            onClick={()=>setMapa(2)}>Google Maps</button> :
                            <button className="btn red text-secundario-bold text-white text-size-3 padding-10px sombra"
                            >Google Maps</button>
                        }
                        <br/>
                    </div>
                    {
                        mapa == 1 ? 
                        <img 
                            src={Info.page.mapa_foto}
                            className="sombra"
                            />
                        :
                        <iframe 
                            src={Info.page.mapa_google}
                            className="sombra"
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    }
                </div>
            </section>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                >
                    <img src={imagen} style={{width:"100%",height:"500px"}}/>
            </Modal>
        </>
    )
}


export default ProyectosInfo;