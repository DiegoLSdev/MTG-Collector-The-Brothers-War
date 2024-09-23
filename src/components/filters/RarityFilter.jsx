import React, { useState } from 'react';

const RarityFilter = ({ cards, handleFilter }) => {
  const uniqueRarities = [...new Set(cards.map((card) => card.rarity))];
  const [selectedRarity, setSelectedRarity] = useState('');

  const rarityEquivalences = {
    'rare': <i className="ss ss-ltr ss-rare ss-3x"></i>,
    'mythic': <i className="ss ss-ltr ss-mythic ss-3x"></i>,
    'uncommon': <i className="ss ss-ltr ss-uncommon ss-3x"></i>,
    'common': <i className="ss ss-ltr ss-common ss-3x"></i>,
  };

  const handleRarityFilter = (rarity) => {
    if (selectedRarity === rarity) {
      setSelectedRarity('');
      handleFilter('');
    } else {
      setSelectedRarity(rarity);
      handleFilter(rarity);
    }
  };

  return (
    <div className="flex space-x-2">
      {/* <button
        onClick={() => handleRarityFilter('')}
        className={`px-2 py-1 rounded ${selectedRarity === '' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
      >
        All
      </button> */}
      {uniqueRarities.map((rarity) => (
        <button
          key={rarity}
          onClick={() => handleRarityFilter(rarity)}
          className={`px-2 py-1 rounded ${selectedRarity === rarity ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
        >
          {rarityEquivalences[rarity] || rarity}
        </button>
      ))}
    </div>
  );
};

export default RarityFilter;
