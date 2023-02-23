import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.skillsyouneed.com/images/rhubarb/online-learning-student.jpg"
                className="d-block w-100"
                alt="..."
                width="900px"
                height="425px"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/07/learning_platform.jpeg.jpg"
                className="d-block w-100"
                alt="..."
                width="900px"
                height="425px"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.elearningindustry.com/wp-content/uploads/2021/10/Online-Learning-Side-Effects-For-Students.png"
                className="d-block w-100"
                alt="..."
                width="900px"
                height="425px"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
