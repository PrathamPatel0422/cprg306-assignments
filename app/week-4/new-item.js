"use client"

import { useState } from "react";

export default function newItem() {
    let [quantity, SetQuantity] = useState(1);

    const increment = () => {
        if(quantity < 20){
            SetQuantity(quantity + 1)
        }
        else{       
            alert("You reached the max value (10)");
        }
    };
    const decrement = () => {
        if(quantity > 1){
            SetQuantity(quantity - 1)
        }
        else{       
            alert("You reached the max value (10)");
        }
    };

    return(
        <div>
            <h1>Quantity: {quantity}</h1>
            <button onClick={increment}>Increment + </button>
            <button onClick={increment}>Decrement - </button>
        </div>
    )
}