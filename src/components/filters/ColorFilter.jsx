import React, { useState } from 'react';

import greenIcon from '../../assets/icons/green.png';
import blueIcon from '../../assets/icons/blue.png';
import redIcon from '../../assets/icons/red.png';
import whiteIcon from '../../assets/icons/white.png';
import blackIcon from '../../assets/icons/black.png';

const ColorFilter = ({ cards, handleFilter }) => {
  const colorEquivalences = {
    W: <img className="w-11 h-11" src={whiteIcon} alt="white" />,
    B: <img className="w-11 h-11" src={blackIcon} alt="black" />,
    U: <img className="w-11 h-11" src={blueIcon} alt="blue" />,
    G: <img className="w-11 h-11" src={greenIcon} alt="green" />,
    R: <img className="w-11 h-11" src={redIcon} alt="red" />,
  };

  const [selectedColor, setSelectedColor] = useState('');

  const handleColorSelection = (color) => {
    if (selectedColor === color) {
      setSelectedColor('');
      handleFilter('');
    } else {
      setSelectedColor(color);
      handleFilter(color);
    }
  };

  return (
    <div className="flex space-x-2">
      {/* <button
        onClick={() => handleColorSelection('')}
        className={`px-2 py-1 rounded  ${selectedColor === '' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
      >
        <p className='text-black'>All</p>
      </button> */}
      {Object.keys(colorEquivalences).map((color) => (
        <button
          key={color}
          onClick={() => handleColorSelection(color)}
          className={`px-2 py-1 rounded ${selectedColor === color ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
        >
          {colorEquivalences[color]}
        </button>
      ))}
    </div>
  );
};

export default ColorFilter;
