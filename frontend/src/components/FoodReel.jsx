import React from 'react';
import FoodCard from './FoodCard';
import './FoodReel.css';

const FoodReel = ({ foods }) => {
  return (
    <div className="reel">
      {foods.map((food) => (
        <FoodCard key={food.foodId} food={food} />
      ))}
    </div>
  );
};

export default FoodReel;