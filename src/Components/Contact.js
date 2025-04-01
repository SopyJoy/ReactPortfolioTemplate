import React from "react";
import "./Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="inputs">
        <h1>Contact Me</h1>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" className="message" />
      </div>
    </div>
  );
};

export default Contact;
