import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
import axios from 'axios';
import Question from './Question';

const Category = ({ id, name }) => {
  const [clues, setClues] = useState([]);

  useEffect(() => {
    const fetchClues = async () => {
      const response = await axios.get(`http://localhost:9000/categories/${id}/clues`);
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
