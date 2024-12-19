import { Router } from 'express';
import { FoodstatsController} from '../controllers/foodstats.controllers.js';

const foodstatsRoutes = Router();

// testing endpoint
foodstatsRoutes.get("/", FoodstatsController.test);

export default foodstatsRoutes;