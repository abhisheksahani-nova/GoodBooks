import { useState } from "react";
import "./styles.css";

var bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],
  fiction: [
    { name: "Shiva Trilogy", rating: "5/5" },
    { name: "Harry Potter and the Sorcerer's Stone", rating: "4.5/5" }
  ],
  business: [
    { name: "Never Split the Difference", rating: "3.5/5" },
    { name: "Loonshots", rating: "5/5" }
  ]
};

export default function App() {
  const [currentGenre, setGenre] = useState("business");

  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>📚goodbooks</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      {Object.keys(bookDB).map((genre, index) => {
        return (
          <button
            key={index}
            className="btn"
            onClick={() => {
              clickHandler(genre);
            }}
          >
            {genre}
          </button>
        );
      })}
      <hr></hr>
      <ul>
        {bookDB[currentGenre].map((book) => {
          return (
            <li
              key={book.name}
              style={{
                width: "20%",
                border: "1px solid black",
                padding: "1em",
                margin: "1em auto",
                listStyleType: "none"
              }}
            >
              <div style={{ fontSize: "20px" }}>{book.name}</div>
              <div style={{ fontSize: "14px" }}>{book.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
