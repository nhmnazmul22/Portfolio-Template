import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../utility/motionVariants";

const SectionTitle = ({ text = "", className = "" }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className={`section-title text-big font-bold ${className}`}
    >
      <p>{text}</p>
    </motion.div>
  );
};

export default SectionTitle;
