import React, { useContext } from "react";
import "./Services.css";
// import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { useState } from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  // context

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [defaultBooks, setDefaultBooks] = useState([]);
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyCSgKYlV81NkINiQVeQROmctOfzOuNluzQ"
  );
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=flowers&filter=0&num=10&uid=11122233344455566778&source=gbs_slider_cls_metadata_0_mylibrary=AIzaSyCSgKYlV81NkINiQVeQROmctOfzOuNluzQ"
      );
      const defaultBooks = await response.json();
      // setDefaultBooks(defaultBooks.data.items);
      console.log(defaultBooks);
      setDefaultBooks(defaultBooks.items);
    }
    fetchData();
  }, []);

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
            <div className="input-group">
              <input
                type="text"
                onChange={handleChange}
                className="input-control mb-10"
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
              <a target="blank" href={book.volumeInfo.description}>
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.title}
                />

                <h6>{book.volumeInfo.authors}</h6>
                <h6>{book.saleInfo.saleability}</h6>
                <button>Add to Cart</button>
              </a>
            ))}
          </div>

          <div className="main">
            {defaultBooks.map((book) => (
              <a target="blank" href={book.volumeInfo.description}>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.title}
                />
                <h6>{book.volumeInfo.authors}</h6>
                <h6>{book.saleInfo.saleability}</h6>
                <button>Add to Cart</button>
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
