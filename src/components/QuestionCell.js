import React from 'react';
import './QuestionCell.css';

const QuestionCell = ({ question, onQuestionClick }) => {
    return (
      <div
        className={`question-cell ${question.answered ? "answered" : ""}`}
        onClick={() => onQuestionClick(question)}
      >
        <div className="question-cell-value">{question.value}</div>
        <div className="question-cell-category">{question.category}</div>
      </div>
    );
  };

export default QuestionCell;
