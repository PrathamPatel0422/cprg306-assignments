"use client"
import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemData from "./items.json";

export default function Page() {    
    const [items, setItems] = useState(itemData); 

    const handleAddItem = (item) =>{
        setItems([...items, item])
    }
    return (
        <main>
            <div className="mx-auto max-w-md p-4">
                <h1 className="text-4xl font-bold">Shopping List</h1>
                <NewItem  onAddItem={handleAddItem}/>
                <ItemList items={items}/>
              
            </div>
            
        </main>
    );
} 