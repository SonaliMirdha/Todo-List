import React from 'react';

const FilterBar = ({ total, left, setFilter, clearCompleted }) => {
  return (
    <div className="filter-bar">
      <span>{left} items left</span>
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default FilterBar;
