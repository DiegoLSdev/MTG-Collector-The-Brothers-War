import React from 'react';

const CollectionPercent = ({ selectedCards, totalCards, allCards }) => {
  const selectedCardsCount = allCards.filter((card) =>
    selectedCards.includes(card.name)
  ).length;

  const percentCollected = ((selectedCardsCount / totalCards) * 100).toFixed(2);

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-md text-white">
      <p>You have selected {selectedCardsCount} out of {totalCards} cards.</p>
    </div>
  );
};

export default CollectionPercent;
