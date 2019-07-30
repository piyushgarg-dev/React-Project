import React, { Component } from 'react'

class Slider extends Component {
    
    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={require('./images/slide1.jpg')} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={require('./images/slide2.jpg')} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={require('./images/slide3.jpg')} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        )
    }
}

export default Slider;