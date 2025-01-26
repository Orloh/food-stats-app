# Food Stats App

## Description
Food Stats App is a web application that provides insights about various foods. 
It allows users to search for a food item and view detailed nutritional information.

## Features
- Search for food items
- View detailed nutriotional information
- Shows the 3 least caloric foods from the search results
- Search results are saved in a custom JSON database

## Technologies Used
- React.js for the frontend
- Node.js and Express for the backend
- Axios for making HTTP requests

## Prerequisites
Before you begin, ensure you have met the following requirements:
- You have installed [Node.js](https://nodejs.org/) (version 14 or later).
- You have [Git](https://git-scm.com/) installed on your machine.

## Getting Started

### Environment Setup
Create two `.env` files, one for the frontend and one for the backend.

#### Frontend `.env` file
Create a file named `.env` in the frontend directory. Add the following variable:
```
VITE_API_URL="http://localhost:3000/food-stats/getFoodData"
```
This variable sets the base URL for the backend API that the frontend will communicate with. Make sure the localhost:PORT matches the PORT variable in the backend.

#### Backend `.env` file
Create a file named `.env` in the backend directory. Add the following variable:
```
PORT='3000'
EDAMAM_APP_ID=
EDAMAM_APP_KEY=
EDAMAM_ACCESS_POINT="https://api.edamam.com/api/food-database/v2/parser"
JSON_DB_PATH="data/food-database.json"
```
- `PORT`: Specifies the port number the backend server will run on.
- `EDAMAM_APP_ID` and `EDAMAM_APP_KEY`: These are your unique identifiers for accessing the Edamam API. You can obtain these by signing up for an account on the Edamam website.
- `EDAMAM_ACCESS_POINT`: This is the base URL for the Edamam API.
- `JSON_DB_PATH`: This variable defines the path to the JSON file where food data will be stored.

**NOTE:** You can use the `.env.example` files, located in both the frontend and backend directories, to create the `.env` files. 

### Installation
To get started with the Food Stats App, follow these steps:

1. Clone the repository:
```sh
git clone https://github.com/Orloh/food-stats-app.git
```
2. Navigate to the project directory:
```
cd food-stats-app
```
3. Install the dependencies:
```sh
npm install
```

### Running the Application
1. Start both the backend and frontend servers concurrently:
```sh
npm start
```

2. Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Usage

1. Enter a food item in the search form.
2. Click the "Search" button.
3. View the nutritional information and the least caloric foods from the search results.

## License

This project is licensed under the MIT License.