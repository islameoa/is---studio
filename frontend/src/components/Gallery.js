import React from 'react';
import '../styles/Gallery.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image1.jpg';
import image3 from '../images/image1.jpg';
import image4 from '../images/image1.jpg';
import image5 from '../images/image1.jpg';
import image6 from '../images/image1.jpg';
import image7 from '../images/image1.jpg';
import image8 from '../images/image1.jpg';
import image9 from '../images/image1.jpg';
import image10 from '../images/image1.jpg';
import homeLogo from '../images/logo_biggest.png';
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <img src={homeLogo} alt="is-studio logo" className='logo'/>
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
