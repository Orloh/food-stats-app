import cors from 'cors';
import express from 'express';
import foodstatsRoutes from './routes/foodstats.routes.js';
process.loadEnvFile('./.env');

const PORT = process.env.PORT || 3333;

const app = express();

// middleware to parse JSON
app.use(express.json());

// middlware for CORS
app.use(cors());

// routes
app.use("/food-stats", foodstatsRoutes)

app. listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})