
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
      <>
        <div id='FooterRedes' className='space-container'>
            <div className='text-principal-bold text-size-1 text-center sombra'>
              <label className="text-white">NUESTRAS </label>
              <label className="text-white">REDES </label>
            </div>
            <div className="line-decorate sombra">
              <div className="white"></div>
            </div>
            <div className='text-white text-center'>
                <a target="_blank" href="#">
                  <FontAwesomeIcon icon={faFacebook} className="text-size-1" style={{paddingRight:"5%"}}/>
                </a>
                <a target="_blank" href="#">
                  <FontAwesomeIcon icon={faYoutube} className="text-size-1" style={{paddingRight:"5%"}}/>
                </a>
                <a target="_blank" href="#">
                  <FontAwesomeIcon icon={faLinkedin} className="text-size-1"/>
                </a>
            </div>
          </div>
          <div id='FooterCreditos' className="text-white text-center">
            <div>Created by <a href='https://www.linkedin.com/in/luissancheztapia98/' target='_blank'>Dman</a> | 2023 Copyright © All Rights Reserved</div>
          </div>
      </>
    )
}

export default Footer;