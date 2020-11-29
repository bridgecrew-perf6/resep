import React, { useEffect, useState } from 'react';
import Recipe from './komponen/Recipe';
import './App.css';

const App = () => {
    const APP_ID = "6d8bf115";
    const APP_KEY = "bbb8c910fec640f25dd3f020541a0e41";

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    },[]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    };

    return(
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text"/>
                <button className="search-button" type="submit">Cari</button>
            </form>
            {recipes.map(recipe => (
                <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
            ))}
        </div>
    )
};

export default App;
