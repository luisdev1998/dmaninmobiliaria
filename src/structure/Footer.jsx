
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
      <>
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
        <div className='footer'>
          <div className='container space-header-footer' style={{alignItems:"center", textAlign:"center"}}>
            <div>Created by <a href='https://www.linkedin.com/in/luissancheztapia98/' target='_blank'>Dman</a> | 2023 Copyright © All Rights Reserved</div>
          </div>
        </div>
      </>
    )
}

export default Footer;