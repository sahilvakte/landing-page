import React from "react";
import "../Enavbar/Enavbar.css";

import Strike from "../../Assets/SVG/strike.svg"
import Cart from "../../Assets/SVG/cart.svg"
import User from "../../Assets/SVG/user.svg"

const Enavbar = () => {
  return (
    <div>
      <nav className="ebeauty-navbar">
        {/*  LOGO  */}
        <div>
          <a href="/" class="ebeauty-logo">
            <h3>eBeauty</h3>
          </a>
        </div>
        {/* NAVIGATION MENU */}
        <ul className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div className="ebeauty-nav-menu">
            <div className="nav-part-one">
              <li>
                <a href="/">
                  <h3>HOME</h3>
                </a>
              </li>
              <li>
                <a href="/">
                  <h3>PRODUCTS</h3>
                </a>
              </li>
              <li>
                <a href="/">
                  <h3>BLOG</h3>
                </a>
              </li>
              <li>
                <a href="/">
                  <h3>CONTACT</h3>
                </a>
              </li>
            </div>
            <a href="/">
              <img
                // src="https://svgsilh.com/svg/305555.svg"
                src={Strike}
                className="strike-symbol"
              />
            </a>
            <a href="/">
              <img
                // src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
                src={Cart}
                className="ebeauty-cart-symbol"
              />
            </a>
            <a href="/">
              <img
                // src="http://simpleicon.com/wp-content/uploads/user1.svg"
                src={User}
                className="user-symbol"
              />
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Enavbar;
