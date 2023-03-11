import React, { useState, useEffect } from 'react';
import './App.css';
import CategoryList from './components/CategoryList';
import QuestionGrid from './components/QuestionGrid';
import QuestionCell from './components/QuestionCell';
import AnswerModal from './components/AnswerModal';

const API_URL = 'http://localhost:9000';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    console.log('Fetched categories:', data);
    setCategories(data);
  };

  const fetchCategoriesAndQuestions = async (categoryIds) => {
    const questions = [];
    for (let i = 0; i < categoryIds.length; i++) {
      const categoryId = categoryIds[i];
      const response = await fetch(`${API_URL}/categories/${categoryId}/start_game`);
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      console.log(`This is line 34: ${data}`);
      data.forEach((question) => {
        questions.push({
          id: question.id,
          category_id: categoryId,
          question: question.question,
          answer: question.answer,
          value: question.value,
          answered: false,
        });
      });
    }
    console.log('Questions:', questions); // Add this line to check if the questions array is being populated
    return questions;
  };

  const handleQuestionClick = (question) => {
    setCurrentQuestion(question);
    setShowAnswerModal(true);
  };

  const handleAnswerModalClose = () => {
    setShowAnswerModal(false);
    setCurrentQuestion(null);
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === currentQuestion.id) {
          return { ...question, answered: true };
        } else {
          return question;
        }
      });
    });
  };

  const handleFetchQuestions = async (categoryIds) => {
    const newQuestions = await fetchCategoriesAndQuestions(categoryIds);
    const updatedQuestions = newQuestions.map((question) => ({
      ...question,
      answered: false,
    }));
    setQuestions(updatedQuestions);
  };

  useEffect(() => {
    fetchCategories();
    handleFetchQuestions([1, 2, 3, 4, 5, 6]); // Call handleFetchQuestions instead of fetchCategoriesAndQuestions
  }, []);

  const renderCategoryList = () => {
    if (categories.length > 0 && questions.length > 0) {
      return (
        <>
          <div className="question-grid-container">
            <QuestionGrid categories={categories} questions={questions} onQuestionClick={handleQuestionClick} />
          </div>
        </>
      );
    } else if (categories.length === 0) {
      return <div>No categories found. Please try again later.</div>;
    } else if (questions.length === 0) {
      return <div>No questions found. Please try again later.</div>;
    } else {
      return <div>Loading categories...</div>;
    }
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Devopardy</h1>
        <button className="new-game-button" onClick={() => fetchCategoriesAndQuestions([1, 2, 3, 4, 5, 6])}>
          New Game
        </button>
      </div>
      {renderCategoryList()}
      {currentQuestion && (
        <AnswerModal
          question={currentQuestion.question}
          answer={currentQuestion.answer}
          handleClose={handleAnswerModalClose}
          questions={questions}
          currentQuestion={currentQuestion}
          setQuestions={setQuestions}
        />
      )}
      {showAnswerModal && (
        <AnswerModal
          question={currentQuestion.question}
          answer={currentQuestion.answer}
          handleClose={handleAnswerModalClose}
          questions={questions}
          currentQuestion={currentQuestion}
          setQuestions={setQuestions}
        />
      )}
    </div>
  );
};

export default App;
