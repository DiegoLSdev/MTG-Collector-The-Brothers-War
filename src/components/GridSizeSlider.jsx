import React from 'react';

const GridSizeSlider = ({ gridSize, setGridSize }) => {
  const handleSliderChange = (e) => {
    setGridSize(e.target.value);
    console.log(e.target.value);
    
  };

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="grid-size-slider" className="text-white">Grid Size</label>
      <input
        id="grid-size-slider"
        type="range"
        min="100"
        max="600"
        value={gridSize}
        onChange={handleSliderChange}
        className="slider"
      />
    </div>
  );
};

export default GridSizeSlider;
