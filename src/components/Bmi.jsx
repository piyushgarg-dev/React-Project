import React, { Component, useState } from "react";
import PropTypes from "prop-types";

const Bmi = () => {
  const [weight, setweight] = useState("");
  const handlechange = e => {
    setweight(e.target.value);
  };
  var bmi = ''
  const handleclick = e => {
    e.preventDefault();
   bmi = 703*(weight/4900);
   console.log(bmi);
  };

  return (
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <lable for="weight">Weight</lable>
        <input
          className="form-control"
          type="text"
          value={weight}
          onChange={handlechange}
        />
        <button
          type="submit"
          class="btn btn-primary form-control mt-1"
          onClick={handleclick}
        >
          Calculate
        </button>
      </form>
      <input value={bmi}/>
    </div>
  );
};

export default Bmi;
