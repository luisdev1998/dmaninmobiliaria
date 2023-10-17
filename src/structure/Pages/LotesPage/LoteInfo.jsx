import { useState } from "react";
import { useParams } from 'react-router-dom';
import Carousel from "../../../components/Carousel";
import Modal from 'react-modal';
Modal.setAppElement('#root');

function LoteInfo(props){

    const {Data} = props;
    const { id } = useParams();
    const Lote = Data.lotes.find(d => d.id == id);
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
            <div id="LoteInfo">
                <div style={{position:"absolute", display:"block", width:"100%"}}>
                    <div className="space-container flex horizontal-col-2" style={{height: '400px'}}>
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                            <label className="text-title-banner text-red">Conoce el Proyecto</label>
                            <label className="text-title-banner text-white">{Info.informacion.titulo}</label>
                        </div>
                        <iframe
                                height="100%" 
                                src={Info.page.video} 
                                title="asd" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                                style={{border:"none", width:"100%"}}
                            >
                        </iframe>
                    </div>
                </div>
                <div style={{backgroundColor:"black",width: '100%',zIndex:"-1", height: '500px'}}>
                    <img src={Info.page.fondo} style={{width: '100%', height: '500px', opacity:0.8}}/>
                </div>
            </div>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}            
            <div id='LoteFotos' className='space-container'>
                <div className='text-title' style={{textAlign:"center"}}> 
                    <label className="text-title text-red">Algunas</label>
                    <label className="text-black">Imágenes</label>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div className="text-space red"></div>
                </div>

                <div className='flex horizontal-adjust horizontal-center horizontal-col-4'>
                {
                    Info.fotos.map((element,index) => {
                        return(
                            <a key={index} style={{cursor: "pointer"}} onClick={()=>{ setImagen(element.img), setModalIsOpen(true)}}>
                                <div className="titulo">
                                    <label className="text-content-bold text-white">{element.titulo}</label>
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
                <div className='text-title' style={{textAlign:"center"}}> 
                    <label className="text-red">Beneficios</label>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div className="text-space red"></div>
                </div>
                
                <div className='flex horizontal-adjust horizontal-center horizontal-col-4'>
                {
                    Info.beneficios.map((element,index) => {
                        return(
                            <div key={index}>
                                <div style={{textAlign:"center", marginBottom: "10px"}}>
                                    <img style={{height:"200px",width:"200px",borderRadius:"50%"}} src={element.img}></img>
                                </div>
                                <div style={{textAlign:"center"}}>
                                    <p className="text-content-bold text-red">{element.titulo}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            <div id='LotePromociones' className='space-container'>
                <div className='text-title' style={{textAlign:"center"}}>
                    <label className="text-white">¡Promociones!</label>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div className="text-space white"></div>
                </div>
                <Carousel images={Info.promociones}/>
            </div>

            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            <div id='LoteUbicacion' className='space-container'>
            <div className='text-title' style={{textAlign:"center"}}> 
                    <label className="text-red">Ubicación</label>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div className="text-space red"></div>
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

export default LoteInfo;