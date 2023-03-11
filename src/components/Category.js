import React, { useState, useEffect } from 'react';
import './Category.css';
import axios from 'axios';
import Question from './Question';

const Category = ({ id, name }) => {
  const [clues, setClues] = useState([]);

  useEffect(() => {
    const fetchClues = async () => {
      const response = await axios.get(`http://localhost:8004/categories/${id}/start_game`);
      setClues(response.data);
    };

    fetchClues();
  }, [id]);

  return (
    <div className="category-grid-item">
      <div className="category">
        <h2>{name}</h2>
      </div>
      <div className="question-container">
        {clues.map((clue) => (
          <Question
            key={clue.id}
            clue={clue}
            updatedClues={clues}
            setUpdatedClues={setClues}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
