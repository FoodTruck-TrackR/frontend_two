import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Form from './Form.js';


function Home() {
  return (
    <>
      <HeroSection />
      <Form />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
