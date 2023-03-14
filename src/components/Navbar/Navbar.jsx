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
          <Link to="/">
            <button type="button" className="btn btn-info">
              Life-Books
            </button>
          </Link>
          <Toggle />
        </div>
        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <button type="button" className="btn btn-info">
                  <Link to="/intro">Why LifeBooks</Link>
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-info">
                  <Link to="/services">Books</Link>
                </button>
              </li>
            </ul>
          </div>
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
        <Link activeClass="active" to="Favorite" spy={true} smooth={true}>
          <span className="n-right">
            <button type="button" className="btn btn-info">
              <span>&#10084; Favorites</span>
            </button>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default navbar;
