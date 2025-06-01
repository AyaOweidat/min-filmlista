import React from "react";

function SortButtons({ onSortAlpha, onSortGrade }) {
  return (
    <div>
      <button className="btn btn-primary me-2" onClick={onSortAlpha}>
        Alfabetisk ordning
      </button>
      <button className="btn btn-primary" onClick={onSortGrade}>
        Betygsordning
      </button>
    </div>
  );
}

export default SortButtons;