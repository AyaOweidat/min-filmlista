import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMovieForm from "./components/AddMovieForm";
import MovieList from "./components/MovieList";
import SortButtons from "./components/SortButtons";

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
      <MovieList movies={movies} onDeleteMovie={deleteMovie} />
      <SortButtons onSortAlpha={sortByAlpha} onSortGrade={sortByGrade} />
    </div>
  );
}

export default MovieApplication;