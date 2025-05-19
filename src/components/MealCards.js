import React from 'react';
import { NavLink } from 'react-router-dom';

const MealCards = ({detail}) => {
  return (
    <div className='meals'>
        {!detail ? "" : detail.map((curItem, id)=>{
            return (
                <div className='mealImg' key={curItem.idMeal}>
                    <img src={curItem.strMealThumb} alt={curItem}/>
                    <p>{curItem.strMeal}</p>
                    {/* <NavLink to={`/${curItem.idMeal}`}><button>Recipe</button></NavLink>   */}
                    <NavLink to={`/meal/${curItem.idMeal}`}>
                        <button>Recipe</button>
                    </NavLink>  
                </div>
            )
        })}
    </div>
  );
}

export default MealCards;
