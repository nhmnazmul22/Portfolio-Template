import React from "react";

const Button = ({ text = "Submit", classNames, type = "button" }) => {
  return (
    <button
      type={type}
      className={`btn px-4 fw-semibold ${
        classNames ? classNames : "bg-primary text-white "
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
