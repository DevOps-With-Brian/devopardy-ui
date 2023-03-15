import React from 'react';
import './LandingPage.css';
import logo from '../logo.png';

const LandingPage = (props) => {
  const handleStartGameClick = () => {
      props.onStartGame();
  };


  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1 className="hero-title">DevOpardy</h1>
        <h2 className="sub-header">The Trivia Game for DevOps &amp; Cloud</h2>
      </div>
      <button className="start-game-button" onClick={handleStartGameClick}>
        Start Game
      </button>
      <hr className="divider" />
      <div className="game-rules-section">
        <h2 className="created-by-title">Created By</h2>
        <img src={logo} alt="Logo" />
        <p className="created-by-description">
          This was created live on and off stream by DevOpsWithBrian on his Twitch channel, please go support me at my <a href="https://www.twitch.tv/devopswithbrian">Twitch Channel</a>.  You can also join our <a href="https://discord.gg/2ZkhQxNs5A">Discord</a>
        </p>
        <h2 className="game-rules-title">Game Rules</h2>
        <p className="game-rules-description">
          The overall game rules/how to play are outlined below.  These are mainly if you are playing with others online or via a streaming/chat type setup.
        </p>
        <h3 className="how-to-play-title">How to Play</h3>
        <ol className="how-to-play-list">
          <li className="how-to-play-item">The Host will pick someone to choose a category and point value from the game board.</li>
          <li className="how-to-play-item">The host will read the question aloud.</li>
          <li className="how-to-play-item">The first player to buzz in gets to answer the question.</li>
          <li className="how-to-play-item">The contestants must buzz in via !buzz if playing online/via chat or say their name if playing via voice/etc.</li>
          <li className="how-to-play-item">If the answer is correct, the player earns the point value of the question. If the answer is incorrect, the player loses the point value of the question.</li>
          <li className="how-to-play-item">Play continues until all questions have been answered or until time runs out.</li>
        </ol>
      </div>
      <div className="footer">
        <p>&copy; 2022 DevOpardy. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default LandingPage;