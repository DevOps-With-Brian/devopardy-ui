import React, { useState } from 'react';
import './Question.css';
import AnswerModal from './AnswerModal';

const Question = ({ clue }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
    setShowAnswer(false);
  };

  const handleShowAnswerClick = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
    setClicked(true);
  };

  const questionValueClass = clicked ? 'question-value clicked' : 'question-value';

  return (
    <div className="question-container">
      <div
        className={questionValueClass}
        onClick={() => setShowModal(true)}
      >
        {clue.showModal ? '' : `$${clue.value}`}
      </div>
      {showModal && (
        <AnswerModal
          question={clue.question}
          answer={clue.answer}
          show={showAnswer}
          handleClose={handleModalClose}
          handleShowAnswer={handleShowAnswerClick}
        />
      )}
    </div>
  );
};

export default Question;
