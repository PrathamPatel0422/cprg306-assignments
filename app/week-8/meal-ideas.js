"use client";

import {useState, useEffect} from "react";



export default function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);
    fetchMealIdeas({ingredient, meals, setMeals});
    return (
        <main>

        </main>
    );
}

export function fetchMealIdeas({ingredient, meals, setMeals}) {
    const fetchMeals = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            setMeals(data.meals || []);
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
        }
        console.log(data[0]['strMeal']);
    };

    fetchMeals();
    
}