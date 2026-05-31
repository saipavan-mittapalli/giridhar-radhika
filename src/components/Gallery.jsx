import React from 'react';

import rings from '../assets/rings.png';
import img2 from '../assets/img2.png';
import reception from '../assets/reception.jpg';
import heart from '../assets/heart.png';

const Gallery = () => {

  const images = [
    reception,
    rings,
    img2,
    heart
  ];

  return (
    <section className="gallery-section">
      <h2 data-aos="fade-up">Captured Moments</h2>
      <div className="gallery-grid">
        {images.map((url, index) => (
          <div 
            key={index} 
            className="gallery-item" 
            data-aos="zoom-in" 
            data-aos-delay={index * 150}
          >
            <img src={url} alt={`Couple Moment ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;