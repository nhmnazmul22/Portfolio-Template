import React from "react";

const Button = ({ text = "Submit", classNames, type = "button" }) => {
  return (
    <button type={type} className={`btn bg-primary text-white px-4 fw-semibold ${classNames}`}>
      {text}
    </button>
  );
};

export default Button;
