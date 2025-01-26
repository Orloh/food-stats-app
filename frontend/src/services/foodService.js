import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

export const getFoodData = async (food) => {
    try {
        const response = await axios.get(API_URL, { 
            params:{ food }
    });
        return response.data.data;
    } catch (error) {
        console.error(`Error fetching food data: ${error}`);
        throw error;
    }
};