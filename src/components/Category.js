import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'; // import your CSS file for Category component

const Category = ({ id, name, onClick }) => {
  return (
    <Link to={`/category/${id}`} className="category" onClick={onClick}>
      <div className="category-grid-item">
        <h2>{name}</h2>
      </div>
    </Link>
  );
};

export default Category;