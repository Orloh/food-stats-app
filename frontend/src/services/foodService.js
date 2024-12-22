import axios from "axios";

const API_URL = "http://localhost:3333/food-stats/getFoodData";

export const getFoodData = async (food) => {
    try {
        const response = await axios.get(API_URL, { 
            params:{ food }
    });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching food data: ${error}`);
        throw error;
    }
};