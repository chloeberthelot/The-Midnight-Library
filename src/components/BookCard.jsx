import "../css/BookCard.css";

function BookCard({ book, onSelect, onDelete }) {
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
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          if (window.confirm("Delete card?")) {
            onDelete(book.id);
          }
        }}
      >
        Delete
      </button>
    </div> /*e.stopPropagation() en premier, avant le confirm.
Le confirm doit englober l'appel à onDelete sinon onDelete s'exécute toujours, qu'on clique OK ou Annuler.*/
  );
}

export default BookCard;
