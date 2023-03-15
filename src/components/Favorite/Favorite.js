import React, { useState, useContext } from "react";
import { connect } from "react-redux";

import axios from "axios";

import { useEffect } from "react";
import { BookContext } from "../../BookContext";
import Popup from "reactjs-popup";

const Favorite = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyCSgKYlV81NkINiQVeQROmctOfzOuNluzQ"
  );
  const bookCtx = useContext(BookContext);

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
        {bookCtx.favorite_books &&
          bookCtx.favorite_books.map((book) => {
            return (
              <div>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.title}
                />
                <h6>{book.volumeInfo.authors}</h6>
                <a target="blank" href={book.volumeInfo.previewLink}>
                  <button className="btn btn-info">Read Book</button>
                </a>
              </div>
            );
          })}
      </div>
      ;
    </>
  );
};

export default Favorite;
