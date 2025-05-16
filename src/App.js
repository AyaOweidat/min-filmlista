import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !rating) {
      alert("Du måste ange både titel och betyg.");
      return;
    }
    onAddMovie({ title, rating: parseInt(rating) });
    setTitle("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Titel:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Titel här..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Betyg:</label>
        <select
          className="form-select"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Välj betyg här...</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-success">
        Spara film
      </button>
    </form>
  );
}

function Movie({ movie, onDelete }) {
  const stars = "⭐".repeat(movie.rating);
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {movie.title}
      <div>
        <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>{stars}</span>
        <button onClick={onDelete} className="border-0 bg-transparent text-danger fs-5">
          ❌
        </button>
      </div>
    </li>
  );
}

function Movies({ movies, onDeleteMovie }) {
  return (
    <ul className="list-group mb-4">
      {movies.map((movie, index) => (
        <Movie
          key={index}
          movie={movie}
          onDelete={() => onDeleteMovie(movie.title)}
        />
      ))}
    </ul>
  );
}

function OrderByAlphaButton({ onClick }) {
  return (
    <button className="btn btn-primary me-2" onClick={onClick}>
      Alfabetisk ordning
    </button>
  );
}

function OrderByGradeButton({ onClick }) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Betygsordning
    </button>
  );
}

function MovieApplication() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => setMovies([...movies, movie]);

  const deleteMovie = (title) =>
    setMovies(movies.filter((m) => m.title !== title));

  const sortByAlpha = () =>
    setMovies([...movies].sort((a, b) => a.title.localeCompare(b.title)));

  const sortByGrade = () =>
    setMovies([...movies].sort((a, b) => b.rating - a.rating));

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Min filmlista</h1>
      <h5>Lägg till en film</h5>
      <AddMovieForm onAddMovie={addMovie} />
      <h4>Inlagda filmer</h4>
      <Movies movies={movies} onDeleteMovie={deleteMovie} />
      <OrderByAlphaButton onClick={sortByAlpha} />
      <OrderByGradeButton onClick={sortByGrade} />
    </div>
  );
}

export default MovieApplication;
