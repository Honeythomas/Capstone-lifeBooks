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
                src="https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2020/04/Read-full-books-online-the-best-sites.jpg?resize=540%2C540&ssl=1"
                className="d-block w-100"
                alt="..."
                width="900px"
                height="425px"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.newrepublic.com/3b5f4fa15f912f5ab4084f381441148c1d85b0c4.jpeg?auto=compress&ar=3%3A2&fit=crop&crop=faces&fm=jpg&ixlib=react-9.0.2&w=958&q=65&dpr=1"
                className="d-block w-100"
                alt="..."
                width="900px"
                height="425px"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.learninga-z.com/user_area/uploads/RK-overview.jpg"
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
