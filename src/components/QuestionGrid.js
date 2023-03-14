import React from 'react';
import QuestionCell from './QuestionCell';
import './QuestionGrid.css';

const QuestionGrid = ({ categories, questions, onQuestionClick }) => {
    if (!categories || !Array.isArray(categories) || categories.length < 6) {
        return <div>Invalid categories</div>;
      }
    
      if (!questions || !Array.isArray(questions) || questions.length < 30) {
        return <div>Invalid questions</div>;
      }
    return (
        <div className="question-grid">
        <div className="category-row">
            {categories.map((category) => (
            <div className="category-cell" key={category.id}>
                <h3>{category.name}</h3>
            </div>
            ))}
        </div>
        {[100, 200, 300, 400, 500].map((value) => (
            <div className="value-row" key={value}>
            {categories.map((category) => {
                const question = questions.find((q) => q.category_id === category.id && q.value === value);
                return (
                    <QuestionCell
                    key={category.id + value}
                    category={category}
                    question={question}
                    value={value}
                    onQuestionClick={onQuestionClick}
                />
                );
            })}
            </div>
        ))}
        </div>
    );
};

export default QuestionGrid;
