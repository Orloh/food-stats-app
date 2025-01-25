import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import { getFoodData } from "../services/foodService";
import FoodsReel from "../components/FoodReel";
import './HomePage.css';

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
        console.log(foodsData);
    };

    useEffect(() => {
        // This will run after every render where foodsData changes
        console.log("Updated foodsData:", foodsData);
      }, [foodsData]);

    return (
        <div>
            <div className="search-form-container">
                <SearchForm onSearch={handleSearch} />
            </div>
            {error && <div style={{color: 'red'}}>{error}</div>}
            <div>
                <FoodsReel foods={foodsData} />
            </div>
        </div>
    )
}

export default HomePage;