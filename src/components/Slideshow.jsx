import React from 'react';

class Slideshow extends React.Component {
    state = {
        slideIndex: 0,
    }

    plusSlides = (n) => {
        const newIndex = this.state.slideIndex + n;
        if(newIndex < 0){
            this.setState({slideIndex: this.props.Clients.length-1});
        }else if(newIndex >= this.props.Clients.length){
            this.setState({slideIndex: 0});
        }else{
            this.setState({slideIndex: newIndex});
        }
    }

    currentSlide = (n) => {
        this.setState({slideIndex: n-1});
    }

    render() {
        const currentClient = this.props.Clients[this.state.slideIndex];

        return (
            <div>
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <div className="numbertext">{this.state.slideIndex + 1} / {this.props.Clients.length}</div>
                        <img src={currentClient.img} className='img-autoadjust'/>
                        <div className='w-100 text clients-description flex horizontal-center'>{currentClient.title}</div>
                    </div>

                    <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                </div>

                <div style={{textAlign: 'center'}}>
                    {this.props.Clients.map((_, index) => 
                        <span 
                            className={`dot ${this.state.slideIndex === index ? 'active' : ''}`} 
                            onClick={() => this.currentSlide(index+1)}
                            key={index}
                        ></span>
                    )}
                </div>
            </div>
        )
    }
}

export default Slideshow;
