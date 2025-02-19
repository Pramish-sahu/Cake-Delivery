import React, { useState, useEffect } from 'react';
import './product.css';

const CakeProduct = () => {
  const [cake, setCake] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake')  // Cake API URL
      .then((response) => response.json())
      .then((data) => {
        console.log('Cake API Response:', data);
        setCake(data.meals[0]);  // Assuming we get one cake recipe in the response
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cake data:', error);
        setError('Error loading cake data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!cake) {
    return <div>No cake data available.</div>;
  }

  return (
    <div className="card">
      <div className="card-background"></div>
      <img src={cake.strMealThumb} alt={cake.strMeal} />
      <h3>{cake.strMeal}</h3>
      <h4>{cake.strCategory}</h4>
      {/* <p>{cake.strInstructions}</p> */}
      {/* <h5>Ingredients:</h5> */}
      <ul>
        {[...Array(10).keys()].map((i) => {
          if (cake[`strIngredient${i + 1}`]) {
            return (
              <li key={i}>
                {/* {cake[`strIngredient${i + 1}`]} - {cake[`strMeasure${i + 1}`]} */}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default CakeProduct;
