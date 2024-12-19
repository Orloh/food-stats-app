import { FoodstatsModel } from "../model/foodstats.model.js";

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
        const { food } = req.body;

        if (!food) {
            return res.status(400).json({
                error: "Food input is required"
            });
        }
        
        try {
            // fetch food data from model
            const foodData = await FoodstatsModel.fethcFoods(food);

            // sort data by calories and pick the 3 least caloric
            // TODO

            // format respons
            const formattedResponse = foodData

            // return response
            console.log(formattedResponse)
            res.status(200).send(formattedResponse);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}