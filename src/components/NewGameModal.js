import React, { useState, useEffect } from 'react';
import './NewGameModal.css';

const NewGameModal = ({ apiUrl, onClose, onNewGame }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${apiUrl}/categories`);
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const categories = await response.json();
      setCategories(categories);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleNewGame = async () => {
    try {
      const response = await fetch(`${apiUrl}/categories/${selectedCategory}/start_game`);
      if (!response.ok) {
        throw new Error('Failed to start new game');
      }
      const questions = await response.json();
      onNewGame(questions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="new-game-modal">
      <div className="new-game-modal-content">
        <h2>New Game</h2>
        <div className="new-game-modal-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleNewGame} disabled={!selectedCategory}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewGameModal;
