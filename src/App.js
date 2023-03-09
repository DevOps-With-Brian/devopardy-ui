import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Category from './components/Category';
import Question from './components/Question';

import './App.css';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://jservice.io/api/categories?count=6');
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  const fetchQuestions = async (categoryId) => {
    const response = await axios.get(`https://jservice.io/api/clues?category=${categoryId}&count=5`);
    setQuestions(response.data);
  };

  return (
    <Router>
      <div className="devopardy-game">
        <h1 className="devopardy-title">Devopardy</h1>
        <div className="category-grid">
          {categories.map((category) => (
            <Category
              key={category.id}
              id={category.id}
              name={category.title}
              onClick={() => fetchQuestions(category.id)}
              className="category-grid-item"
            />
          ))}
        </div>
        <div className="question-grid">
          <Routes>
            {questions.map((question) => (
              <Route
                key={question.id}
                path={`/category/${question.category_id}`}
                element={<Question question={question} />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
