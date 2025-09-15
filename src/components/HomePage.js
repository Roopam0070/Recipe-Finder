import React from 'react';
import { useState } from 'react';
import MealCards from './MealCards';
const HomePage = () => {
    const [data, setData]=useState([]);
    const [search, setSearch]=useState("");
    const [mssg,setmssg]=useState("");
    const [loading, setLoading] = useState(false);

    const searchValue=(e)=>{
        setSearch(e.target.value);
    }

    const searchRecipe = async () => {
        setLoading(true);          // start loading
        setmssg("Fetching data..."); 
        if(search===""){
            setmssg("Please Enter something");
            setData([])
        }
        else{
            try {
                const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
                const jsonData = await get.json();
                setData(jsonData.meals)
                setmssg("");
            } catch (error) {
                setmssg("Something went wrong!");
            }
            finally {
                setLoading(false);       // stop loading in all cases
            }
        }     
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          searchRecipe();
        }
      };

  return (
      <>
          <h1 className='head'>RECIPE FINDER</h1>
          <div className='container'>
              <div className='searchBar'>
                  <input type="text" placeholder='Search Dish' onChange={searchValue} onKeyDown={handleKeyDown} />
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
