import React from 'react';
import './index.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact Us</h2>
    <p>Have a question or want to discuss your project? Get in touch with us!</p>
    <div className="contact-info">
      <p><FaPhone /> Phone Number: 9700232477</p>
      <p><FaEnvelope /> Email: arunbuilders@gmail.com</p>
    </div>
  </section>
);

export default Contact;
