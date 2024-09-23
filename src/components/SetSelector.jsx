// src/components/SetSelector.js

import React from 'react';

const sets = [
  'blb', 'otj', 'mkm', 'lci', // Agrega aquí los códigos de sets estándar que quieras
  'woe', 'mat', 'mom','one','bro','dmu', // Reemplaza con los códigos reales
];

const SetSelector = ({ selectedSet, onSetChange }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md text-white mb-4">
      <h3 className="text-lg font-semibold mb-2">Select Set</h3>
      <div className="flex flex-wrap gap-2">
        {sets.map(setCode => (
          <button
            key={setCode}
            onClick={() => onSetChange(setCode)}
            className={`p-2 rounded ${selectedSet === setCode ? 'bg-blue-600' : 'bg-blue-500'} text-white`}
          >
            {setCode.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SetSelector;
