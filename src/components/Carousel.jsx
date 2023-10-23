import React from 'react';
import Slider from "react-slick";

function Carousel(props) {
    const {images} = props;
    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        customPaging: i => (
            <div className='carousel'></div>
        ),
        appendDots: dots => (
          <div>
            <ul style={{marginTop: "-70px"}}> {dots} </ul>
          </div>
        )
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    {
                    image.titulo !== '' ? 
                    <div className='text-title text-center'>
                        {image.titulo}
                    </div> 
                    :
                    <div></div>
                    }
                    <img src={image.img} alt={`carousel-img-${index}`} style={{width: '100%', height: '450px'}}/>
                </div>
            ))}
        </Slider>
    );
}

export default Carousel;
