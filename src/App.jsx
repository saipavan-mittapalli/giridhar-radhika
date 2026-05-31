import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import masthMagan from './assets/masth-magan.mp3';


import Hero from './components/Hero.jsx';
import Countdown from './components/Countdown.jsx';
import Venue from './components/Venue.jsx';
import Gallery from './components/Gallery.jsx';
import MusicToggle from './components/MusicToggle.jsx';

function App() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [petals, setPetals] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {

    AOS.init({ duration: 1200, once: true });

    const timer = setTimeout(() => setShowConfetti(false), 10000);
   
    const generatedPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 5 + Math.random() * 5,
      size: 10 + Math.random() * 15,
    }));
    setPetals(generatedPetals);

    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Audio playback delayed until user interaction."));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app-container">
      
      <audio 
        ref={audioRef} 
        src={masthMagan} 
        loop 
      />

      
      <MusicToggle isPlaying={isPlaying} onToggle={toggleMusic} />
      
      
      <div className="petal-container">
        {petals.map(petal => (
          <div
            key={petal.id}
            className="petal"
            style={{
              left: `${petal.left}%`,
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
              width: `${petal.size}px`,
              height: `${petal.size}px`,
            }}
          />
        ))}
      </div>

      
      {showConfetti && (
        <div className="confetti-wrapper">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className={`confetti piece-${i}`} />
          ))}
        </div>
      )}


      <Hero />
      <Countdown targetDate="2026-06-19T20:00:00" />
      <Gallery />
      <Venue />
    </div>
  );
}

export default App;