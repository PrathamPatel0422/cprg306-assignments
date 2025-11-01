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
                    <div className="flex flex-wrap items-stretch">
                        {meals.map((meal) => (
                            <div key={meal.idMeal} className="w-1/2 p-2 flex">
                                <div className="border border-white text-white p-4 rounded flex items-center justify-center flex-1">
                                    <h3 className="text-center">{meal.strMeal}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-white">No meals found.</p>
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


