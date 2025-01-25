import axios from 'axios';
import { JsonDatabase } from "../models/database.model.js";


export class FoodstatsModel {
    // fetch food data from the API
    static async fetchFoods(food){
        const appId = process.env.EDAMAM_APP_ID;
        const appKey = process.env.EDAMAM_APP_KEY;
        const apiAccess = process.env.EDAMAM_ACCESS_POINT
        const query = `?app_id=${appId}&app_key=${appKey}&ingr=${encodeURIComponent(food)}&nutrition-type=cooking`
        const apiURL = apiAccess + query
        
        try {
            const response = await axios.get(apiURL);
            return response.data.hints;
        } catch (error) {
            throw new Error(`Failed to fetch data from API: ${error.message}`);
        }
    }

    // save food data to the JSON database
    static async saveFoodData(food, foodList, database){
        try {
            //Read the data from the JSON database
            const existingData = await database.read();
            console.log(existingData);
            
            //Append the new data
            existingData[food] =
                {
                    foodList,
                    timestamp: new Date().toISOString()
                };

            //Write the data back to the JSON database
            await database.write(existingData);    
        } catch (error) {
            throw new Error(`Error with database: ${error.message}`);
        }
    }
}