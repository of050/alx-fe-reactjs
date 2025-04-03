// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      const foundRecipe = data.find((r) => r.id === parseInt(id));
      setRecipe(foundRecipe);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside">
          {/* Replace with actual ingredients from your data */}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-semibold">Cooking Instructions</h2>
        <p>
          {/* Replace with actual cooking instructions from your data */}
          Step 1: Do this.<br />
          Step 2: Do that.<br />
          Step 3: Enjoy your meal!
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;