import BookCard from "./BookCard";
import { useState } from "react";
import "./css/Library.css";

function Library({ books }) {
  const [selectedBook, setSelectedBook] = useState(null);

  const [selectedGenre, setSelectedGenre] = useState("");

  const genres = books.reduce((acc, book) => {
    if (!acc.includes(book.genre)) {
      acc.push(book.genre);
    }
    return acc;
  }, []);

  const filteredBooks = books.filter((book) => {
    return selectedGenre === "" || book.genre === selectedGenre;
  });

  return (
    <div className="library">
      <div className="genre-filters">
        {genres.map((genre) => (
          <button
            className="genre-btn"
            key={genre}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
        <button className="allgenre-btn" onClick={() => setSelectedGenre("")}>
          All
        </button>
      </div>

      <div className="books-list">
        {filteredBooks.map((book) => (
          <BookCard
            book={book}
            key={book.id}
            onSelect={() => setSelectedBook(book)}
          />
        ))}
      </div>
      {selectedBook && (
        <div className="modal-overlay">
          <div className="modal">
            <img src={selectedBook.cover} alt={selectedBook.title} />
            <h3>{selectedBook.title}</h3>
            <h4>{selectedBook.author}</h4>
            <p className="summary">{selectedBook.summary}</p>
            <button className="close-btn" onClick={() => setSelectedBook(null)}>
              ✘
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Library;
