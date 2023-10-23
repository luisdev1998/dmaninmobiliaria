import { useState } from "react";
import { useParams } from 'react-router-dom';
import Carousel from "../../../components/Carousel";
import Modal from 'react-modal';
Modal.setAppElement('#root');

function ProyectosInfo(props){

    const {Data} = props;
    const { id } = useParams();
    const Lote = Data.proyectos.find(d => d.id == id);
    const [Info] = useState(Lote);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [imagen, setImagen] = useState();
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%'
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }
      };

    return(
        <div>
            <div id="ProyectosInfoBanner">
                <div style={{position:"absolute", display:"block", width:"100%"}}>
                    <div className="space-container flex horizontal-col-2 gap-3em" style={{height: '400px'}}>
                        <div className="flex column-direction gap-10">
                            <label className="text-principal-bold text-red sombra text-size-2">Conoce el Proyecto</label>
                            <label className="text-principal-bold text-white sombra text-size-2">{Info.informacion.titulo}</label>
                            <iframe
                                    height="100%" 
                                    src={Info.page.video} 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                    style={{border:"none", width:"100%"}}
                                    className="sombra"
                                >
                            </iframe>
                        </div>
                        <div className="card red flex column-direction gap-2em padding-3em sombra">
                            <div className="text-principal-bold text-size-3 text-white text-center sombra">Solicito mas informacion del proyecto "{Info.informacion.titulo}"</div>
                            <div className="flex column-direction gap-1em text-size-4" style={{height:"100%"}}>
                                <div className="flex horizontal-col-2">
                                    <input className="padding-10px sombra text-white" placeholder="Nombres*"/>
                                    <input className="padding-10px sombra text-white" placeholder="Apellidos*"/>
                                </div>
                                <div className="flex horizontal-col-2">
                                    <input className="padding-10px sombra text-white" placeholder="DNI*"/>
                                    <input className="padding-10px sombra text-white" placeholder="Celular*"/>
                                </div>
                                <input className="padding-10px sombra text-white" placeholder="Correo Electrónico*"/>
                                <button className="btn white text-secundario-bold text-size-3 text-red sombra">ENVIAR</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="black" style={{width: '100%',zIndex:"-1", height: '600px'}}>
                    <img src={Info.page.fondo} style={{width: '100%', height: '600px', opacity:0.5}}/>
                </div>
            </div>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}            
            <div>

            </div>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}            
            <div id="ProyectosInfoDescuento" className='space-container'>
                <div className='text-principal-bold text-size-1 text-center sombra'>
                    <label className="text-black">DESCUENTOS </label>
                    <label className="text-red">IDEALES</label>
                </div>
                <div className="line-decorate sombra">
                    <div className="red"></div>
                </div>
                <div className="text-center sombra">
                    <img src="/promocion.PNG" style={{width:"80%"}}/>
                </div>
            </div>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}            
            <div id='ProyectosInfoFotos' className='space-container'>
                <div className='text-principal-bold text-size-1 text-center sombra'>
                    <label className="text-red">CONOCENOS</label>
                </div>
                <div className="line-decorate sombra">
                    <div className="red"></div>
                </div>

                <div className='flex row-direction horizontal-center horizontal-col-3'>
                {
                    Info.fotos.map((element,index) => {
                        return(
                            <a key={index} style={{cursor: "pointer"}} onClick={()=>{ setImagen(element.img), setModalIsOpen(true)}}>
                                <div className="titulo">
                                    <label className="text-secundario-bold text-size-3 text-white">{element.titulo}</label>
                                </div>
                                <div className="foto">
                                    <img style={{width:"100%",height:"400px"}} src={element.img}></img>
                                </div>
                            </a>
                        )
                    })
                }
                </div>
            </div>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            <div id='LoteBeneficios' className='space-container'>
                <div className='text-principal-bold text-size-1 text-center sombra'>
                    <label className="text-red">BENEFICIOS</label>
                </div>
                <div className="line-decorate sombra">
                    <div className="red"></div>
                </div>
                
                <div className='flex row-direction horizontal-center horizontal-col-4'>
                {
                    Info.beneficios.map((element,index) => {
                        return(
                            <div key={index}>
                                <div className="card sombra padding-10px">
                                    <img style={{height:"200px"}} src={element.img}></img>
                                </div>
                                <div style={{textAlign:"center"}}>
                                    <p className="text-secundario-bold text-red sombra">{element.titulo}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            <div id='ProyectosPromociones' className='space-container'>
                <div className='text-principal-bold text-size-1 text-center sombra'>
                    <label className="text-white">PROMOCIONES</label>
                </div>
                <div className="line-decorate sombra">
                    <div className="white"></div>
                </div>
                <Carousel images={Info.promociones}/>
            </div>

            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            <div id='ProyectosUbicacion' className='space-container'>
                <div className='text-principal-bold text-size-1 text-center sombra'>
                    <label className="text-red">UBICACION</label>
                </div>
                <div className="line-decorate sombra">
                    <div className="red"></div>
                </div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.5885753652738!2d-77.07572628754102!3d-12.068821544332323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c915ab65b3f5%3A0xf52c0690fb3f1b33!2sAv.%20Mariano%20H.%20Cornejo%202256%2C%20Lima%2015088!5e0!3m2!1ses-419!2spe!4v1686710019002!5m2!1ses-419!2spe" 
                    height='500'
                    width='100%'
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                >
                    <img src={imagen} style={{width:"100%",height:"500px"}}/>
            </Modal>
        </div>
    )
}

export default ProyectosInfo;