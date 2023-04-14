import React from "react";
import "./Filter.css"

const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={onTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="0"
        max="10"
        step="0.5"
        value={rate}
        onChange={onRateChange}
      />
    </div>
  );
};

export default Filter;
