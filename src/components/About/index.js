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
        </div>
      </div>
      <div className="about-right">right</div>
    </div>
  );
}

export default About;
