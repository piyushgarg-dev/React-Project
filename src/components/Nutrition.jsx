import React, { Component, useState } from "react";
import Ncard from './Ncard';

const Nutrition =()=>  {
  
 const  appid = "fbd6ed1a";
  const applicationkey = "fac350959c2b42f3cb4df42b33b5ae27	—";
  const [data,setdata] = useState([]);
  const [query,setquery] = useState('');
  
 
 
  const handleinput = e => {
    setquery(e.target.value );
  };

  const handelclick = e => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${
        appid
      }&app_key=${applicationkey}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setdata(data.hits)
       
      });
  };

  
    return (
      <div className="container">
        <h1>Nutrition Search</h1>
        <form>
          <input
            className="form-control"
            type="text"
            onChange={handleinput}
            value={query}
            placeholder='Example: Banana'
          />
          <button
            onClick={handelclick}
            type="submit"
            className="btn btn-success form-control mt-1"
          >
            Search
          </button>
        </form>

        <div>
       {
         data.map(mydata=>(
           <Ncard food={mydata.recipe}/>
         ))
       }
        </div>

        
      </div>
    );
  
}

export default Nutrition;
