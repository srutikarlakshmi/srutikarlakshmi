import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function ContactMe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rrq46d3",
        "template_v2ls2rd",
        form.current,
        "qouS6JhRwYMUWcRcJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset(); 
          alert('Your Email has been sent!')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact--section" id="Contact">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          similique?
        </p>
      </div>
      <form className="contact--form--container" ref={form} onSubmit={sendEmail} >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="from_name"
              id="first-name"
              required
            />
          </label>

          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
            />
          </label>

          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="from_email"
              id="email"
              required
            />
          </label>

          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
            />
          </label>
        </div>
{/* 
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a Topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label> */}

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms & conditions </span>
        </label>
        <div>
          <button 
          className="btn btn-primary"
          type="submit"
          value="Send"
          >Submit</button>
        </div>
      </form>
    </section>
  );
}
