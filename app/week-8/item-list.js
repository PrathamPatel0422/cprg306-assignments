"use client";

import Item from "./item";

import { useState } from "react";

export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState("name");
  const [selectedItem, setSelectedItem] = useState();

  if(sortBy === "name"){
    items.sort((a,b) => a.name.localeCompare(b.name));
    
  } 
  else if(sortBy === "category"){
    items.sort((a,b) => a.category.localeCompare(b.category));
  }

  return (
    <main>
      <div> 
        <ul> 
          {items.map((item) => (
            <li key={item.id} className="mb-4 mt-4 w-full">
              <button className="w-full border border-white text-white rounded p-2 m-0 hover:cursor-pointer hover:bg-gray-300 font-bold"
                    onClick={() => setSelectedItem(item)}>
                <Item item={item} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="border border-black bg-white text-black rounded p-2 m-2 hover:cursor-pointer hover:bg-gray-300 font-bold" onClick={() => setSortBy("name")}> Sort by Name</button>
        <button className="border border-black bg-white text-black rounded p-2 m-2 hover:cursor-pointer hover:bg-gray-300 font-bold" onClick={() => setSortBy("category")}> Sort by Category</button>
      </div>
    </main>
  );
}
