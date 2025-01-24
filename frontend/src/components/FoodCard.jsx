import React from 'react';
import './FoodCard.css';

const FoodCard = ({ food }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{food.label}</h3>
        {food.image ? (
          <img src={food.image} alt={food.label} className="card-image" />
        ) : (
          <div className="default-image">No Image</div>
        )}
        <ul className="card-nutrients">
          <li>Calories: {food.nutrients.ENERC_KCAL} kcal</li>
          <li>Protein: {food.nutrients.PROCNT} g</li>
          <li>Fat: {food.nutrients.FAT} g</li>
          <li>Carbohydrates: {food.nutrients.CHOCDF} g</li>
          <li>Fiber: {food.nutrients.FIBTG} g</li>
        </ul>
      </div>
    </div>
  );
};

export default FoodCard;