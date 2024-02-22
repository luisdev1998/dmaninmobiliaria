import Carousel from "../../components/Carousel";

function Inicio(props) {
  const { Data } = props;

  return (
    <div>
      <section id="InicioBanner" className="sombra">
        <Carousel images={Data.InicioBanner} />
      </section>
      {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
      <section id="InicioProyectos" className="flex horizontal-center">
        <div className="space-container">
          <div className="text-principal-bold text-size-1 text-center sombra">
            <label className="text-black">NUESTROS </label>
            <label className="text-red">PROYECTOS</label>
          </div>
          <div className="line-decorate sombra">
            <div className="red"></div>
          </div>
          <div className="flex row-direction horizontal-center horizontal-col-2 gap-20px">
            {Data.InicioProyectos.map((element, index) => {
              return (
                <div key={index} className="text-center">
                  <a
                    className="text-center sombra"
                    href={"/proyectos/" + element.id}
                  >
                    <img src={element.img}></img>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
      <section id="InicioPromocion" className="flex horizontal-center">
        <div className="space-container">
          <div className="text-principal-bold text-size-1 text-center sombra">
            <div className="text-black">¡APROVECHA </div>
            <div className="text-red">35% DESCUENTO!</div>
          </div>
          <div className="line-decorate sombra">
            <div className="red"></div>
          </div>
          <div className="flex horizontal-col-2 gap-2em">
            <div className="text-center">
              <img
                src="/Inicio/Descuento.jpg"
                className="card sombra"
                style={{ width: "100%" }}
              />
            </div>
            <div className="card red padding-1em sombra flex column-direction gap-1em">
              <div
                className="flex text-center vertical-center column-direction sombra"
                style={{ flex: 1 }}
              >
                <img src="/logo-blanco.png" style={{ maxWidth: "100px" }} />
                <label className="text-white text-size-3 text-principal-bold">
                  Si realizas una compra al contado, llévate un súper descuento
                  del 35%
                </label>
              </div>
              <video className="card sombra" style={{ width: "100%" }} controls>
                <source src="/Inicio/Video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
      <section id="InicioEquipo" className="flex horizontal-center">
        <div className="space-container">
          <div className="text-principal-bold text-size-1 text-center sombra">
            <label className="text-black">NUESTRO </label>
            <label className="text-red">EQUIPO</label>
          </div>
          <div className="line-decorate sombra">
            <div className="red"></div>
          </div>
          <div className="text-center">
            <label className="text-principal-regular text-black text-size-2">
              {Data.InicioEquipo.descripcion}
            </label>
          </div>
          <br />
          <br />
          <img className="sombra" src={Data.InicioEquipo.img} />
        </div>
      </section>
      {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
      <section id="InicioTestimonios" className="flex horizontal-center">
        <div className="space-container">
          <div className="flex horizontal-col-2 gap-2em">
            <div className="sombra text-center carousel">
              <Carousel images={Data.InicioTestimonios.fotos} />
            </div>
            <div className="flex column-direction">
              <div className="text-principal-bold text-size-1 text-center sombra">
                <label className="text-white">NUESTROS TESTIMONIOS</label>
              </div>
              <div className="line-decorate sombra">
                <div className="white"></div>
              </div>
              <label className="text-principal-regular text-white text-size-2">
                {Data.InicioTestimonios.descripcion}
              </label>
            </div>
          </div>
        </div>
      </section>
      {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
      <section id="InicioContactos" className="flex horizontal-center">
        <div className="space-container">
          <div className="text-principal-bold text-size-1 text-center sombra">
            <label className="text-black">NUESTROS </label>
            <label className="text-red">CONTACTOS </label>
          </div>
          <div className="line-decorate sombra">
            <div className="red"></div>
          </div>
          <div className="flex row-direction horizontal-center horizontal-col-3 gap-2em">
            {Data.InicioContactos.map((element, index) => {
              return (
                <div key={index} className="text-red text-center">
                  <i
                    className={
                      "fa-solid " + element.icon + " text-size-1 sombra fa-beat"
                    }
                  />
                  <p className="text-red text-secundario-bold text-size-4 sombra">
                    {element.titulo}
                  </p>
                  <div className="text-black text-secundario-bold text-size-4">
                    {element.descripcion}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
    </div>
  );
}

export default Inicio;
