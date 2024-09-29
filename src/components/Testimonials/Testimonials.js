import React from 'react';
import './index.css';
import testimonialData from '../Images/testimonialData';

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <h2>Testimonials</h2>
    <div className="testimonial-grid">
      {testimonialData.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <img src={testimonial.imageUrl} alt={testimonial.name} />
          <h3>{testimonial.name}</h3>
          <p>{testimonial.feedback}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
