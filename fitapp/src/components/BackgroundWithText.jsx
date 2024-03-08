// src/components/BackgroundWithText.js
import React from 'react';
import backgroundImage from '../assets/backgroundImage.png'; // Make sure to replace 'your-image.png' with the actual file name

const BackgroundWithText = () => {
  return (
    <div className="relative">
      {/* Full-screen background image */}
      <img src={backgroundImage} alt="Background" className="w-full h-screen object-cover" />
      
      {/* Overlay Text */}
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
        <span className="text-white text-6xl font-bold">Become Stronger</span>
      </div>
    </div>
  );
};

export default BackgroundWithText;

