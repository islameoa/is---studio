import React from 'react';
import './Gallery.css';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Artwork ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
