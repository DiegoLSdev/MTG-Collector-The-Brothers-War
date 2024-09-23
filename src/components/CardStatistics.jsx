import React from 'react';
import greenIcon from '../assets/icons/green.png';
import whiteIcon from '../assets/icons/white.png';
import redIcon from '../assets/icons/red.png';
import blueIcon from '../assets/icons/blue.png';
import blackIcon from '../assets/icons/black.png';


const CardStatistics = ({ cards }) => {

  const getTotalCardCount = () => {
    return cards.length;
  };

  const getColorCounts = () => {
    const colorCounts = {};

    cards.forEach((card) => {
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

  const getRarityCounts = () => {
    const rarityCounts = {};

    cards.forEach((card) => {
      const rarity = card.rarity || 'Unknown';

      if (rarityCounts[rarity]) {
        rarityCounts[rarity]++;
      } else {
        rarityCounts[rarity] = 1;
      }
    });

    return rarityCounts;
  };

  const totalCardCount = getTotalCardCount();
  const colorCounts = getColorCounts();
  const rarityCounts = getRarityCounts();

  const colorIcons = {
    G: greenIcon,
    W: whiteIcon,
    R: redIcon,
    U: blueIcon,
    B: blackIcon,
  };

  return (
    <div className="card-statistics">
      
      <p>Total Cards: {totalCardCount}</p>
      
      {Object.entries(colorCounts).map(([color, count]) => (
        <div key={color}>
          <img className='filter-icon' src={colorIcons[color]} alt={color} /> {/* Use the color image */}
          <p>
          {count}
          </p>
        </div>
      ))}
      {Object.entries(rarityCounts).map(([rarity, count]) => (
        <p key={rarity}>
          {rarity}: {count}
        </p>
      ))}
    </div>
  );
};

export default CardStatistics;
