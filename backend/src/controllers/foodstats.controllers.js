import { JsonDatabase } from "../models/database.model.js";
import { FoodstatsModel } from "../models/foodstats.model.js";
import { leastCaloricFoods, formatFoodList } from "../utils/foodstats.utils.js"
export class FoodstatsController {
    static async test(req, res) {
        try {
            res.status(200).json({
                status:"success",
                data: {message:"This is a test"}
            });
        } catch (error) {
            res.status(500).json({
                status:"error",
                message: `Server error: ${error.errors}`,
                code: 500
            })
        }
    }

    static async fetchFoodData(req, res) {
        const food  = req.query.food;
        const databasePath = process.env.JSON_DB_PATH;

        // check if there is a food in the request
        if (!food) {
            return res.status(400).json({
                error: "Food input is required"
            });
        }
        
        try {
            // fetch food data from model
            const foodData = await FoodstatsModel.fetchFoods(food);

            // get the 3 least caloric foods form the list
            const leastCaloricFoodList = leastCaloricFoods(3, foodData);

            // instatntiate FoodstatsModel to create a database
            const foodSearDatabase = new JsonDatabase(databasePath);
            foodSearDatabase.initialize();

            // save the food data to the database
            await FoodstatsModel.saveFoodData(food, leastCaloricFoodList, foodSearDatabase);

            // format response
            const formattedResponse = formatFoodList(leastCaloricFoodList);

            // return response
            res.status(200).send(formattedResponse);

        } catch (error) {
            console.log(error)
            res.status(500).json({error: error.message});
        }
    }
}