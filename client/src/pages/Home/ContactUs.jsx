import "./styles/App.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_su4zatw",
        "template_qo7x9h7",
        form.current,
        "HCOFNE0lIXSwBZrry"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="Contact" className="contact--section text-center ">
      <div>

        <h2 className="mb-5 text-5xl font-bold leading-loose mr-0 text-center uppercase">Contact Us</h2>
        <h2>Hi, What’s your name</h2>
        <p className="text-lg">Let us know how to get back to you. </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="name" className="contact--label">
            <span className="text-md"> Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="name"
              id="name"
              required
            />
          </label>
          <label htmlFor="company-name" className="contact--label">
            <span className="text-md">Company Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="company-name"
              id="company-name"
              required
            />
          </label>
          <label htmlFor="job-title" className="contact--label">
            <span className="text-md">Job Title</span>
            <input
              type="job-title"
              className="contact--input text-md"
              name="job-title"
              id="job-title"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="text"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="email" className="contact--label">
          <span className="text-md">Email</span>
          <textarea
            className="contact--input text-md"
            id="email"
            name="email"
            rows="1"
            required
          />
        </label>

        <label htmlFor="Subject" className="contact--label">
          <span className="text-md">Subject</span>
          <select
            id="choose-topic"
            name="topic"
            className="contact--input text-md"
          >
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
            <option>Item 4</option>
            <option>Item 5</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button
            type="submit"
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
