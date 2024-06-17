import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // add event listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${headerFixed
        ? "header-fixed fadeInUp"
        : ""}`}
    >
      {/* <div className={`header-top d-md-nonse ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              {" "}<span>Create Accout </span>
            </Link>
            <Link to="/login">
              {" "}<span>Login </span>
            </Link>
          </div>
        </div>
      </div> */}

      {/* header bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/shop"}>Shop</Link>
                    <Link to={"/blog"}>Blog</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>

              {/* signup and login  */}
              <Link to={"/sign-up"} className="lab-btn me-3 d-none d-md-block">
                Signup
              </Link>
              <Link to={"/login"} className="d-none d-md-block">
                Login
              </Link>

              {/* menu toggle */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span> </span>
                <span> </span>
                <span> </span>
              </div>

              {/* social logo */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
