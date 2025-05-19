import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MealInfo = () => {
  const {mealId} = useParams();
  const [info,setInfo]=useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const recipe = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const jsonData = await recipe.json();
        if (jsonData.meals) {
          setInfo(jsonData.meals[0]);
        } else {
          setInfo(null); 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getRecipe();
  }, [mealId]); 
  return (
    <>
      {
        !info ? "Data Not Found" :
          <div className='mealInfo'>
            <img src={info.strMealThumb} alt={info.strMealThumb}/>
            <div className='info'>
              <h1>Recipe Detail</h1>
              <button>{info.strMeal}</button>
              <h3>Instructions</h3>
              <p>{info.strInstructions}</p>
            </div>
          </div>
      }
    </>
    
    
  );
}

export default MealInfo;
