import Carousel from "../../components/Carousel";

function Inicio(props){
    const {Data} = props;

    return(
        <div>
          <section id='InicioBanner' className="sombra">
            <Carousel images={Data.InicioBanner}/>
          </section>
{/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <section id='InicioProyectos' className="flex horizontal-center">
            <div className='space-container'>
              <div className='text-principal-bold text-size-1 text-center sombra'>
                <label className="text-black">NUESTROS </label>
                <label className="text-red">PROYECTOS</label>
              </div>
              <div className="line-decorate sombra">
                <div className="red"></div>
              </div>
              <div className='flex row-direction horizontal-center horizontal-col-2 gap-20px'>
                {
                  Data.InicioProyectos.map((element,index) => {
                    return(
                      <div key={index} className="text-center">
                        <a className="text-center sombra" href="/proyectos">
                          <img src={element.img}></img>
                        </a>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
{/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <div id='InicioEquipo' className="flex horizontal-center">
            <div className='space-container'>
              <div className='text-principal-bold text-size-1 text-center sombra'>
                <label className="text-black">NUESTRO </label>
                <label className="text-red">EQUIPO</label>
              </div>
              <div className="line-decorate sombra">
                <div className="red"></div>
              </div>
              <div className="text-center">
                <label className="text-principal-regular text-black text-size-2">Conoce el equipo de ventas, que se encarga de brindarte el mejor servicio y asesorías para que puedas agilizar el proceso y papeleos para la obtención de tu lote.</label>
              </div>
              <br/>
              <br/>
              <img className="sombra" src={Data.InicioEquipo.img}/>
            </div>
          </div>
{/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <div id='InicioTestimonios' className="flex horizontal-center">
            <div className='space-container'>
                <div className="flex horizontal-col-2 gap-2em">
                  <div className="sombra text-center carousel">
                    <Carousel images={Data.InicioTestimonios}/>
                  </div>
                  <div className="flex column-direction">
                    <div className='text-principal-bold text-size-1 text-center sombra'>
                      <label className="text-white">NUESTROS TESTIMONIOS</label>
                    </div>
                    <div className="line-decorate sombra">
                      <div className="white"></div>
                    </div>
                    <label className="text-principal-regular text-white text-size-2">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae incidunt eaque voluptates sapiente quis quae fugit libero odio quo ducimus quisquam porro quia ullam ipsam dolorum, dolore tempore ipsa. Officiis?
                    </label>
                  </div>
                </div>
            </div>
          </div>
{/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          <div id='InicioContactos' className="flex horizontal-center">
            <div className='space-container'>
              <div className='text-principal-bold text-size-1 text-center sombra'>
                <label className="text-black">NUESTROS </label>
                <label className="text-red">CONTACTOS </label>
              </div>
              <div className="line-decorate sombra">
                <div className="red"></div>
              </div>
              <div className='flex row-direction horizontal-center horizontal-col-3 gap-2em'>
                <div className='text-red text-center'>
                  <i className="fa-solid fa-phone text-size-1 sombra fa-beat"/>
                  <p className="text-red text-secundario-bold text-size-3 sombra">CONTÁCTANOS</p>
                  <div className="text-black text-secundario-regular text-size-3">Teléfono: {Data.InicioContactos.telefono}</div>
                </div>
                <div className='text-red text-center'>
                  <i className="fa-solid fa-envelope text-size-1 sombra fa-beat"/>
                  <p className="text-red text-secundario-bold text-size-3 sombra">ESCRÍBENOS</p>
                  <div className="text-black text-secundario-regular text-size-3">{Data.InicioContactos.correo}</div>
                </div>
                <div className='text-red text-center'>
                  <i className="fa-solid fa-map text-size-1 sombra fa-beat"/>
                  <p className="text-red text-secundario-bold text-size-3 sombra">UBICACIÓN</p>
                  <div className="text-black text-secundario-regular text-size-3">{Data.InicioContactos.direccion}</div>
                </div>
              </div>
            </div>
          </div>
{/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
        </div>
    )
}

export default Inicio;