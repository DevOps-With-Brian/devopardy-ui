import React from 'react';
import './LandingPage.css';


const LandingPage = (props) => {
    const handleStartGameClick = () => {
      props.onStartGame();
    };
  
    return (
      <div className="landing-page">
        <h1>Welcome to DevOpardy!</h1>
        <button className="start-game-button" onClick={handleStartGameClick}>
          Start Game
        </button>
      </div>
    );
  };

export default LandingPage;