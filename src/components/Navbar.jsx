import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/light-logo.png";
import Button from "./common/Button";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3">
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
              <Link className="nav-link" aria-current="page" to="#hero">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#blogs" className="nav-link" aria-current="page">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#contact">
                <Button type="button" text="Contact" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
