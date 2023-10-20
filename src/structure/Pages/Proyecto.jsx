import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faRulerVertical} from '@fortawesome/free-solid-svg-icons';
import Carousel from "../../components/Carousel";
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Proyecto(props){

    const { Data } = props;
    const { id } = useParams();
    const proyecto = Data.proyectos.find(pry => pry.id === parseInt(id));
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [images, setImages] = useState();
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
            <div className='ProyectoBanner'>
                <Carousel images={proyecto.informacion.banners}/>
            </div>

            <div id="ProyectoInformacion" className='space-container'>
                <div style={{textAlign:"center"}}> 
                    <label className='text-title text-red'>
                        {proyecto.informacion.titulo}
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div className="text-space red"></div>
                </div>
                <div className='card'>
                    <div className='card-item'>
                        <label className='text-content'>ESTADO</label>
                        <div>
                            <label className='text-content-bold' style={{fontSize:'1.5rem'}}>
                                {proyecto.informacion.estado}
                            </label>
                        </div>
                    </div>
                    <div className='card-item'>
                        <label className='text-content'>DESDE</label>
                        <div className='text-content-bold' style={{fontSize:'1.5rem'}}>
                            {proyecto.inicio.precio}
                        </div>
                    </div>
                    <div className='card-item'>
                        <label className='text-content'>AREA</label>
                        <div className='text-content-bold' style={{fontSize:'1.5rem'}}>
                            <FontAwesomeIcon icon={faRulerVertical} style={{paddingRight:"5%"}} />
                            {proyecto.inicio.area}
                        </div>
                    </div>
                    <div className='card-item'>
                        <label className='text-content'>DORMITORIOS</label>
                        <div className='text-content-bold' style={{fontSize:'1.5rem'}}>
                            <FontAwesomeIcon icon={faBed} style={{paddingRight:"5%"}} />
                            {proyecto.inicio.dormitorios}
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="ProyectoDescripcion" className='space-container'>
                <div className='horizontal-col-2'>
                    <div>
                        <img src={proyecto.informacion.logo} style={{objectFit:'cover', width:'100%', height: '100%'}}/>
                    </div>
                    <div>
                        <p className='text-title'>{proyecto.informacion.titulo}</p>
                        <p className='text-content'>{proyecto.informacion.descripcion}</p>
                        <label className='text-content-bold'>Ubicación: </label><label>{proyecto.informacion.departamento} - {proyecto.informacion.distrito} - {proyecto.informacion.provincia}</label>
                    </div>
                </div>
            </div>
            {AreasComunes(proyecto)}
            {Departamentos(proyecto,setModalIsOpen,setImages)}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                >
                    <Carousel images={images}></Carousel>
            </Modal>
            
            <div id="ProyectoUbicacion" className='space-container'>
                <div style={{textAlign:"center"}}> 
                    <label className='text-title text-red'>
                        Ubicación
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div className="text-space red"></div>
                </div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.5885753652738!2d-77.07572628754102!3d-12.068821544332323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c915ab65b3f5%3A0xf52c0690fb3f1b33!2sAv.%20Mariano%20H.%20Cornejo%202256%2C%20Lima%2015088!5e0!3m2!1ses-419!2spe!4v1686710019002!5m2!1ses-419!2spe" 
                    height='300'
                    width='100%'
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

function AreasComunes(proyecto){
    if(proyecto.areascomunes.length > 0){
        return(
            <div className='space-container'>
                <div style={{textAlign:"center"}}> 
                    <label className='text-title text-red'>Áreas comunes</label>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div className="text-space red"></div>
                </div>

                <div className='flex horizontal-adjust horizontal-center horizontal-col-4'>
                    {
                        proyecto.areascomunes.map((element,index) => {
                            return(
                                <div key={index} style={{textAlign: 'center'}}>
                                    <img src={element.img} style={{width:'100%',height:'250px'}}/>
                                    <label>{element.titulo}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
function Departamentos(proyecto, setModalIsOpen, setImages){
    if(proyecto.departamentos.length > 0){
        return(
            <div id="ProyectoDepartamentos" className='space-container'>
                <div style={{textAlign:"center"}}> 
                    <label className='text-title text-red'>Departamentos</label>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div className="text-space red"></div>
                </div>

                <table>
                    <thead>
                        <tr className='text-content-bold text-white'>
                            <th>IMAGENES</th>
                            <th>PISO</th>
                            <th>DORMITORIOS</th>
                            <th>AREA</th>
                            <th>PRECIO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        proyecto.departamentos.map((element,index) => {
                            return(
                                <tr key={index}>
                                    <td>
                                        <button className='btn black text-white'
                                        onClick={()=>{ setImages(element.galeria), setModalIsOpen(true)}}>
                                            VER
                                        </button>
                                    </td>
                                    <td>{element.piso}</td>
                                    <td>{element.dormitorios} - {element.baños}</td>
                                    <td>{element.area}</td>
                                    <td>{element.precio}</td>
                                    <td><button className='btn red'><label className='text-white'>COTIZAR</label></button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Proyecto;