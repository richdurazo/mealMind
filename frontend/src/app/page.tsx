"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the Java backend
    fetch('http://localhost:8080/api/hello')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  console.log("message", message);
  return (
    <div>
      <h1>Welcome to the Frontend</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}