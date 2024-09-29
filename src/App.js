import React from 'react';
import './styles/styles.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
// import Calculator from './components/Calculator/Calculator';
import Footer from './components/Footer/Footer'
// import './App.css'

const App = () => (
  <div>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Testimonials />
    <Contact />
    {/* <Calculator /> */}
    <Footer />
  </div>
);

export default App;
