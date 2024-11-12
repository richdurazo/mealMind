"use client";
import { useEffect, useState } from 'react';

export default function User() {
  const [user, setUser] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/meal-planner/user')
      .then((response) => response.text())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div>
      <h1>User</h1>
      <p>Data from backend: {user}</p>
    </div>
  );
}
