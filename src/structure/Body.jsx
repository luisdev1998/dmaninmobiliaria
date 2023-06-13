function Body(props){
  const {Data, Slideshow} = props;
    return(
        <div className='body'>
          <div className='container'>
          {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            <div id='Home'>
              <div className="relative flex text-center vertical-center">
                <img className="w-100-noflex" height={500} src={Data.home.img}/>
                <div className="absolute title-home">
                  <label>{Data.home.title}</label>
                </div>
              </div>
            </div>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            <div id='Projects' className='space'>
              <div className='text-center title-secondary'>Nuestros Proyectos</div>
              <div className='container-body flex horizontal-adjust horizontal-center horizontal-col-4'>
                {
                  Data.projects.map((element,index) => {
                    return(
                      <a className='w-100' key={index} href="www.google.com" target="_blank">
                        <div className="img-polygon">
                          <img className='img-autoadjust img-projects' src={element.img}></img>
                        </div>
                        <div className='text-center img-title-projects'>
                          <label>{element.title}</label>
                        </div>
                      </a>
                    )
                  })
                }
              </div>
            </div>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            <div id='Clients' className='space'>
              <div className='text-center title-secondary'>Nuestros clientes</div>
              <div className='container-body flex horizontal-adjust horizontal-col-2'>
                <div className='flex vertical-center'>
                  <div>
                    <div className='title-clients'>Testimonios</div>
                    <div className='description-clients'>Nuestros clientes hablan sobre nuestros proyectos porque su opinión y voz es muy importante.</div>
                  </div>
                </div>
                <div>
                  <Slideshow Clients={Data.clients} />
                </div>
              </div>
            </div>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
            <div id='Contact' className='space'>
              <div className='text-center title-secondary'>Contactanos</div>
              <div className='container-body flex horizontal-adjust horizontal-center horizontal-col-3'>
                {
                  Data.contact.map((element,index) => {
                    return(
                      <a className='w-100' key={index} href={element.link} target="_blank">
                        <div className="text-center">
                          <img className='img-autoadjust img-contact' src={element.img}></img>
                          <div className='img-title-contact'>
                            {element.title}
                          </div>
                        </div>
                      </a>
                    )
                  })
                }
              </div>
            </div>
            {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
          </div>
        </div>
    )
}

export default Body;