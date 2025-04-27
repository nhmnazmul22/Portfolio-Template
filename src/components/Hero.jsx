import { motion } from "framer-motion";
import React from "react";
import HeroImg from "../assets/images/Header-img.png";
import { fadeIn } from "../utility/motionVariants";
import Button from "./common/Button";

const Hero = () => {
  return (
    <header className="sec-p" id="hero">
      <div className="container">
        <div className="row align-items-center justify-content-between gap-5 gap-md-0">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="col-md-6"
          >
            <div className="hero-content">
              <span className="font-semibold text-small">Hi,</span>
              <h1 className="text-bigger font-bold">
                I'm <span className="">Nhm</span> Nazmul
              </h1>
              <h2 className="text-big font-bold">
                A <span>MERN Stack Developer</span>
              </h2>
              <p className="text-base">
                Expert in Backend and Rest Api Development
              </p>
              <div className="d-flex gap-5 mt-4">
                <Button type="button" text="Hire me" />
                <Button type="button" text="Resume" />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="col-md-6 text-center text-md-end"
          >
            <img className="img-fluid" src={HeroImg} alt="Nhm Nazmul" />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
