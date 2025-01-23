import React from 'react';
import { Link } from 'react-router-dom';
import BgOne from '../assets/Model.png';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="text-content">
          <h2 className="subtitle">
            Your Job Search Made Simple
          </h2>
          <h1 className="title">
            Welcome to JobSeeker
          </h1>
          <p className="subtitle2">
            Track your applications, search for new opportunities, and manage your job hunt all in one place.
          </p>
          <div className="cta-container">
            <Link to="/register" className="cta-button">
              Get Started
            </Link>
            <Link to="/learn-more" className="secondary-button">
              Learn More
            </Link>
          </div>
        </div>
        <div className="image-container">
          <img
            src={BgOne}
            alt="Job search illustration"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
