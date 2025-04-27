import { motion } from "framer-motion";
import React from "react";
import contactImg from "../assets/images/contact.svg";
import { fadeIn } from "../utility/motionVariants";
import SectionTitle from "./common/SectionTitle";

const ContactUs = () => {
  return (
    <section className="sec-p" id="contact">
      <div className="container">
        <SectionTitle text="Contact Us" />
        <div className="row mt-5 align-items-center gap-3 justify-content-between">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="col-12 col-md-5"
          >
            <div className="">
              <img
                className="img-fluid contact-img"
                src={contactImg}
                alt="Contact us"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="col-12 col-md-6"
          >
            <form className="contact-form d-flex flex-column gap-3">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Write your message"
                />
              </div>
              <button type="submit" className="btn bg-primary text-white">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
