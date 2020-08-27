import React, { useEffect, useState } from 'react';
import Recpie from './Recpie';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  const app_id = "4cbcc66c"
  const app_key = "2d23f715391e93d40d78a3fb5377e030"
  const [recpie, setRecpie] = useState([]);
  const [searchQuery, query] = useState("");
  const [getQuery, setQuery] = useState('momo');

  useEffect(() => {
    searchRecpie();
  },[getQuery]);
  const searchRecpie = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${getQuery}&app_id=${app_id}&app_key=${app_key}`)
    const data = await response.json();
    console.log(data.hits);
    setRecpie(data.hits);
  }
  const onSearch = e => {
    query(e.target.value)

  }
  const stopSubmit = e => {
    e.preventDefault();
    setQuery(searchQuery);
    query('')
  }
  const reload=()=>{
    window.location.reload();
  }
  return (
    <div className="App">
      <form className="form" onSubmit={stopSubmit}>
        <div className="logo" title="Reload" onClick={reload}>
          <img src="recipe.jpg" alt=""></img>
        </div>
        <input className="inputField" type="text" name="recipe" value={searchQuery} placeholder="Search Food Recipe" onChange={onSearch}></input>
        <button classsName="submitButton" type="submit" value="Search">Search</button>
      </form>
      <div className="container w-100">
        {recpie.map((recpies,index) => (
          <Recpie
            key={recpies.recipe}
            ids={index}
            title={recpies.recipe.label}
            calories={recpies.recipe.calories}
            images={recpies.recipe.image}
            ingredients={recpies.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}
export default App;