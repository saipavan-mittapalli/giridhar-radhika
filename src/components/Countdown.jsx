import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="countdown-section" data-aos="fade-up">
      <h3>Counting Down to the Big Day</h3>
      <div className="countdown-grid">
        {Object.keys(timeLeft).map((interval, idx) => (
          <div key={idx} className="countdown-box">
            <span className="time-num">{String(timeLeft[interval]).padStart(2, '0')}</span>
            <span className="time-label">{interval.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;