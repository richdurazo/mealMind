"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import classes from './page.module.css';
import ImageSlideshow from '../components/images/image-slideshow';

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
      <>
          <header className={classes.header}>
              <div className={classes.slideshow}>
                  <ImageSlideshow />
              </div>
              <div>
                  <div className={classes.hero}>
                      <h1>NextLevel Food for NextLevel Foodies</h1>
                      <p>Taste & share food from all over the world.</p>
                  </div>
                  <div className={classes.cta}>
                      <Link href='/user'>Join the Community</Link>
                      <Link href='/meals'>Expore Meals</Link>
                  </div>
              </div>
          </header>
          <main>
              <section className={classes.section}>
                  <h2>How it works</h2>
                  <p>
                      This AI-Powered Meal Planner is designed to simplify meal
                      planning for users with diverse dietary preferences. This
                      intuitive platform allows users to create personalized
                      meal plans for the week by inputting their dietary
                      restrictions, favorite cuisines, and nutritional goals.
                  </p>
                  <p>
                      This AI-Powered Meal Planner aims to make healthy eating
                      accessible and enjoyable, empowering users to take charge
                      of their dietary choices without the hassle of complex
                      meal planning.
                  </p>
              </section>
          </main>
      </>
  );
}