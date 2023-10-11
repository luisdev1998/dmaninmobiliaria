import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faRulerVertical, faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Carousel from "../../components/Carousel";

function Inicio(props){
    const {Data} = props;

    return(
        <div>
          <div id='Home'>
            <Carousel images={Data.inicio}/>
          </div>
          {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <div id='Proyectos' className='space-container'>
            <div className='text-title' style={{textAlign:"center"}}> 
              <label className="text-black">Nuestros </label>
              <label className="text-red">Proyectos</label>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
              <div className="text-space red"></div>
            </div>

            <div className='flex horizontal-adjust horizontal-center horizontal-col-4'>
              {
                Data.proyectos.map((element,index) => {
                  if(element.informacion.habilitado && element.informacion.mostrarInicio){
                    return(
                      <a style={{flex: 1}} key={index} href={"lotes"}>
                        <img style={{width:"100%",height:"400px"}} src={element.inicio.img}></img>
                        {/* <div>
                          <div className="proyecto-estado" style={{position:"absolute"}}>
                            <label className="text-white">{element.informacion.estado}</label>
                          </div>
                          <img style={{width:"100%",height:"300px"}} src={element.inicio.img}></img>
                        </div>
                        <div style={{border:"0.5px solid #ababab", padding:"10px", background: "white"}}>
                          <div className='text-content-bold text-red' style={{textAlign: "center", marginBottom:"10px"}}>
                            <label>{element.inicio.titulo}</label>
                          </div>
                          <div className='text-content text-black' style={{textAlign: "center", marginBottom:"10px"}}>
                            <label>{element.inicio.departamento}</label>
                          </div>
                          <div className='text-content text-black' style={{textAlign: "center", marginBottom:"10px"}}>
                            <FontAwesomeIcon icon={faRulerVertical} style={{fontSize: 15}} />
                            <label> {element.inicio.area}</label>
                            <label> - </label>
                            <FontAwesomeIcon icon={faBed} style={{fontSize: 15}} />
                            <label> {element.inicio.dormitorios}</label>
                          </div>
                          <div className='text-black' style={{textAlign: "center", marginBottom:"10px"}}>
                            <label>Desde: </label> <label className="text-content-bold">{element.inicio.precio}</label>
                          </div>
                          <div>
                            <div className='btn red' style={{textAlign: "center"}}>Ver proyecto</div>
                          </div>
                        </div> */}
                      </a>
                    )
                  }
                })
              }
            </div>
          </div>
          {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <div id='Servicios' className='space-container'>
            <div className='text-title' style={{textAlign:"center"}}> 
              <label className="text-title text-black">Nuestros </label>
              <label className="text-red">Servicios</label>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
              <div className="text-space red"></div>
            </div>
            <div className='flex horizontal-adjust horizontal-center horizontal-col-4'>
              {
                Data.servicios.map((element,index) => {
                  return(
                    <div key={index}>
                      <div style={{textAlign:"center", marginBottom: "10px"}}>
                        <img style={{height:"200px",width:"200px",borderRadius:"50%"}} src={element.img}></img>
                      </div>
                      <div style={{textAlign:"center"}}>
                        <p className="text-content-bold text-red">{element.titulo}</p>
                        <label className="text-content text-black">{element.descripcion}</label>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <div id='Testimonios' className='space-container'>
            <div className='text-title' style={{textAlign:"center"}}>
              <label className="text-white">Nuestros Testimonios</label>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
              <div className="text-space white"></div>
            </div>
            <Carousel images={Data.testimonios}/>
          </div>
          {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <div id='Contactos' className='space-container'>
            <div className='text-title' style={{textAlign:"center"}}> 
              <label className="text-title text-black">Nuestros </label>
              <label className="text-red">Contactos </label>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
              <div className="text-space red"></div>
            </div>
            <div className='flex horizontal-adjust horizontal-center horizontal-col-3'>
              <div className='text-red' style={{textAlign:"center"}}>
                <FontAwesomeIcon icon={faPhone} style={{fontSize: 55}} beat/>
                <p className="text-red text-bold">Contáctanos</p>
                <div className="text-black">Teléfono: +51 999999999</div>
              </div>
              <div className='text-red' style={{textAlign:"center"}}>
                <FontAwesomeIcon icon={faEnvelope} style={{fontSize: 55}} beat/>
                <p className="text-red text-bold">Escríbemos</p>
                <div className="text-black">ejemplo@gmail.com</div>
              </div>
              <div className='text-red' style={{textAlign:"center"}}>
                <FontAwesomeIcon icon={faMap} style={{fontSize: 55}} beat/>
                <p className="text-red text-bold">Ubicación</p>
                <div className="text-black">Avenida ejemplo, chiclayo</div>
              </div>
            </div>
          </div>
          {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <div id='Redes' className='space-container'>
            <div className='text-title' style={{textAlign:"center"}}>
              <label className="text-white">Nuestras Redes</label>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
              <div className="text-space white"></div>
            </div>
            <div className='text-white' style={{textAlign: "center"}}>
                <a style={{textAlign: "center"}} target="_blank" href="#">
                  <FontAwesomeIcon icon={faFacebook} style={{fontSize: 60, paddingRight:"5%"}} />
                </a>
                <a style={{textAlign: "center"}} target="_blank" href="#">
                  <FontAwesomeIcon icon={faYoutube} style={{fontSize: 60, paddingRight:"5%"}} />
                </a>
                <a style={{textAlign: "center"}} target="_blank" href="#">
                  <FontAwesomeIcon icon={faLinkedin} style={{fontSize: 60}} />
                </a>
            </div>
          </div>
          {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <a id="Whatsapp" 
          href=""
          style={{position: "fixed",bottom: "0", right:"0"}}>
            <img 
            width={150}
            height={150}
            src="https://static.vecteezy.com/system/resources/thumbnails/024/273/818/small/whatsapp-logo-free-png.png" className="bounce"/>
          </a>

        </div>
    )
}

export default Inicio;