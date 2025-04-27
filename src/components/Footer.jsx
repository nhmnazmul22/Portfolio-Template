import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="sec-p">
        <div className="container">
          <div className="row justify-content-between gap-3 gap-md-0">
            <div className="col-12 col-md-5">
              <h4 className="text-dark text-base">About Us</h4>
              <p className="text-dark">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                minima, modi quidem eveniet est quae repudiandae nam molestiae
                repellat odit provident itaque odio, dolor dolore veritatis
                animi, ex accusantium tenetur!
              </p>
            </div>
            <div className="col-12 col-md-3">
              <h4 className="text-dark text-base">Pages</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <h4 className="text-dark text-base">Legal</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Privacy & Policy</a>
                </li>
                <li>
                  <a href="#">Trams and Condition</a>
                </li>
                <li>
                  <a href="#">Pricing Policy</a>
                </li>
                <li>
                  <a href="#">Money Back Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-4 bottom-footer">
        <p className="text-center text-white text-small font-normal">
          Copyright © 2024 - All right reserved by Nhm Develop Solution
        </p>
      </div>
    </>
  );
};

export default Footer;
