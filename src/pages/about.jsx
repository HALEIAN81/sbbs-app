import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const slides = [
    {
      src: 'https://jodeaux.agency/assets/img/portfolio/portfolio-22.png',
      alt: 'Scotland Backyard Book Series',
    },
    {
      src: 'https://jodeaux.agency/assets/img/portfolio/portfolio-23.png',
      alt: 'Scotland Backyard Book Series',
    },
    {
      src: 'https://jodeaux.agency/assets/img/portfolio/portfolio-24.png',
      alt: 'Scotland Backyard Book Series',
    },
  ];

  return (
    <div className="about glow">
      <h3 style={{margin:"0px"}} className="pageTitle  sb-title heading2">About Scotland Backyard Book Series Online</h3>
      <a style={{width:"100%"}} href="https://www.amazon.com/Scotland-Backyard-Knights-Hale-Verde-ebook/dp/B09NKVJTKK/ref=sr_1_1?crid=DKHA4LZM4WM0&keywords=Scotland+Backyard&qid=1679819319&sprefix=scotland+backyard%2Caps%2C143&sr=8-1" target="_blank">
        <div className="image-slider">
          <div className="slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={
                  currentSlide === index ? 'active' : 'hidden'
                }
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
            ))}
          </div>
          <div className="controls">
            <button
              className={
                currentSlide === 0 ? 'disabled' : ''
              }
              onClick={handlePreviousSlide}
            >
              <FaArrowAltCircleLeft />
            </button>
            <button
              className={
                currentSlide === slides.length - 1 ? 'disabled' : ''
              }
              onClick={handleNextSlide}
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </a>
      <p className="about-text heading2">
        Here, we gather a collection of 3d works to showcase the hidden world of Scotland Backyard. 
      </p>
      <p className="about-text heading2">
        We have a great deal in the works, stay tuned. 
      </p>
    </div>
  );
};

export default About;