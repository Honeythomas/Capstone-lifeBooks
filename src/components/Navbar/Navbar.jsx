import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div
      className="n-wrapper"
      id="Navbar"
      style={{ backgroundColor: "Aqua", display: "flex" }}
    >
      {/* left */}
      <div className="n-left">
        <Link to="Home" spy={true} smooth={true}>
          <button className="button n-button">Life-Books</button>
        </Link>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Intro" spy={true} smooth={true}>
                Why LifeBooks
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="services" spy={true} smooth={true}>
                Books
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
