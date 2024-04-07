import React from "react";
import "../assets/css/Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">Contact Us</h1>

        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form Submitted");
          }}
          method="post"
        >
          <div className="inputBox">
            <input type="text" id="name" required />
            <label htmlFor="name">name</label>
          </div>

          <div className="inputBox">
            <input type="email" id="email" required />
            <label htmlFor="email">email</label>
          </div>

          <div className="inputBox">
            <input type="tel" id="phone" required />
            <label htmlFor="phone">phone number</label>
          </div>

          <div className="inputBox">
            <textarea id="message" required></textarea>
            <label htmlFor="message">message</label>
          </div>

          <input type="submit" value="send message" className="btn" />
        </form>
      </section>
    </>
  );
};

export default Contact;
