import React from 'react';
import '../Contact/contact.css';
import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">What's the project?</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={phone} alt="phone" className="contact-icon" />
              <a href="tel:+17736720120">+1 773-672-0120</a>
            </div>
            <div className="contact-info-item">
              <img src={email} alt="email" className="contact-icon" />
              <a href="mailto:mxosorio.dev@gmail.com">mxosorio.dev@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="contact-right"></div>
      </div>
    </div>
  );
}

export default Contact;
