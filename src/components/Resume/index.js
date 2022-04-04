/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './resume.css';
import resume from '../../assets/resume/resume.pdf';

function Resume() {
  return (
    <div className="resume">
      <div className="resume-left">
      <div className="resume-card">
        <img
        />
        <a target="_blank" href={resume} rel="noreferrer" title="resume">
          <button>Resume</button>
        </a>
      </div>
      </div>
      
      <div className="resume-right">
        <h1 className="resume-title">Proficiencies</h1>
        <p>HTML</p>
        <p>css</p>
        <p>Javascript</p>
        <p>Node</p>
        <p>express.js</p>
        <p>React</p>
        <p>mySQL</p>
        <p>mongodb</p>
      </div>
    </div>
  );
}

export default Resume;
