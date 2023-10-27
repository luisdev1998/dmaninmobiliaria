function Footer(){
    return(
      <>
        <div id='FooterRedes' className="flex horizontal-center">
          <div className='space-container'>
            <div className='text-principal-bold text-size-1 text-center sombra'>
              <label className="text-white">NUESTRAS </label>
              <label className="text-white">REDES </label>
            </div>
            <div className="line-decorate sombra">
              <div className="white"></div>
            </div>
            <div className='text-white flex horizontal-center gap-3em'>
                <a target="_blank" href="#">
                  <i className="fa-brands fa-facebook text-size-1 sombra"/>
                </a>
                <a target="_blank" href="#">
                  <i className="fa-brands fa-youtube text-size-1 sombra"/>
                </a>
                <a target="_blank" href="#">
                  <i className="fa-brands fa-linkedin text-size-1 sombra"/>
                </a>
            </div>
          </div>
        </div>
        <div id='FooterCreditos' className="text-white text-center">
          <div>Created by <a href='https://www.linkedin.com/in/luissancheztapia98/' target='_blank'>Dman</a> | 2023 Copyright © All Rights Reserved</div>
        </div>
      </>
    )
}

export default Footer;