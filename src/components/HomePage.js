import React from 'react';
import { useState } from 'react';
import MealCards from './MealCards';
const HomePage = () => {
    const [data, setData]=useState([]);
    const [search, setSearch]=useState("");
    const [mssg,setmssg]=useState("");
    const searchValue=(e)=>{
        setSearch(e.target.value);
    }

    const searchRecipe = async () => {
        if(search===""){
            setmssg("Please Enter something");
        }
        else{
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
            setData(jsonData.meals)
            setmssg("");
        }     
    }

  return (
      <>
          <h1 className='head'>FOOD RECIPE APP</h1>
          <div className='container'>
              <div className='searchBar'>
                  <input type="text" placeholder='Search Dish' onChange={searchValue} />
                  <button onClick={searchRecipe}>Search</button>
              </div>
              <h4 className='msg'>{mssg}</h4>
              <div>
                  <MealCards detail={data} />
              </div>
          </div>
      </>
    
  );
}

export default HomePage;
