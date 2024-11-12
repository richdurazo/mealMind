"use client";
import { useEffect, useState } from 'react';

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/meal-planner/suggestions')
      .then((response) => response.text())
      .then((data) => setSuggestions(data))
      .catch((error) => console.error('Error fetching suggestions:', error));
  }, []);

  return (
    <div>
      <h1>Suggestions</h1>
      <p>Data from backend: {suggestions}</p>
    </div>
  );
}
