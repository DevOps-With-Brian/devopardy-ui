import React, { useState, useEffect } from 'react';
import './App.css';
import QuestionGrid from './components/QuestionGrid';
import AnswerModal from './components/AnswerModal';
import LandingPage from './components/LandingPage';


const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  

  useEffect(() => { handleNewGameClick(); }, [])

  const handleStartGame = () => {
    setGameStarted(true);
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


  const renderCategoryList = () => {
    if (loading) {
      return <div>Loading...</div>;
    }
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


  const handleNewGameClick = async () => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const categoryIdsResponse = await fetch(`/api/categories?count=20`);
        if (!categoryIdsResponse.ok) {
          throw new Error('Failed to fetch category ids');
        }
        const categoryIdsData = await categoryIdsResponse.json();
        const shuffledCategoryIds = categoryIdsData
          .map(category => category.id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 6);
  
        const categories = [];
        const questions = [];
        for (let i = 0; i < shuffledCategoryIds.length; i++) {
          const categoryId = shuffledCategoryIds[i];
  
          const categoryResponse = await fetch(`/api/categories/${categoryId}`);
          if (!categoryResponse.ok) {
            throw new Error(`Failed to fetch category ${categoryId}`);
          }
          const categoryData = await categoryResponse.json();
          categories.push(categoryData);
  
          const questionsResponse = await fetch(`/api/categories/${categoryId}/clues`);
          if (!questionsResponse.ok) {
            throw new Error(`Failed to fetch questions for category ${categoryId}`);
          }
          const questionsData = await questionsResponse.json();
          console.log("This is line 48: ", questionsData)
          questionsData.forEach((question) => {
            questions.push({
              id: question.id,
              category_id: question.category_id,
              question: question.question,
              answer: question.answer,
              value: question.value,
              answered: false,
            });
          });
        }
  
        setCategories(categories);
        setQuestions(questions);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    fetchData();
    };

    return (
      <div className="app-container">
        {gameStarted ? (
          <>
            <div className="app-header">
              <div className="title-container">
                <h1>DevOpardy</h1>
                <button className="new-game-button" onClick={handleNewGameClick}>
                  New Game
                </button>
              </div>
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
          </>
        ) : (
          <LandingPage onStartGame={handleStartGame} />
        )}
      </div>
    );
  };

export default App;
