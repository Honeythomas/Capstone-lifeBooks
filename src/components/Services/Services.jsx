import React, { useContext } from "react";
import "./Services.css";
// import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyCSgKYlV81NkINiQVeQROmctOfzOuNluzQ"
  );

  function handleChange(event) {
    const book = event.target.value;

    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }

  return (
    <div className="services" id="services">
      {" "}
      <div className="container">
        <div className="heading">
          <h3 id="heading">Books</h3>
          <span id="subheading">Various types of books available</span>
        </div>

        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                onChange={handleChange}
                className="form-control mb-10"
                placeholder="Search for Books"
                autoComplete="off"
              />

              <button type="submit" className="btn btn-danger">
                Search
              </button>
            </div>
          </form>
          <div className="main">
            {result.map((book) => (
              <a target="blank" href={book.volumeInfo.previewLink}>
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.title}
                />
              </a>
            ))}
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
