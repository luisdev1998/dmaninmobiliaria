import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
import Carousel from "../../components/Carousel";

function Inicio(props){
    const {Data} = props;

    return(
        <div>
          <section id='InicioBanner'>
            <Carousel images={Data.InicioPage}/>
          </section>
{/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <section id='InicioProyectos' className='space-container'>
            <div className='text-principal-bold text-size-1 text-center sombra'>
              <label className="text-black">NUESTROS </label>
              <label className="text-red">PROYECTOS</label>
            </div>
            <div className="line-decorate sombra">
              <div className="red"></div>
            </div>
            <a style={{flex: 1}} href={"proyectos"}>
              <img style={{width:"100%",height:"400px"}} src="../../src/assets/example.jpg"></img>
            </a>
          </section>
{/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <div id='InicioServicios' className='space-container'>
            <div className='text-principal-bold text-size-1 text-center sombra'>
              <label className="text-black">NUESTROS </label>
              <label className="text-red">SERVICIOS</label>
            </div>
            <div className="line-decorate sombra">
              <div className="red"></div>
            </div>
            <div className='flex row-direction horizontal-center horizontal-col-4'>
              {
                Data.servicios.map((element,index) => {
                  return(
                    <div key={index}>
                      <div className="text-center" style={{marginBottom: "10px"}}>
                        <img style={{height:"200px",width:"200px",borderRadius:"50%"}} src={element.img}></img>
                      </div>
                      <div className="text-center">
                        <p className="text-secundario-bold text-size-3 text-red">{element.titulo}</p>
                        <label className="text-secundario-regular text-black">{element.descripcion}</label>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
{/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <div id='InicioTestimonios' className='space-container'>
            <div className='text-principal-bold text-size-1 text-center sombra'>
              <label className="text-white">NUESTROS TESTIMONIOS</label>
            </div>
            <div className="line-decorate sombra">
              <div className="white"></div>
            </div>
            <Carousel images={Data.testimonios}/>
          </div>
{/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <div id='InicioContactos' className='space-container'>
            <div className='text-principal-bold text-size-1 text-center sombra'>
              <label className="text-black">NUESTROS </label>
              <label className="text-red">CONTACTOS </label>
            </div>
            <div className="line-decorate sombra">
              <div className="red"></div>
            </div>
            <div className='flex row-direction horizontal-center horizontal-col-3'>
              <div className='text-red text-center'>
                <FontAwesomeIcon icon={faPhone} className="text-size-1" beat/>
                <p className="text-red text-secundario-bold text-size-3">CONTÁCTANOS</p>
                <div className="text-black text-secundario-regular text-size-4">Teléfono: +51 999999999</div>
              </div>
              <div className='text-red text-center'>
                <FontAwesomeIcon icon={faEnvelope} className="text-size-1" beat/>
                <p className="text-red text-secundario-bold text-size-3">ESCRÍBENOS</p>
                <div className="text-black text-secundario-regular text-size-4">ejemplo@gmail.com</div>
              </div>
              <div className='text-red text-center'>
                <FontAwesomeIcon icon={faMap} className="text-size-1" beat/>
                <p className="text-red text-secundario-bold text-size-3">UBICACIÓN</p>
                <div className="text-black text-secundario-regular text-size-4">Avenida ejemplo, chiclayo</div>
              </div>
            </div>
          </div>
{/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
        </div>
    )
}

export default Inicio;