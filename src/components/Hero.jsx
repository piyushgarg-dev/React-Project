import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div class="mt-2">
       <h3 className="alert alert-success">Work Out Videos</h3>
       {/* <div class="embed-responsive embed-responsive-16by9">
       <iframe width="966" height="543" src="https://www.youtube.com/embed/UBMk30rjy0o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="embed-responsive embed-responsive-16by9 mt-2">
      <iframe width="966" height="543" src="https://www.youtube.com/embed/LUrrN6cEBRQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> */}

      <div className="row">
      <div class="col-sm">
      <div class="embed-responsive embed-responsive-16by9">
       <iframe width="966" height="543" src="https://www.youtube.com/embed/UBMk30rjy0o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-sm">
    <div class="embed-responsive embed-responsive-16by9 mt-2">
      <iframe width="966" height="543" src="https://www.youtube.com/embed/LUrrN6cEBRQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> 
    </div>
    <div class="col-sm">
    <div class="embed-responsive embed-responsive-16by9 mt-2">
    <iframe width="966" height="543" src="https://www.youtube.com/embed/3p8EBPVZ2Iw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
      </div>

      <div className="row">
      <div class="col-sm">
      <div class="embed-responsive embed-responsive-16by9">
      <iframe width="932" height="524" src="https://www.youtube.com/embed/JVwH-JsiwNI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-sm">
    <div class="embed-responsive embed-responsive-16by9 mt-2">
    <iframe width="932" height="524" src="https://www.youtube.com/embed/te0S_UKuDHI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> 
    </div>
    <div class="col-sm">
    <div class="embed-responsive embed-responsive-16by9 mt-2">
    <iframe width="966" height="543" src="https://www.youtube.com/embed/JVwH-JsiwNI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
      </div>




      </div>

    );
  }
}
export default Hero;
