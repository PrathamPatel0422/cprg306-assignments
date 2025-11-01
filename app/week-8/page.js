"use client"
import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemData from "./items.json";
import MealIdeas  from "./meal-ideas.js";
export default function Page() {    
    const [items, setItems] = useState(itemData); 
    const [selectedItem, setSelectedItem] = useState();

    const handleAddItem = (item) =>{
        setItems([...items, item])
    }

    const handleItemSelect = (item) => {
        let cleanItem = item.name.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '');
        cleanItem = cleanItem.split(" ")[0];
        cleanItem = cleanItem.trim().toLowerCase();
        console.log(cleanItem);
        setSelectedItem(cleanItem);
    }

    return (
        <main>
            <div className="mx-auto max-w-4xl p-4 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                    <div className="p-4">
                        <h1 className="text-4xl font-bold">Shopping List</h1>
                        <div className="mt-4">
                            <NewItem onAddItem={handleAddItem} />
                            <ItemList items={items} onItemSelect={handleItemSelect}/>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Meal Ideas For: {selectedItem}</h3>
                        <MealIdeas ingredient={selectedItem} />
                    </div>
                </div>
            </div>
        </main>
    );
} 