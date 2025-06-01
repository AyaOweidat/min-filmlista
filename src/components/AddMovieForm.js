import React, { useState } from "react";

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
  
  export default AddMovieForm;
