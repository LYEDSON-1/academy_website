import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mky7mfe', 'template_9yzefof', form.current, 'epx4uAnMYe4saReZE')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
            required
          />
          <button className="btn btn-j" type="submit">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
