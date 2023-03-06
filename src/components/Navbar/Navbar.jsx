import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

const navbar = () => {
  return (
    <section id="navbar-container">
      <div className="n-wrapper" id="Navbar">
        {/* left */}
        <div className="n-left">
          <Link to="/home">
            <button className="button n-button">Life-Books</button>
          </Link>
          <Toggle />
        </div>
        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link to="/intro">Why LifeBooks</Link>
              </li>
              <li>
                <Link to="/services">Books</Link>
              </li>
            </ul>
          </div>
          <Link to="contact" spy={true} smooth={true}>
            <button className="button n-button">Lets Connect</button>
          </Link>
        </div>
        <button className="signIn">
          <div>
            <LoginSocialGoogle
              client_id={
                "152492302489-fsc5lmrptmjg3ndads629eu6ll3b1k0s.apps.googleusercontent.com"
              }
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ provider, data }) => {
                console.log(provider, data);
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
          </div>
        </button>
        <Link activeClass="active" to="Cart" spy={true} smooth={true}>
          <span className="n-right">
            <button>
              <i className="fas fa-cart-plus">Cart</i>
            </button>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default navbar;
