function Footer(props){
  const {Data} = props;
  return(
    <>
      <section id='FooterRedes' className="flex horizontal-center">
        <div className='space-container'>
          <div className='text-principal-bold text-size-1 text-center sombra'>
            <label className="text-white">NUESTRAS </label>
            <label className="text-white">REDES </label>
          </div>
          <div className="line-decorate sombra">
            <div className="white"></div>
          </div>
          <div className='redes text-white flex horizontal-center gap-3em vertical-center'>
            {
              Data.FooterRedes.map((element,index) => {
                return(
                  <a key={index} target="_blank" href={element.url}>
                    <i className={"fa-brands "+element.icon+" text-size-1 sombra"}/>
                  </a>
                )
              })
            }
          </div>
        </div>
      </section>
      <section id='FooterCreditos' className="text-white text-center">
        <div>Created by Dman | 2023 Copyright © All Rights Reserved</div>
      </section>
    </>
  )
}

export default Footer;