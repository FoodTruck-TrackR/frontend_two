import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/video-3.mp4' autoPlay loop muted />
      <h1>Food Trucks are Out There!!!</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Sign Up/Log in
        </Button>
       
    
      </div>
    </div>
  );
}

export default HeroSection;