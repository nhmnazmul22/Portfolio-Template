import { motion } from "framer-motion";
import React from "react";
import downArrow from "../assets/images/downArrow.svg";
import upArrow from "../assets/images/upArrow.svg";
import educationInfo from "../data/education.json";
import { fadeIn } from "../utility/motionVariants";
import SectionTitle from "./common/SectionTitle";
const Education = () => {
  return (
    <section className="sec-p" id="education">
      <div className="container">
        <SectionTitle text="Education" />
        <div className="row mt-5">
          {educationInfo.map((item, index) => {
            if (index < 3) {
              return (
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-3"
                  key={index}
                >
                  <div className="education h-100 border-0 text-center d-flex flex-column justify-content-center p-3">
                    <h5 className="text-base font-semibold border-bottom border-2 border-primary-subtle pb-3">
                      {item.title}
                    </h5>
                    <div className="edu-info-box mt-2">
                      <p className="text-base font-playball">
                        {item.institute}
                      </p>
                      <p className="text-small">{item.address}</p>
                    </div>
                  </div>
                </motion.div>
              );
            }
          })}
          <div className="line-chine d-none d-lg-block">
            <div className="up-arrows d-flex justify-content-between w-75 m-auto">
              <div className="arrow">
                <img src={upArrow} alt="" />
              </div>
              <div className="arrow">
                <img src={upArrow} alt="" />
              </div>
              <div className="arrow">
                <img src={upArrow} alt="" />
              </div>
            </div>
            <div className="line"></div>
            <div className="down-arrows d-flex justify-content-between w-75 m-auto">
              <div className="arrow">
                <img src={downArrow} alt="" />
              </div>
              <div className="arrow">
                <img src={downArrow} alt="" />
              </div>
              <div className="arrow">
                <img src={downArrow} alt="" />
              </div>
            </div>
          </div>
          {educationInfo.map((item, index) => {
            if (index >= 3) {
              return (
                <motion.div
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="col-12 col-md-6 col-lg-4 mt-lg-3 mb-4"
                  key={index}
                >
                  <div className="education h-100 border-0 text-center d-flex flex-column justify-content-center p-3">
                    <h5 className="text-base font-semibold border-bottom border-2 border-primary-subtle pb-3">
                      {item.title}
                    </h5>
                    <div className="edu-info-box mt-2">
                      <p className="text-base font-playball">
                        {item.institute}
                      </p>
                      <p className="text-small">{item.address}</p>
                    </div>
                  </div>
                </motion.div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
