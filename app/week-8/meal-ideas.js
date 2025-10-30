"use client";

import {useState, useEffect} from "react";

export default function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const mealList = await fetchMealIdeas({ingredient});
        setMeals(mealList);
    };

    useEffect(() => {
        if(ingredient){
            loadMealIdeas();
        }
    }, [ingredient]);


    return (
        <main>
            <div>
                {meals.length > 0 ? (
                meals.map((meal) => (
                    <div key={meal.idMeal}>
                    <h3>{meal.strMeal}</h3>
                    <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
                    </div>
                ))
                ) : (
                <p>No meals found.</p>
                )}
            </div>
        </main>
    );
}

async function fetchMealIdeas({ingredient}) { 
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    } 
}


