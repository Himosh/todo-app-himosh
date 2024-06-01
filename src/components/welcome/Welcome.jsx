import React, { useState } from 'react';
import './Welcome.css';
import Vector from '../../assets/Vector.svg';
import Close from '../../assets/Close.svg';

function Welcome() {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome back, John Doe</h1>
        <h2>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</h2>
        <p>Look here for more information</p>
      </div>
      <div className="welcome-vector">
        <img className="vector-image" src={Vector} alt="Vector" />
        <img className="close-image" src={Close} alt="Close" onClick={handleCloseClick} />
      </div>
    </div>
  ) : null;
}

export default Welcome;
