import React from 'react';
import '../styles/ColorStats.css'; // Create a new CSS file for styling if needed.
import greenIcon from '../assets/icons/green.png';
import whiteIcon from '../assets/icons/white.png';
import redIcon from '../assets/icons/red.png';
import blueIcon from '../assets/icons/blue.png';
import blackIcon from '../assets/icons/black.png';

const ColorStats = ({ selectedCards }) => {
  const getColorCounts = () => {
    const colorCounts = {};

    selectedCards.forEach((card) => {
      const colors = card.colors || ['Colorless'];

      colors.forEach((color) => {
        if (colorCounts[color]) {
          colorCounts[color]++;
        } else {
          colorCounts[color] = 1;
        }
      });
    });

    return colorCounts;
  };

  const colorCounts = getColorCounts();

  const colorIcons = {
    G: greenIcon,
    W: whiteIcon,
    R: redIcon,
    U: blueIcon,
    B: blackIcon,
  };

  return (
    <div className="color-stats">
      {Object.entries(colorCounts).map(([color, count]) => (
        <div key={color}>
          <img className="color-icon" src={colorIcons[color]} alt={color} />
          <p>{count}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorStats;
