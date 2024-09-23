import React from 'react';

const CardGrid = ({ cards, selectedCards, handleSelectedCard, showPrices }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`relative bg-black rounded-3xl overflow-hidden shadow-lg ${selectedCards.includes(card.name) ? ' opacity-30 ' : ''}`}
          onClick={(e) => handleSelectedCard(e, card.name)}
        >
          <div className=" absolute bottom-9 right-5 bg-indigo-900 rounded-lg w-fit text-white">
              {showPrices && (
              <div className='flex justify-evenly  items-center'>
                <p className='m-1'>{card.prices.usd ? `$${card.prices.usd}` : "N/N" }</p>
                <p className='m-1'>{card.prices.eur ? `€${card.prices.eur}` : "N/N" }</p>
            </div>
          )}
          </div>
          <img className="" src={card.image_uris.large} alt={card.name} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
