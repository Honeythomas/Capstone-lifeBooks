import React from "react";

const BookDetail = ({ show, book, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i class="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{book.volumeInfo.title}</h1>
              <h3>{book.volumeInfo.authors}</h3>
              <h4>
                {book.volumeInfo.categories}
                <span>{book.volumeInfo.pageCount}</span>
              </h4>
              <br />
              <a href={book.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{book.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};
export default BookDetail;
