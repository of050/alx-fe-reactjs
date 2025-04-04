// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import RecipeDetails from './components/RecipeDetails';
import React from 'react';
import FavouritesList from './FavouritesList';
import RecommendationList from './RecommendationList';

const App = () => (
  <div>
    <h1>My App</h1>
    <FavouritesList />
    <RecommendationList />
  </div>
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
    </Routes>
  </Router>
);
export default App;