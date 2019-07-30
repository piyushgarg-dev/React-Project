import React, { Component } from 'react'


class Ncard extends Component {
   
    render() {
        return (
            <div className="card" >
              <img className="card-img-top" src={this.props.food.image}/>
              <div className="card-body">
              <h3 className="card-title">{this.props.food.calories}</h3>
              <h3 className="card-title">{this.props.food.dietLabels}</h3>
              <h3 className="card-text">{this.props.food.healthLabels}</h3>
              </div>
            </div>
        )
    }
}

export default Ncard;