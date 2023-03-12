import React, { useState } from 'react';
import './AnswerModal.css';

const AnswerModal = ({ question, answer, handleClose, questions, currentQuestion, setQuestions }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswerClick = () => {
    const updatedQuestions = questions.map((question) =>
      question.id === currentQuestion.id ? { ...question, answered: true } : question
    );
    setQuestions(updatedQuestions);
    setShowAnswer(true);
  };

  return (
    <div className="answer-modal">
      <div className="answer-modal-content">
        <span className="answer-modal-close" onClick={handleClose}>
          &times;
        </span>
        <div className="answer-modal-question">{question}</div>
        {showAnswer && (
          <div className="answer-modal-answer">{answer}</div>
        )}
        {!showAnswer && (
          <button className="show-answer-btn" onClick={handleShowAnswerClick}>Show Answer</button>
        )}
      </div>
    </div>
  );
};

export default AnswerModal;
