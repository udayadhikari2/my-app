import React from "react";
import './App.css';

const Recpie = ({ title, images, ingredients, ids }) => {
    return (
        <div className="card m-2 w-100">
            <img className="card-img-top" src={images} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title" data-toggle="modal" id={ids} data-target="#fullHeightModalRight">{title}</h5>
                <hr/>
                <div className="popupDisplay" id={"list" + ids}>
                    <ol className="recipeNumber" >
                        {ingredients.map(ingredient => (
                            <li className="recipeList">
                                {ingredient.text}
                            </li>
                        )
                        )}
                    </ol>

                </div>
            </div>

        </div >
    )
}
export default Recpie;