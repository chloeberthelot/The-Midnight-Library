import "../css/BookCard.css";

function BookCard({ book, onSelect }) {
  return (
    <div
      className="book-card"
      onClick={() => {
        console.log("clic");
        onSelect();
        console.log("après onSelect");
      }}
    >
      <img src={book.cover} alt={book.title} />
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <p className="genre-badge">{book.genre}</p>
      <p>{"⭐".repeat(book.rating)}</p>
    </div>
  );
}

export default BookCard;
