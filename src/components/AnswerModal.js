import './AnswerModal.css';

const AnswerModal = ({ 
  question, 
  answer, 
  handleClose, 
  showAnswer,
  handleShowAnswer,
}) => {
  
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
          <button className="show-answer-btn" onClick={handleShowAnswer}>Show Answer</button>
        )}
      </div>
    </div>
  );
};

export default AnswerModal;
