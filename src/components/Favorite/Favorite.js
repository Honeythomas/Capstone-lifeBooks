import React, { useState } from "react";
import { connect } from "react-redux";

import axios from "axios";

import { useEffect } from "react";

const Favorite = () => {
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
    <>
      <h1 style={{ textAlign: "center" }}>Read your Favorite Book</h1>
      <div
        className="fav"
        style={{
          height: "100%",
          width: "100%",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(4, 1fr)",
          margin: "20px",
        }}
      >
        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnsUcsTOcYGdrnoVfMrGjs89-oVDyCOjvDQ&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <h5 className="card-title">Book title</h5>
          <p className="card-text">
            Some quick example text to build on the Book title and make up the
            bulk of the book's content.
          </p>
          <a href="/" className="btn btn-primary">
            Read book
          </a>
        </div>

        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnsUcsTOcYGdrnoVfMrGjs89-oVDyCOjvDQ&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <h5 className="card-title">Book title</h5>
          <p className="card-text">
            Some quick example text to build on the Book title and make up the
            bulk of the book's content.
          </p>
          <a href="/" className="btn btn-primary">
            Read book
          </a>
        </div>

        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnsUcsTOcYGdrnoVfMrGjs89-oVDyCOjvDQ&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <h5 className="card-title">Book title</h5>
          <p className="card-text">
            Some quick example text to build on the Book title and make up the
            bulk of the book's content.
          </p>
          <a href="/" className="btn btn-primary">
            Read book
          </a>
        </div>

        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnsUcsTOcYGdrnoVfMrGjs89-oVDyCOjvDQ&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <h5 className="card-title">Book title</h5>
          <p className="card-text">
            Some quick example text to build on the Book title and make up the
            bulk of the book's content.
          </p>
          <a href="/" className="btn btn-primary">
            Read book
          </a>
        </div>
        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnsUcsTOcYGdrnoVfMrGjs89-oVDyCOjvDQ&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <h5 className="card-title">Book title</h5>
          <p className="card-text">
            Some quick example text to build on the Book title and make up the
            bulk of the book's content.
          </p>
          <a href="/" className="btn btn-primary">
            Read book
          </a>
        </div>
        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnsUcsTOcYGdrnoVfMrGjs89-oVDyCOjvDQ&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <h5 className="card-title">Book title</h5>
          <p className="card-text">
            Some quick example text to build on the Book title and make up the
            bulk of the book's content.
          </p>
          <a href="/" className="btn btn-primary">
            Read book
          </a>
        </div>
        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnsUcsTOcYGdrnoVfMrGjs89-oVDyCOjvDQ&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <h5 className="card-title">Book title</h5>
          <p className="card-text">
            Some quick example text to build on the Book title and make up the
            bulk of the book's content.
          </p>
          <a href="/" className="btn btn-primary">
            Read book
          </a>
        </div>
        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnsUcsTOcYGdrnoVfMrGjs89-oVDyCOjvDQ&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <h5 className="card-title">Book title</h5>
          <p className="card-text">
            Some quick example text to build on the Book title and make up the
            bulk of the book's content.
          </p>
          <a href="/" className="btn btn-primary">
            Read book
          </a>
        </div>
      </div>
      ;
    </>
  );
};

export default Favorite;
