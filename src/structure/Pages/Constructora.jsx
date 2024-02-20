function Constructora(props) {
  const { Data } = props;
  const Info = Data.Constructora;
  return (
    <>
      <section
        id="ConstructoraBanner"
        className="flex horizontal-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(" +
            Info.banner +
            ")",
        }}
      >
        <div className="space-container">
          <div className="flex horizontal-col-2 gap-10px">
            <div className="flex vertical-center">
              <label className="text-principal-bold text-white sombra text-size-1">
                {Info.titulo}
              </label>
            </div>
            <video className="card sombra" style={{ width: "100%" }} controls>
              <source src={Info.video} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
      <section id="ConstructoraAcerca" className="flex horizontal-center">
        <div className="space-container">
          <div className="text-principal-bold text-size-1 text-center sombra">
            <label className="text-black">NOSOTROS</label>
          </div>
          <div className="line-decorate sombra">
            <div className="red"></div>
          </div>
          <div className="text-center">
            <img src="/logo.png" style={{ maxWidth: "300px" }} />
            <div className="text-center">
              <p className="text-principal-regular text-size-3">
                {Info.descripcion}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
      <section id="ConstructoraMapa" className="flex horizontal-center">
        <div className="space-container">
          <div className="text-principal-bold text-size-1 text-center sombra">
            <label className="text-red">UBÍCANOS</label>
          </div>
          <div className="line-decorate sombra">
            <div className="red"></div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1665.7690341452753!2d-79.84349049300911!3d-6.78338828452125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef3aeab86b19%3A0x9acc80b8cb96b70!2sLas%20Acacias%20292%2C%20Chiclayo%2014008!5e0!3m2!1ses-419!2spe!4v1708451515170!5m2!1ses-419!2spe"
            height="450"
            style={{ border: "0", width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Constructora;
