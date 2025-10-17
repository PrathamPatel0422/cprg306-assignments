"use client";

import Item from "./item";
import ItemData from "./items.json";

import { use, useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  let itemArray = [...ItemData];

  if(sortBy === "name"){
    itemArray.sort((a,b) => a.name.localeCompare(b.name));
    
  } 
  else if(sortBy === "category"){
    itemArray.sort((a,b) => a.category.localeCompare(b.category));
  }

  return (
    <main>
      <div>
        <button className="border border-black bg-white text-black rounded p-2 m-2 hover:cursor-pointer hover:bg-gray-300 font-bold" onClick={() => setSortBy("name")}> Sort by Name</button>
        <button className="border border-black bg-white text-black rounded p-2 m-2 hover:cursor-pointer hover:bg-gray-300 font-bold" onClick={() => setSortBy("category")}> Sort by Category</button>
      </div>
      <div> 
        <ul> 
          {itemArray.map((item) => (
            <li key={item.id} className="mb-4 mt-4">
              <Item item={item} />           
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
