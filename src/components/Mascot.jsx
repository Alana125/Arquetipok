import React from 'react';
import './Mascot.css';

const Mascot = ({ size = 'medium', mood = 'happy' }) => {
  return (
    <div className={`mascot mascot--${size} mascot--${mood}`}>
      <div className="mascot__body">
        <div className="mascot__head">
          <div className="mascot__eyes">
            <div className="mascot__eye mascot__eye--left"></div>
            <div className="mascot__eye mascot__eye--right"></div>
          </div>
          <div className="mascot__mouth"></div>
        </div>
        <div className="mascot__arms">
          <div className="mascot__arm mascot__arm--left"></div>
          <div className="mascot__arm mascot__arm--right"></div>
        </div>
      </div>
    </div>
  );
};

export default Mascot;