import React, { useState } from 'react';

const TextFilter = ({ cards, handleFilter }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleChange = (event) => {
    setFilterValue(event.target.value);
    handleFilter(event.target.value);
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="relative">
      <input
        type="text"
        value={filterValue}
        onChange={handleChange}
        placeholder="Search by Card Name"
        className=" relative w-full p-2 rounded border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      {filterValue !== '' && filteredCards.length === 0 && (
        <p className="absolute -top-6 right-0 text-red-500 text-sm mt-1">No matches!</p>
      )}
    </div>
  );
};

export default TextFilter;
