import React, { useState } from 'react';
import '../styles/LegalitiesAccordion.css'

const LegalitiesAccordion = ({ legalities }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const getLegalityColor = (legality) => {
    return legality === 'legal' ? 'green' : 'red';
  };

  return (
    <div>
      <button onClick={toggleAccordion}>
        {isOpen ? 'Hide Legalities' : 'Show Legalities'}
      </button>
      {isOpen && (
        <div className='legalitiesContainer'>
          {Object.entries(legalities).map(([key, value]) => (
            <p key={key} style={{ color: getLegalityColor(value) }}>
              {key.toUpperCase()}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default LegalitiesAccordion;
