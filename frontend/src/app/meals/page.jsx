"use client";
import { useEffect, useState } from 'react';

export default function Meals() {
  const [meals, setMeals] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/meal-planner/meals')
      .then((response) => response.text())
      .then((data) => setMeals(data))
      .catch((error) => console.error('Error fetching meals:', error));
  }, []);

  return (
    <div>
      <h1>Meals</h1>
      <p>Data from backend: {meals}</p>
    </div>
  );
}
