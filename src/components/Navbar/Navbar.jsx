import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div
      className="n-wrapper"
      id="Navbar"
      style={{ backgroundColor: "White", display: "flex" }}
    >
      {/* left */}
      <div className="n-left">
        <div className="n-name">
          <button className="button n-button">Life-Coach</button>
        </div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Why Lifecoach
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Courses
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Lets Connect</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
