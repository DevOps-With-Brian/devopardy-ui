import React from 'react';

const QuestionModal = ({ question, onClose }) => {
  return (
    <div className="question-modal">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <h3 className="question-modal-category">{question.category.name}</h3>
      <div className="question-modal-question">{question.question}</div>
      <div className="question-modal-answer">{question.answer}</div>
    </div>
  );
};

export default QuestionModal;
