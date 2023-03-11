import React, { useState } from 'react';
import './AnswerModal.css';

const AnswerModal = ({ question, answer, handleClose }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswerClick = () => {
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
