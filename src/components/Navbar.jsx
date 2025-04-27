import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/light-logo.png";
import Button from "./common/Button";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3 position-sticky top-0 bg-white shadow-sm">
      <div className="container position-relative">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Nhm Nazmul" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse mobile-menu"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#blogs" className="nav-link" aria-current="page">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact">
                <Button type="button" text="Contact" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
