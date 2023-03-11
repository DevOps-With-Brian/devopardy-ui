import React from 'react';
import './CategoryList.css';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <div className="category-cell" key={category.id}>
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
