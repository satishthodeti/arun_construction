import React, { useState, useEffect } from 'react';
import './index.css'; // Import your CSS file for styles

const Hero = () => {
  const offers = [
    "Limited Time Offer: 10% off on all projects!",
    "Free Consultation for New Clients!",
    "Refer a Friend and Get a Discount!"
  ];

  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prevOffer) => (prevOffer + 1) % offers.length);
    }, 3000); // Change offer every 3 seconds

    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="animate-fade-in">Building the Future</h1>
        <p className="animate-fade-in">Your vision, our expertise.</p>
        <a href="#contact" className="cta animate-bounce">Get in Touch</a>
        <div className="slider">
          <p className="offer animate-slide-in">{offers[currentOffer]}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
