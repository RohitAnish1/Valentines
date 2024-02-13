import React, { useState } from 'react';
import './OrchidAnimation.css';
import audioFile from './perfect.mp3';// Import your audio file
import audioFile1 from './song.mp3';
const OrchidAnimation = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const playAudio = () => {
    const audio = new Audio(audioFile);
    audio.play();
    alert('You have successfully booked tickets!');
  };
  const playAudio1 = () => {
    const audio1 = new Audio(audioFile1);
    audio1.play();
  };

  return (
    <div>
      <div className="orchid-animation" onClick={togglePopup}></div>
      {showPopup && (
        <div className="popup">
          <p>Appo enganeya moviekk poyalo😁</p>
          <div className="button-container">
            <button onClick={playAudio}>Yes</button>
            <button onClick={playAudio1}>No,Give him a chance no</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrchidAnimation;
