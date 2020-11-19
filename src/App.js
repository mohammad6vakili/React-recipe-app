import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

const App = () => {
  const APP_ID = "cdb3958b";
  const APP_KEY = "cf35063e296977468319166c84c03b03";

  const [Recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button btn" type="submit">
          Search
        </button>
      </form>
      <p className="search-describe">
        Type the keyword of your food and click the search button to filter your
        food<br/><strong>Developed by MohammadAli Vakilidoost</strong>
      </p>
      <div id="food-container" className="row">
        {Recipes.map((recipe) => (
          <Recipe
            className="food col-4"
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
