import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./index.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="logo">
        <h2>Arun Builders</h2>
        <p>Building Your Dreams</p>
      </div>
      <div className="social-media">
        <a href="https://facebook.com" aria-label="Facebook">
          <FaFacebookF /> Facebook
        </a>
        <a href="https://instagram.com" aria-label="Instagram">
          <FaInstagram /> Instagram
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn">
          <FaLinkedinIn /> LinkedIn
        </a>
      </div>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>
        &copy; {new Date().getFullYear()} Arun Builders. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
