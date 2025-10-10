"use client";

import Item from "./item";
import ItemData from "./items.json";

import { use, useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  let itemArray = [...ItemData] 


  itemArray.sort((a,b) => a.name.localeCompare(b.name))
return (
  <main>
    <div>
      <button className="border border-black bg-white text-black rounded p-1 m-2" onClick={() => setSortBy("name")}> Sort by Name</button>
      <button className="border border-black bg-white text-black rounded p-1 m-2" onClick={() => setSortBy("category")}> Sort by Category</button>
      <h1>{sortBy}</h1>
    </div>
    <div>
      <ul> 
        {itemArray.map((item) => (
          <li className="m-2 p-2">
            <Item item={item} />           
          </li>
        ))}
      </ul>
    </div>
  </main>
);
}

