import { motion } from "framer-motion";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialData from "../data/testimonial.json";
import { fadeIn } from "../utility/motionVariants";
import SectionTitle from "./common/SectionTitle";

const Testimonial = () => {
  return (
    <section className="sec-p testimonial">
      <div className="container">
        <SectionTitle text="Testimonial" />
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-base text-center mt-3"
        >
          What Think Client About Me ?
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="row mt-5"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            modules={[FreeMode, Autoplay, Pagination, Navigation]}
            breakpoints={{
              991: {
                slidesPerView: 2,
              },
            }}
            className="mySwiper py-5"
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="py-5 px-3 bg-white rounded text-center position-relative">
                  <div className="client-img">
                    <img
                      className="img-fluid"
                      src={testimonial.img}
                      alt={testimonial.name}
                    />
                  </div>
                  <h4 className="text-base font-semibold pt-3 mb-0">
                    {testimonial.name}
                  </h4>
                  <p className="text-small text-primary">{testimonial.bio}</p>
                  <p className="text-small mt-2">{testimonial.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
