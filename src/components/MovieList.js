import React from "react";

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

function MovieList({ movies, onDeleteMovie }) {
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

export default MovieList;