import React from "react";
import './App.css';

const Recpie = ({ title, images, ingredients, ids }) => {
    function showRecipe(id) {
        var showItems = document.getElementById("list" + id);
            if (showItems.style.display === "block") {
                showItems.style.display = "none";
            }
            else {
                showItems.style.display = "block";
            }
    }
    return (
        <div className="card m-2 w-100">
            <img className="card-img-top" src={images} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title" id={ids} onClick={e=>showRecipe(e.target.id)}>{title}</h5>                  
                    <div className={"recipeDetails"}>
                        <ol className="recipeNumber"  id={"list"+ ids} >
                        {ingredients.map(ingredient => (
                            <li className="recipeList">
                                {ingredient.text}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

        </div>
    )
}
export default Recpie;