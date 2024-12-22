import { useState } from "react";
import SearchForm from "../components/SearchForm";
import { getFoodData } from "../services/foodService";

const HomePage = () => {
    const [foodsData, setFoodsData] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async (food) => { 
        try {
            const data = await getFoodData(food);
            setFoodsData(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>Food Calorie App Header</h1>
            <SearchForm onSearch={handleSearch} />
            <h4>Food Cards</h4>
        </div>
    )
}

export default HomePage;