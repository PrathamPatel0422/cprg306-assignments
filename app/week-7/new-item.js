"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert(`Item Added: ${name} | Quantity: ${quantity} | Category: ${category}`);

        // reset form values
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    const increment = () => {
        if (quantity < 20) setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="justify-center flex flex-col pt-4"
        >
            <section className="mx-auto p-4 rounded bg-white justify-center">
                <div className="flex justify-center mb-2">
                    <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="text-black border border-black w-80 text-1xl rounded p-2"
                        type="text"
                        placeholder="Item Name"

                    />
                </div>

                <div className="flex justify-between mb-2 items-center">
                    <div className="flex items-center gap-2">
                        <input readOnly className=" text-center text-2xl text-black border border-black rounded w-10 font-extrabold" value={quantity} type="text"/>
                        <button
                            type="button"
                            disabled={quantity === 1}
                            onClick={decrement}
                            className="text-3xl disabled:bg-gray-700 disabled:hover:cursor-not-allowed rounded bg-blue-800 hover:bg-blue-600 hover:cursor-pointer px-2"
                        >
                            -
                        </button>
                        
                        <button
                            type="button"
                            disabled={quantity === 20}
                            onClick={increment}
                            className="text-3xl disabled:bg-gray-700 disabled:hover:cursor-not-allowed rounded bg-blue-800 hover:bg-blue-600 hover:cursor-pointer px-2"
                        >
                            +
                        </button>
                    </div>

                    <select
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        className="border border-black text-black rounded p-2"
                    >
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen food">Frozen Foods</option>
                        <option value="Canned goods">Canned Goods</option>
                        <option value="Dry goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        type="submit"
                        className="text-2xl rounded bg-blue-800 hover:bg-blue-600 hover:cursor-pointer px-4 py-2 text-white"
                    >
                        Add Item
                    </button>
                </div>
            </section>
        </form>
    );
}
