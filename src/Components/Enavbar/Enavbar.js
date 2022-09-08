import React from "react";
import "../Enavbar/Enavbar.css";

import Strike from "../../Assets/SVG/strike.svg";
import Cart from "../../Assets/SVG/cart.svg";
import User from "../../Assets/SVG/user.svg";
import { Link } from "react-router-dom";

const Enavbar = () => {
  return (
    <div>
      <div className="ebeauty-navbar-main-container">
        <div className="ebeauty-navbar-main-container-width">
          <div className="ebeauty-navbar-main-container-sub-div">
            <div>
              <h3 className="ebeauty-logo-tag">eBeauty</h3>
            </div>
            <div className="ebeauty-navbar-main-container-sub-div-one">
              <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" className="hamburger">
                  &#9776;
                </label>
                <div className="ebeauty-nav-menu">
                  <div className="nav-part-one">
                    <li>
                      <a href="/">
                        <h3>HOME</h3>
                      </a>
                    </li>
                    <li>
                      <Link to="/products">
                        <h3>PRODUCTS</h3>
                      </Link>
                    </li>
                    <li>
                      <a href="/">
                        <h3>BLOG</h3>
                      </a>
                    </li>
                    <li>
                      <Link to="/contact">
                        <h3>CONTACT</h3>
                      </Link>
                    </li>
                  </div>
                  <div className="enav-sybols-part-div">
                  <a href="/">
                    <img src={Strike} alt="" className="strike-symbol" />
                  </a>
                  <a href="/">
                    <img src={Cart} alt="" className="ebeauty-cart-symbol" />
                  </a>
                  <a href="/">
                    <img src={User} alt="" className="user-symbol" />
                  </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enavbar;
