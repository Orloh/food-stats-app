import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [foodQuery, setFoodQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(foodQuery);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Food-Stats App</h1>
            <input
                type="text"
                value={foodQuery}
                onChange={(event) => setFoodQuery(event.target.value)}
                placeholder='Search food...'
            />
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchForm