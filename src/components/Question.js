import React, { useState } from 'react';

const Question = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswerClick = () => {
    setShowAnswer(true);
  };

  return (
    <div className="question-grid-item">
      <div className="question-value">${question.value}</div>
      <div className="question-text">
        <h3>{question.question}</h3>
        {!showAnswer && (
          <button className="question-answer-btn" onClick={handleAnswerClick}>
            Show Answer
          </button>
        )}
      </div>
      {showAnswer && (
        <div className="question-answer" data-value={question.value}>
          {question.answer}
        </div>
      )}
    </div>
  );
};

export default Question;
