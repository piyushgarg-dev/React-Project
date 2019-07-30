import React from "react";
import Navbar from "./components/Navbar";
import Slider from './components/Slider';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer'
import Nutrition from './components/Nutrition';
import Bmi from './components/Bmi';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider/>
      <Hero/>
      <Nutrition/>
      <br/>
      <Bmi/>
      <About/>
      <Footer/>

    </div>
  );
}

export default App;
