import React from 'react';
import '../Contact/contact.css';
import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';
import location from '../../assets/icons/location.png';
// useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue)
import { useRef } from "react";

function Contact() {

  const formRef = useRef()

  const handleSubmit = (event) => {
    // so the page doesn't refresh
    event.preventDefault();

  }

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">What's the project?</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={phone} alt="phone" className="contact-icon" />
              <a className="contact-anc" href="tel:+17736720120">+1 773-672-0120</a>
            </div>
            <div className="contact-info-item">
              <img src={email} alt="email" className="contact-icon" />
              <a className="contact-anc" href="mailto:mxosorio.dev@gmail.com">mxosorio.dev@gmail.com</a>
            </div>
            <div className="contact-info-item">
              <img src={location} alt="location pin" className="contact-icon" />
              <a className="contact-anc" href="https://goo.gl/maps/yztCKcaZuYN1eYSPA">Austin, Tx</a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-description">
            <b>Let's get in touch.</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
