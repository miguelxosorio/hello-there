import React from 'react';
import '../Contact/contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">What's the project?</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <span class="material-icons">phone</span>
              +1 773-672-0120
              <span class="material-icons">email</span>
            </div>
          </div>
        </div>
        <div className="contact-right"></div>
      </div>
    </div>
  );
}

export default Contact;
