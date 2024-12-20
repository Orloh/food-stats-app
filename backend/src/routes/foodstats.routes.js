import { Router } from 'express';
import { FoodstatsController} from '../controllers/foodstats.controllers.js';

const foodstatsRoutes = Router();

// testing endpoint
foodstatsRoutes.get("/test", FoodstatsController.test);
// fetch food data endpoint
foodstatsRoutes.get("/getFoodData", FoodstatsController.fetchFoodData)

export default foodstatsRoutes;