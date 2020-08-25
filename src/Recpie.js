import React from "react";
import './App.css';

const Recpie = ({ title, image, ingredients,ids}) => {
    function showRecipe(id){
    //    var ids=id;
       var showItems=document.getElementById("list"+ id);
        showItems.style.display="block"

    //    if(id==ids){
    //     showItems.style.display="block"
    //     alert(`${id} is clicked`);
    //    }
    //    else{
    //        showItems.style.display="none";
    //        alert(`${id} is unclicked`);
    //    }
    }
    return (
        <div className="card m-2 w-100">
            <img className="card-img-top" src={image} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>

                    <div className="btn btn-danger w-100" id={ids} onClick={e=>showRecipe(e.target.id)}>{title} Recipe</div>
                    
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