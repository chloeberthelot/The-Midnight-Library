import { useState } from "react";
import "../css/SearchBooks.css";

function SearchBooks({ addBook }) {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState(
    [],
  ); /*[] : est un tableau vide car results va contenir une liste de livres trouvés*/

  async function handleSearch() {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}`,
    );
    const data = await response.json();
    setResults(data.docs);
  }
  function handleAdd(book) {
    const newBook = {
      id: Date.now(),
      title: book.title,
      author: book.author_name?.[0] || "Unknown author",
      genre: "Unknown genre",
      rating: "Unknown rating",
      cover: `https://covers.openlibrary.org/b/id/${book.cover_i || "0"}-L.jpg`,
    };
    addBook(newBook);
  }

  return (
    <div className="search-page">
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Title, author..."
        />
        <button onClick={handleSearch} type="button">
          Search
        </button>
      </div>

      <div className="search-results">
        {results.map((book) => (
          <div key={book.key} className="search-result-card">
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i || "0"}-L.jpg`}
              alt={book.title}
            />
            <h3>{book.title}</h3>
            <h4>{book.author_name?.[0] || "Auteur inconnu"}</h4>
            <button className="add-btn" onClick={() => handleAdd(book)}>
              Add to library
            </button>
            {/* 
  JavaScript propose une syntaxe spécialement conçue pour ce cas : le ?. 
  (au lieu du . classique) vérifie d'abord que la valeur existe avant 
  d'essayer d'accéder à sa propriété. Si elle n'existe pas, ça retourne 
  simplement undefined au lieu de faire planter le code.
*/}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBooks;
