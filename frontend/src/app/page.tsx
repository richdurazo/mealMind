"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import classes from './page.module.css';

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
      <nav className={classes.nav}>
        <ul>
          <li><Link href="/meals">Meals</Link></li>
          <li><Link href="/suggestions">Suggestions</Link></li>
          <li><Link href="/user">User</Link></li>
        </ul>
      </nav>
    </div>
  );
}