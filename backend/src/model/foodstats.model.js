import axios from 'axios';

export class FoodstatsModel {
    static async fethcFoods(food){
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
}