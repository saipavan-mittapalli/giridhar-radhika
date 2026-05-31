import React from 'react';

const MusicToggle = ({ isPlaying, onToggle }) => {
  return (
    <button className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`} onClick={onToggle}>
      {isPlaying ? (
        <span className="music-icon">🎵 Pause Music</span>
      ) : (
        <span className="music-icon">🔕 Play Music</span>
      )}
    </button>
  );
};

export default MusicToggle;