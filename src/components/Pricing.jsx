import { motion } from "framer-motion";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import pricingData from "../data/pricing.json";
import { fadeIn } from "../utility/motionVariants";
import SectionTitle from "./common/SectionTitle";

const Pricing = () => {
  return (
    <section className="sec-p">
      <div className="container">
        <SectionTitle text="Pricing" />
        <div className="row mt-5 pt-5">
          {pricingData.map((pricing) => (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="pricing-box">
                <div className="pricing-head text-center bg-darkBlue text-white position-relative ">
                  <p className="bg-primary text-white rounded-circle font-semiBold text-base">
                    {pricing.price}$
                  </p>
                  <h3 className="px-3">{pricing.packageName}</h3>
                  <p className="p-3 description">{pricing.description}</p>
                </div>
                <div className="pricing-body bg-white pt-3 pb-4">
                  <ul className="features px-3">
                    {pricing.features.map((feature, index) => (
                      <li
                        key={index}
                        className="list-item list-unstyled text-base mb-1"
                      >
                        <FaCheckCircle color="#0b9aea" />
                        <span className="ms-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-5">
                    <a href="#" className="btn bg-primary px-5 py-2 text-white">
                      Try for Free
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
