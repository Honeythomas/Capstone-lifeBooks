import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

const navbar = () => {
  return (
    <section id="navbar-container">
      <div className="n-wrapper" id="Navbar">
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
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                >
                  Books
                </Link>
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
          SignIn
        </button>
      </div>
    </section>
  );
};

export default navbar;
