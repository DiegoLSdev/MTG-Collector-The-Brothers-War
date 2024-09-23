import React from 'react';



const PriceToggle = ({ showPrices, setShowPrices }) => {


  const handleToggle = () => {
    setShowPrices(!showPrices);
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className={` z-40 px-4 py-2 rounded-md ${showPrices ? 'bg-green-500 text-white' : 'bg-gray-500 text-black'}`}
      >
        {showPrices ? 'Hide Prices' : 'Show Prices'}
      </button>

    </div>
  );
};

export default PriceToggle;
