import { motion } from "framer-motion";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import skillsData from "../data/skill.json";
import { fadeIn } from "../utility/motionVariants";
import SectionTitle from "./common/SectionTitle";
const Skills = () => {
  return (
    <section className="sec-p" id="skills">
      <SectionTitle text="Skills" />
      <div className="skills-slider mt-4">
        <Swiper
          slidesPerView={8}
          spaceBetween={40}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={600}
          modules={[FreeMode, Autoplay]}
          className="mySwiper py-5"
        >
          {skillsData.languageSkills.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="languageSkills p-3 bg-white rounded text-center">
                <img className="skill-img" src={item.img} alt={item.name} />
                <p className="mt-2 text-base">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container mt-5">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="row gap-3 gap-md-0 justify-content-between"
        >
          {skillsData.professionalSkills.map((item, index) => (
            <div key={index} className=" col-12 col-md-6 mb-5">
              <div className="professionalSkills py-5 px-3 d-flex gap-2 justify-content-center align-items-center bg-white shadow rounded">
                <div className="">
                  <img width="70" src={item.img} alt="" />
                </div>
                <div className="flex flex-column gap-3">
                  <h1 className="text-big">{item.title}</h1>
                  <p className="skill-info text-small d-flex gap-2 flex-wrap">
                    <span className="border-end border-2 pe-2 border-primary-subtle">
                      {item.projectCompleted} Project Completed
                    </span>{" "}
                    <span>{item.experience} Years Experience</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
