import { useState } from "react";
import "../css/AddBookForm.css";

function AddBookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title: title,
      cover: cover,
      author: author,
      genre: genre,
      rating: rating,
      summary: summary,
    };

    addBook(newBook);

    setTitle("");
    setCover("");
    setAuthor("");
    setGenre("");
    setRating("");
    setSummary("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title of the book"
        required
      />
      <input
        type="url"
        value={cover}
        onChange={(e) => setCover(e.target.value)}
        placeholder="URL Image"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
        <option value="" disabled hidden>
          Select genre
        </option>
        <option value="Fantasy">Fantasy</option>
        <option value="Thriller">Thriller</option>
      </select>
      <input
        type="number"
        value={rating}
        onChange={(e) => {
          if (Number(e.target.value) <= 5 && Number(e.target.value) >= 0) {
            setRating(Number(e.target.value));
          }
        }}
        placeholder="Your rating"
      />
      <input
        type="text"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Summary"
        required
      />
      <button className="submit-btn" type="submit">
        Add new book
      </button>
    </form>
  );
}

export default AddBookForm;
