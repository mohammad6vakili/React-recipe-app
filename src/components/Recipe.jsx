import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="food">
      <h3 className="food-title">{title}</h3>
      <ol className="ingredient-list">
        {ingredients.map((ingrdient) => (
          <li>{ingrdient.text}</li>
        ))}
      </ol>
      <p className="calorie">
        <strong> Calorie :</strong> {calories}
      </p>
      <div className="image-container">
        <img className="food-image" src={image} />
      </div>
    </div>
  );
};
export default Recipe;
