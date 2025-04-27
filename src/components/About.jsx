import { motion } from "framer-motion";
import React from "react";
import aboutImg from "../assets/images/about-img.png";
import { fadeIn } from "../utility/motionVariants";
import Button from "./common/Button";
import SectionTitle from "./common/SectionTitle";

const About = () => {
  return (
    <section className="sec-p" id="about">
      <div className="container-fluid ">
        <SectionTitle text="About Me" />
        <div className="row justify-content-between mt-5 position-relative">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="col-12 col-lg-5"
          >
            <div className="w-100 h-100 bg-primary text-center">
              <img
                className="img-fluid h-100 object-fit-contain"
                style={{ objectPosition: "bottom" }}
                src={aboutImg}
                alt="Nhm Nazmul"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="col-12 col-lg-7"
          >
            <div className="bg-primary w-100 p-3 p-md-5 text-white d-flex flex-column gap-4">
              <div>
                <h2 className="text-big font-semibold">
                  I’m Nazmul Hasan Mamun
                </h2>
                <p className="text-base font-semibold">
                  MERN Stack Developer && WordPress Developer
                </p>
                <p className="text-small mt-3">
                  I'm Expert in MERN Stack Development and WordPress
                  Development. I have lot of knowledge on HTML, CSS, JavaScript
                  and Frontend Framework like, Bootstrap, Sass, Tailwind CSS,
                  React etc. I was already completed many projects using this
                  language.
                </p>
              </div>
              <div className="d-flex flex-column flex-sm-row justify-content-start align-items-sm-center gap-2 gap-sm-5">
                <div className="d-flex flex-column gap-2 text-base">
                  <p>Birthday : 26th Jun 2005</p>
                  <p>Age : 19 Years</p>
                  <p>Residence : Bangladesh</p>
                  <p>Address : Demra, Dhaka</p>
                </div>
                <div className="d-flex flex-column gap-2 text-base">
                  <p>E-mail : nhmnazmul87@gmail.com</p>
                  <p>Phone : +8801604017164</p>
                  <p>Whatsapp : +8801604017164</p>
                  <p>Freelance : Available</p>
                </div>
              </div>
              <div className="d-flex gap-4 mt-4">
                <Button
                  type="button"
                  text="Download CV"
                  classNames="bg-black text-white"
                />
                <Button
                  type="button"
                  text="Hire Me"
                  classNames="bg-white text-black"
                />
              </div>
            </div>
          </motion.div>
          <motion.div className=" position-absolute chine-box d-none d-lg-flex flex-column gap-5">
            <div className="chine"></div>
            <div className="chine"></div>
            <div className="chine"></div>
            <div className="chine"></div>
            <div className="chine"></div>
            <div className="chine"></div>
            <div className="chine"></div>
            <div className="chine"></div>
            <div className="chine"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
