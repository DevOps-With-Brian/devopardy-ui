import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Category from './components/Category';

import './App.css';

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('http://localhost:9000/categories?count=6');
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  return (
    <Router>
      <div className="devopardy-game">
        <h1 className="devopardy-title">Devopardy</h1>
        <div className="category-grid">
          {categories.map((category) => (
            <Category key={category.id} id={category.id} name={category.name} />
          ))}
        </div>
        <div className="question-grid">
          <Routes>
            {categories.map((category) => (
              <Route
                key={category.id}
                path={`/category/${category.id}`}
                element={<Category id={category.id} name={category.name} />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
