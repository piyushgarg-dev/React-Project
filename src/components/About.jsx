import React, { Component } from 'react'


class About extends Component {
    

    render() {
        return (
            <div className="container">
                
                <section class="team-section text-center my-5">
                <h2 class="h1-responsive font-weight-bold my-5">Our Amazing Team</h2>
                <div class="row">
                <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                <div class="avatar mx-auto">
                <img src={require('./images/piyush.jpeg')} class="rounded-circle teamimg z-depth-1"
                alt="Sample avatar"/>
                <h5 class="font-weight-bold mt-4 mb-3">Piyush Garg</h5>
                </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                <div class="avatar mx-auto">
                <img src={require('./images/sarthak.jpeg')} class="rounded-circle teamimg z-depth-1"
                alt="Sample avatar"/>
                <h5 class="font-weight-bold mt-4 mb-3">Sarthak</h5>
                </div>
                </div>
                </div>
                </section>
            </div>
        )
    }
}

export default About