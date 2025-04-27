import { motion } from "framer-motion";
import React from "react";
import { LuExternalLink } from "react-icons/lu";
import blogsData from "../data/blog.json";
import { fadeIn } from "../utility/motionVariants";
import SectionTitle from "./common/SectionTitle";

const Blog = () => {
  return (
    <section className="sec-p" id="blogs">
      <div className="container">
        <SectionTitle text="Blogs" />
        <div className="row mt-5 gap-5">
          {blogsData.map((blog, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="col-12"
            >
              <div className="row align-items-center gap-5 gap-md-0 justify-content-between">
                <div
                  className={`col-12 col-md-6 col-lg-5 ${
                    index === 1 ? "order-md-2" : ""
                  }`}
                >
                  <div className="overlay">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className=" img-fluid rounded w-100"
                    />
                    <div className="overlay-content">
                      <a
                        className="text-white link-underline link-underline-opacity-0 fw-bold btn btn-dark"
                        href={""}
                      >
                        <LuExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <span className="bg-primary p-2 p-lg-3 rounded-5 text-white text-xSmall font-semibold">
                    {blog.category}
                  </span>
                  <h2 className="text-big font-semibold mt-5 mb-4">
                    {blog.title}
                  </h2>
                  <p className="text-small mb-4">{blog.description}</p>
                  <button className="btn bg-primary text-white px-4 py-2">
                    <a
                      className="text-white link-underline link-underline-opacity-0 font-semibold"
                      href={""}
                    >
                      Read More
                    </a>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center"
        >
          <button className="btn bg-darkBlue text-white mt-5 text-base px-4 py-2">
            See More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
