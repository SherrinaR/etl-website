import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>EMPOWERED TO LIVE</h1>
        <p>WELCOMES YOU</p>
        <div className='hero-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            > 
                WATCH LIVE <i class="uil uil-play-circle" />
            </Button>
            {/* <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
            > 
                WATCH TRAILER <i class="uil uil-play-circle" />
            </Button> */}
        </div>
    </div>
  );
}

export default HeroSection