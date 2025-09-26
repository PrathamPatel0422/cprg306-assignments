"use client"

import { useState } from "react";

export default function NewItem() {
    let [quantity, SetQuantity] = useState(1);

    const increment = () => {
        SetQuantity(quantity + 1)
    };
    const decrement = () => {
        SetQuantity(quantity - 1)
    };

    return(
        <div className="my-1 flex gap-2">
            <h1 className="text-3xl border-1 border-black text text-black flex justify-center px-2">{quantity}</h1>
            <button disabled={quantity === 1 } onClick={decrement} className= "text-3xl disabled:bg-gray-700 disabled:hover:cursor-not-allowed rounded bg-blue-800  hover:bg-blue-600 hover:cursor-pointer px-2">-</button>
            <button disabled={quantity === 20 } onClick={increment} className= "text-3xl disabled:bg-gray-700 disabled:hover:cursor-not-allowed rounded bg-blue-800  hover:bg-blue-600 hover:cursor-pointer px-2">+</button>
        </div>
    )
}