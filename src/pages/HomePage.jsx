import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";
import About from "../components/About";
import Blog from "../components/Blog";
import ContactUs from "../components/ContactUs";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Testimonial from "../components/Testimonial";
const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        className="progress-bar position-sticky top-0"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Services />
      <Portfolio />
      <Testimonial />
      <Pricing />
      <Blog />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
