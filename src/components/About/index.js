import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-left-wrapper">
          <h2 className="about-greeting">Hello, My name is</h2>
          <h1 className="about-name">Miguel</h1>
            <div className="about-title">
                <div className="about-title-wrapper">
                    <div className="about-title-item">Web Developer</div>
                    <div className="about-title-item">Nurse</div>
                    <div className="about-title-item">Photographer</div>
                    <div className="about-title-item">Web Developer</div>
                    <div className="about-title-item">Nurse</div>
                    <div className="about-title-item">Photographer</div>
                </div>
            </div>
            <p className="about-description"> 
                I design and make websites! Let's work together.
            </p>
        </div>
      </div>
      {/* <div className="about-right">
      <div className="about-bg"></div>
          <img src={dp} alt="man with a hat" className="about-img"></img>
      </div> */}
    </div>
  );
}

export default About;
