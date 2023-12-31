import "./styles/App.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [company, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();

    setName("");
    setCompanyName("");
    setTitle("");
    setMobile("");
    setEmail("");
    setMessage("");

    sendEmail(event);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yb8nsjm",
        "template_276qyf3",
        form.current,
        "hHU1UGhLj10m-uG_H"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Show SweetAlert success message
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your Inquery has been sent successfully.",
          });

          // Clear form fields
          setName("");
          setCompanyName("");
          setTitle("");
          setMobile("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          // Show SweetAlert error message
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
          });
        }
      );
  };
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <section id="Contact" className="contact--section text-center ">
      <div>
        <motion.div variants={container} initial="hidden" whileInView="visible">
          <h2 className=" text-4xl font-bold leading-loose mr-0 text-center uppercase">
            Send Your Inqueries
          </h2>
          {/* <h2>Hi, What’s your name</h2>
          <p className="text-lg">Let us know how to get back to you. </p> */}
        </motion.div>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="contact--form--container"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="name" className="contact--label">
              <span className="text-md"> Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="name"
                id="name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                required
              />
            </label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="company-name" className="contact--label">
              <span className="text-md">Company Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="company-name"
                id="company-name"
                onChange={(event) => setCompanyName(event.target.value)}
                value={company}
                required
              />
            </label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="job-title" className="contact--label">
              <span className="text-md">Job Title</span>
              <input
                type="job-title"
                className="contact--input text-md"
                name="job-title"
                id="job-title"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                required
              />
            </label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">Phone Number</span>
              <input
                type="text"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                onChange={(event) => setMobile(event.target.value)}
                value={mobile}
                required
              />
            </label>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              id="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
          </label>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              name="message"
              rows="5"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              placeholder="Type your message..."
              required
            />
          </label>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <label htmlFor="checkboc" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>
        </motion.div> */}
        <div>
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
