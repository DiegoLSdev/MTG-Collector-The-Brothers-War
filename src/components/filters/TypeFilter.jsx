import React, { useState } from 'react';

const TypeFilter = ({ cards, handleFilter }) => {
  const [selectedType, setSelectedType] = useState('');

  const handleChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    handleFilter(type);
  };

  const uniqueTypes = [...new Set(cards.map((card) => card.type_line))];

  return (
    <div className="type-filter-container">
      <label htmlFor="typeSelect" className="filter-label">
      </label>
      <select
        id="typeSelect"
        value={selectedType}
        onChange={handleChange}
        className="w-full p-2 rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option value="">Creature, Artifact, Land, Instant ...</option>
        {uniqueTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
