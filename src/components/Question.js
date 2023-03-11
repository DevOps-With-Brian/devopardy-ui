import React from 'react';

const Question = ({ question, onAnswered }) => {
  const handleClick = () => {
    onAnswered();
  };

  return (
    <div className="question">
      <h2>{question.value}</h2>
      <p>{question.question}</p>
      <button onClick={handleClick}>Show Answer</button>
    </div>
  );
};

export default Question;