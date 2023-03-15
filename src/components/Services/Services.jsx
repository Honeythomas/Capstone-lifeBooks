import React, { useContext } from "react";
import "./Services.css";
// import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { useState } from "react/cjs/react.development";
// import ReactDOM from "react-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BookDetail from "../BookDetail/BookDetail";
import Cart from "../Favorite/Favorite";
import Popup from "reactjs-popup";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../Redux/Actions/index";
import { BookContext } from "../../BookContext";

const Services = () => {
  // context
  const bookCtx = useContext(BookContext);
  console.log("Book ctx:", bookCtx);
  const dispatch = useDispatch();
  const addBook = useSelector((state) => state.addBook);
  const [addToFav, setAddToFav] = useState("");
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [defaultBooks, setDefaultBooks] = useState([]);
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [show, setShow] = useState(false);
  const [bookItem, setBooks] = useState();
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
  const handleAddToFav = (book) => {
    // console.log(id, "addto fav");
    // dispatch(addFavorite(id));
    console.log("book:", book);
    bookCtx.setFavorite((prev) => {
      return [...prev, book];
    });
  };
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
              <p target="blank" href={book.volumeInfo.description}>
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.title}
                />
                {console.log("Books are:", book)}

                <h6>{book.volumeInfo.authors}</h6>

                <Popup
                  trigger={
                    <button className="btn btn-info">More details</button>
                  }
                  position="right center"
                >
                  <div className="box">
                    Title: {book.volumeInfo.title}
                    <br />
                    Description: <i>{book.volumeInfo.description}</i>
                    <br />
                    <button
                      onClick={() => {
                        handleAddToFav(book);
                        console.log("Added book", book.volumeInfo);
                      }}
                      type="button"
                      className="btn btn-outline-success"
                    >
                      &#10084; Add to Favorite
                    </button>
                  </div>
                </Popup>

                <BookDetail
                  show={show}
                  item={bookItem}
                  onClose={() => setShow(false)}
                />
              </p>
            ))}
          </div>

          <div className="main">
            {defaultBooks.map((book) => (
              <p target="blank" href={book.volumeInfo.description}>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.title}
                />
                <h6>{book.volumeInfo.authors}</h6>

                <Popup
                  trigger={
                    <button className="btn btn-info">More details</button>
                  }
                  position="right center"
                >
                  <div className="box">
                    Title: {book.volumeInfo.title}
                    <br />
                    Description: <i>{book.volumeInfo.description}</i>
                    <br />
                    <button
                      onClick={() => {
                        return (
                          <>
                            {handleAddToFav(book)} console.log(book.id, "added")
                          </>
                        );
                      }}
                      type="button"
                      className="btn btn-outline-success"
                    >
                      &#10084;&#65039; Add to Favorite
                    </button>
                  </div>
                </Popup>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="blur s-blur2" style={{ background: "var(--Red)" }}></div>
    </div>
  );
};

export default Services;

// {onClick={() => addToCart(book.volumeInfo.description)}}

// &#10084;&#65039;
