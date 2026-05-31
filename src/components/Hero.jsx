import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section">

      <div className="hero-grid-pattern"></div>

      <div 
        className="hero-overlay-image"
        style={{
          transform: `scale(1.05) translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      ></div>
      <div className="hero-vignette"></div>

      <div className="hero-content">
        <div className="badge-wrapper" data-aos="fade-down" data-aos-delay="200">
          <span className="gold-badge">THE CELEBRATION OF LOVE</span>
        </div>
  
        <div className="glass-cinematic-card" data-aos="zoom-in" data-aos-delay="400">
          <div className="couple-names-container">
            <span className="groom-name" data-aos="fade-right" data-aos-delay="700">
              Giridhar
            </span>
            <span className="ampersand" data-aos="zoom-in" data-aos-delay="1000">
              &
            </span>
            <span className="bride-name" data-aos="fade-left" data-aos-delay="700">
              Radhika
            </span>
          </div>
          
          <div className="gold-divider" data-aos="width-expand" data-aos-delay="1200"></div>
          
          <p className="event-tagline" data-aos="fade-up" data-aos-delay="1300">
            Together with their families, joyfully invite you to celebrate their wedding reception
          </p>
        </div>


        <div className="hero-date-place" data-aos="fade-up" data-aos-delay="1500">
          <div className="date-block">
            <span className="hero-main-val">JUNE 19, 2026</span>
          </div>
          <span className="separator">♦</span>
          <div className="time-block">
            <span className="hero-main-val">8:00 PM ONWARDS</span>
          </div>
        </div>

        <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="1800">
          <span className="scroll-text">Scroll to Explore</span>
          <div className="mouse-icon">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;