'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import saladImg from '@/assets/salad.jpg';
import chickenImg from '@/assets/chicken-sandwhich.jpg';
import chilliImg from '@/assets/chilli.jpg';
import phoImg from '@/assets/pho.webp';

import classes from './image-slideshow.module.css';

const images = [
  { image: burgerImg, alt: 'A yummy, juicy burger' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: saladImg, alt: 'A fresh cesar salad' },
  { image: phoImg, alt: 'yummy bowl of pho' },
  { image: chickenImg, alt: 'chicken sandwich' },
  { image: chilliImg, alt: 'a hot bowl of chilli' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}