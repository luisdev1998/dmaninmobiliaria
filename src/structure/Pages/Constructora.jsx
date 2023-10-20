import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const defaultCenter = {
    lat: 41.3851, lng: 2.1734
}
function Constructora(){
    return(
        <div className=''>
            <div className='banner1 flex horizontal-center'>
                <div className='w-100 flex vertical-center'>
                    <h1>Construimos tu casa soñada para tu familia</h1>
                </div>
                <div className='w-100 flex'>
                    <video className="w-100" controls>
                        <source src="/path/to/your/video.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className='banner2'>
                <div className="text-center">
                    <h1 className=''>Promoción Ideal</h1>
                </div>
            </div>
            <div className='servicios'>
                <div className="container space">
                    <div className="text-center">
                        <h1>Nuestros servicios</h1>
                        <p>Te ofrecen todo de manera integra</p>
                    </div>
                    <div className="flex horizontal-adjust horizontal-col-3">
                        <div className="servicios-card w-100">
                            <div>
                                <h1>Gestión de la construcción</h1>
                            </div>
                            <div>
                                <img
                                    className="img-autoadjust"
                                    src='https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
                                />
                            </div>
                        </div>
                        <div className="servicios-card w-100">
                            <div>
                                <h1>Desarrollo</h1>
                            </div>
                            <div>
                                <img
                                    className="img-autoadjust"
                                    src='https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
                                />
                            </div>
                        </div>
                        <div className="servicios-card w-100">
                            <div>
                                <h1>Diseño interior</h1>
                            </div>
                            <div>
                                <img
                                    className="img-autoadjust"
                                    src='https://static.wixstatic.com/media/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg/v1/fill/w_1016,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_89c38a26ca684fc8ad383d2a53b31a22~mv2.jpg'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mapa">
                <div className="container space">
                    <div className="flex horizontal-adjust horizontal-col-2">
                        <div className="w-100">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.5885753652738!2d-77.07572628754102!3d-12.068821544332323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c915ab65b3f5%3A0xf52c0690fb3f1b33!2sAv.%20Mariano%20H.%20Cornejo%202256%2C%20Lima%2015088!5e0!3m2!1ses-419!2spe!4v1686710019002!5m2!1ses-419!2spe" 
                            className='w-100-noflex'
                            height='300'
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        </div>
                        <div className="w-100 flex vertical-center">
                            <div className='map-description'>
                                <div><h1>Ubicación de Local Principal</h1></div>
                                <div><h1>Contáctanos por este medio</h1></div>
                                <div className='w-100 text-center'>
                                    <button className='btn-whatsapp' onClick={() => window.open('https://www.google.com', '_blank')}>
                                        Contáctanos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Constructora;