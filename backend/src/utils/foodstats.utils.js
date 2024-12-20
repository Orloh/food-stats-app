// find the numOfFoods items with the lowest calorie content from a foodList
export function leastCaloricFoods(numOfFoods,foodList) {
    
    // initialize sortedFoods with the first numOfFoods items
    // sort by their calorie content (ascending) 
    let sortedFoods = foodList
        .slice(0,numOfFoods) //take first numOfFoods elements
        .sort((a, b) => a.food.nutrients.ENERC_KCAL - b.food.nutrients.ENERC_KCAL) // sort by calories (ascending)
    
    // iterate through the rest of the foodList
    for (const food of foodList.slice(numOfFoods)){
        
        // check if the current food has fewer calories than the most caloric food in sortedFoods
        if (food.food.nutrients.ENERC_KCAL < sortedFoods.at(-1).food.nutrients.ENERC_KCAL){
            // replace the last element of the sortedFoods list with the current food
            sortedFoods[sortedFoods.length - 1] = food
            // sort sortedFood list in asccending order
            sortedFoods.sort((a, b) => a.food.nutrients.ENERC_KCAL - b.food.nutrients.ENERC_KCAL)
        }
    }
    
    return sortedFoods
} 

export function formatFoodList(foodList) {
    return foodList
}