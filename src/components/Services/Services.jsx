import React, { useContext } from "react";
import "./Services.css";
// import Card from "../Card/Card";
import { themeContext } from "../../Context";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="services">
      {" "}
      <div className="container">
        <div className="heading">
          <h3 id="heading">Books</h3>
          <span id="subheading">Various types of books available</span>
        </div>

        <div className="main">
          <div className="card">
            <img
              src="https://www.peppersquare.com/wp-content/uploads/2022/07/UX-UI-Design-Blog@2x.png"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">UI/UX</h5>
              <p className="card-text">
                UX/UI Design Professional Certificate
                <br />
                Duration: 6 Months
                <br />
                Fees: 1,50,000
              </p>
              <a href="/" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>

          <div className="card">
            <img
              src="https://www.peppersquare.com/wp-content/uploads/2022/07/UX-UI-Design-Blog@2x.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">UI/UX</h5>
              <p className="card-text">
                UX/UI Design Professional Certificate
                <br />
                Duration: 6 Months
                <br />
                Fees: 1,50,000
              </p>
              <a href="/" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.peppersquare.com/wp-content/uploads/2022/07/UX-UI-Design-Blog@2x.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">UI/UX</h5>
              <p className="card-text">
                UX/UI Design Professional Certificate
                <br />
                Duration: 6 Months
                <br />
                Fees: 1,50,000
              </p>
              <a href="/" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.peppersquare.com/wp-content/uploads/2022/07/UX-UI-Design-Blog@2x.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">UI/UX</h5>
              <p className="card-text">
                UX/UI Design Professional Certificate
                <br />
                Duration: 6 Months
                <br />
                Fees: 1,50,000
              </p>
              <a href="/" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.peppersquare.com/wp-content/uploads/2022/07/UX-UI-Design-Blog@2x.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">UI/UX</h5>
              <p className="card-text">
                UX/UI Design Professional Certificate
                <br />
                Duration: 6 Months
                <br />
                Fees: 1,50,000
              </p>
              <a href="/" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.peppersquare.com/wp-content/uploads/2022/07/UX-UI-Design-Blog@2x.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">UI/UX</h5>
              <p className="card-text">
                UX/UI Design Professional Certificate
                <br />
                Duration: 6 Months
                <br />
                Fees: 1,50,000
              </p>
              <a href="/" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
          <br />
          <div className="card">
            <img
              src="https://www.peppersquare.com/wp-content/uploads/2022/07/UX-UI-Design-Blog@2x.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">UI/UX</h5>
              <p className="card-text">
                UX/UI Design Professional Certificate
                <br />
                Duration: 6 Months
                <br />
                Fees: 1,50,000
              </p>
              <a href="/" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.peppersquare.com/wp-content/uploads/2022/07/UX-UI-Design-Blog@2x.png"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">UI/UX</h5>
              <p className="card-text">
                UX/UI Design Professional Certificate
                <br />
                Duration: 6 Months
                <br />
                Fees: 1,50,000
              </p>
              <a href="/" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.peppersquare.com/wp-content/uploads/2022/07/UX-UI-Design-Blog@2x.png"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">UI/UX</h5>
              <p className="card-text">
                UX/UI Design Professional Certificate
                <br />
                Duration: 6 Months
                <br />
                Fees: 1,50,000
              </p>
              <a href="/" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.peppersquare.com/wp-content/uploads/2022/07/UX-UI-Design-Blog@2x.png"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">UI/UX</h5>
              <p className="card-text">
                UX/UI Design Professional Certificate
                <br />
                Duration: 6 Months
                <br />
                Fees: 1,50,000
              </p>
              <a href="/" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--Red)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
