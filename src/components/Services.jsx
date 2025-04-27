import { motion } from "framer-motion";
import React from "react";
import servicesData from "../data/service.json";
import { fadeIn } from "../utility/motionVariants";
import SectionTitle from "./common/SectionTitle";

const Services = () => {
  return (
    <section className="sec-p" id="services">
      <div className="container">
        <SectionTitle text="Services" />
        <div className="row mt-5">
          {servicesData.map((service) => (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={service.id}
              className="col-12 col-md-6 col-xl-4 mb-5"
            >
              <div className="service-box bg-white p-4 rounded text-center">
                <div className="service-icon bg-primary p-3 rounded-circle">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="service-content mt-3">
                  <h4 className="text-big font-semibold">{service.title}</h4>
                  <p className="text-small mt-2">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
