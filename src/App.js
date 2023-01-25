import './App.css';
import video from './food.mp4';
import { useEffect, useState } from 'react';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const MY_ID = 'be1e6b13';
  const MY_KEY = '45f6a9ea24ba36f21ef3ad2fe5bc9908';

const [mySearch, setMySearch] = useState('');
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState('orange');

const myRecipeSearch = (e) => {
  setMySearch(e.target.value);
}

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}

  useEffect( () => {
    async function fetchData() {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
  }
    fetchData(); 
}, [wordSubmitted])

  return(
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video}  type="video/mp4"/>
        </video>
        <h1>Find a Recipe</h1>
      </div>
    
      <div className="container">
        <form onSubmit = {finalSearch}>
          <input className="search" placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
        </form>
        <button onClick={finalSearch}>
          <img src="https://img.icons8.com/color/344/fry.png" width="30px" alt="icon"/>
        </button>
    </div>

    {myRecipes.map(element => (
      <MyRecipesComponent key ={element.recipe.url} 
      label={element.recipe.label}
      cuisine={element.recipe.cuisineType}
      image={element.recipe.image} 
      calories={element.recipe.calories} 
      ingredients={element.recipe.ingredientLines}/>
      ))}

    </div>
    
  );
}

export default App;
