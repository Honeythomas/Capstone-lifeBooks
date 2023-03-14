import React, { useState } from "react";
import { useSelector } from "react-redux";

const Favorite = () => {
  const SETADDTOFAVORITE = useSelector((state) => state.data);

  return (
    <div>
      {SETADDTOFAVORITE.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
};
// const Favorite = () => {

//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Read your Favorite Book</h1>
//       <div
//         className="fav"
//         style={{
//           height: "100%",
//           width: "100%",
//           display: "grid",
//           gap: "20px",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           margin: "20px",
//         }}
//       >
//         <div className="card-body">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnsUcsTOcYGdrnoVfMrGjs89-oVDyCOjvDQ&usqp=CAU"
//             className="card-img-top"
//             alt="..."
//           />
//           <h5 className="card-title">Book title</h5>
//           <p className="card-text" style={{ color: "white" }}>
//             Some quick example text to build on the Book title and make up the
//             bulk of the book's content.
//           </p>
//           <a href="/" className="btn btn-primary">
//             Read book
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

export default Favorite;
