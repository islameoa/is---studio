import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import image1 from '../images/image1.jpg';
import homeLogo from '../images/logo_biggest.png';

const images = [image1, image1, image1, image1, image1, image1, image1, image1, image1, image1, image1, image1, image1];
const words = ['love', 'meaning', 'purpose'];

const Gallery = () => {
  const [currentWord, setCurrentWord] = useState('purpose');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => words[(words.indexOf(prev) + 1) % words.length]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-container">
      <img src={homeLogo} alt="is-studio logo" className="logo" />
      <p className="subtitle">
        built with <span className="dynamic-word">{currentWord}</span>
      </p>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Artwork ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
