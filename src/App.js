import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe';

const App = () => {
  const APP_ID = "62a6e30e";
  const APP_KEY = "5740eab496b9b41d309f7ceb364fe011";

  const[recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);


  const getRecipes = async() =>  {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
    return ( 
    <div className = "App">
      <form className ="search-form">
        <input className = "search-bar" type = "text"/>
        <button className = "search-button"type = "submit">Search</button>
      </form>
      {recipes.map(recipe => (
       <Recipe/>
      ))}
    </div>
   );
}
 
export default App;


