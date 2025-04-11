import React from "react";
import "./fruitlist.css";


function FruitListComponent() {
    const fruits = ["Apple", "Banana", "Cherry"];


    return (
        <div className="container">
            <h2>Fruit List</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}


export default FruitListComponent;


