// src/App.jsx

import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import IntroRealtor from './Components/IntroRealtor';      
import WhyChooseUs from './Components/WhyChooseUs';        
import AboutUs from './Components/AboutUs';                
import Projects from './Components/Projects';
import Clients from './Components/Clients';
import ContactForm from './Components/ContactForm';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <IntroRealtor />      
      <WhyChooseUs />
      <AboutUs />
      <Projects />
      <Clients />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
