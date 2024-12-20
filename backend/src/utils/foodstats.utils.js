// find the numOfFoods items with the lowest calorie content from a foodList
export function leastCaloricFoods(numOfFoods,foodList) {
    
    // initialize and empty sortedFoods list
    let sortedFoods = []
    
    // iterate through the rest of the foodList
    for (const food of foodList){
        if(sortedFoods.length < numOfFoods) {
            // insert food into sortedFoods list
            sortedFoods.push(food)
            // sort sortedFood list in asccending order
            sortedFoods.sort((a, b) => a.food.nutrients.ENERC_KCAL - b.food.nutrients.ENERC_KCAL)
        }
        // check if the current food has fewer calories than the most caloric food in sortedFoods
        else if(food.food.nutrients.ENERC_KCAL < sortedFoods.at(-1).food.nutrients.ENERC_KCAL){
            // replace the last element of the sortedFoods list with the current food
            sortedFoods[sortedFoods.length - 1] = food
            // sort sortedFood list in asccending order
            sortedFoods.sort((a, b) => a.food.nutrients.ENERC_KCAL - b.food.nutrients.ENERC_KCAL)
        }
    }
    
    return sortedFoods
} 

// format a list of food objects by extracting their food property.
export function formatFoodList(foodList) {
    const formattedFoodList = foodList.map((food) => food.food)
    return formattedFoodList
}