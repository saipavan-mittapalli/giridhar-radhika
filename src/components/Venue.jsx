import React from 'react';

const Venue = () => {

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4689.959721233681!2d78.09347197595925!3d18.685217564122645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcddb38fc83fa81%3A0x47d0e47448ac906f!2sMaheshwari%20Bhavan%20Function%20Hall!5e1!3m2!1sen!2sin!4v1780222078166!5m2!1sen!2sin";

  return (
    <section className="venue-section" data-aos="fade-up">
      <h2>The Venue</h2>
      <div className="venue-card">
        <h3>Maheshwari Bhavan</h3>
        <p className="venue-address">Nizamabad, Telangana, India</p>
        <p className="venue-time">Starts promptly at 8:00 PM IST</p>
        
        <div className="map-container" data-aos="zoom-in-up">

          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Venue Location Map"
          ></iframe>

        </div>
      </div>

      <footer className="developer-credits" data-aos="fade-up" data-aos-delay="200">
        <div className="credits-divider"></div>
        <p className="crafted-text">
          Developed by <span className="dev-name"><a href="https://saipavan-mittapalli.vercel.app" target="_blank" rel="noopener noreferrer">Pavan & Co</a></span>
        </p>
      </footer>
    </section>
  );
};

export default Venue;