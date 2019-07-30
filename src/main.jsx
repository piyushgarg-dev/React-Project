import React, { Component } from 'react'
import {Router, Route} from 'react-router';
import App from './App';

class main extends Component{
    render() {
        return (
            <div>
                <Router>
                    <Route path={"/home"} component={App}/>
                </Router>
            </div>
        )
        }
}
export default main;