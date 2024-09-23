import React, { useState } from 'react';

const MissingCardsModal = ({ missingCards, missingWorthUSD, missingWorthEUR, onClose }) => {
  const [copySuccess, setCopySuccess] = useState('');

  // Function to copy card names to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(`${text} copied!`);
      setTimeout(() => {
        setCopySuccess(''); // Clear the message after 3 seconds
      }, 3000);
    });
  };

  // Function to copy all card names to clipboard
  const copyAllToClipboard = () => {
    const cardNames = missingCards.map(card => card.name).join('\n');
    copyToClipboard(cardNames);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-screen h-screen">
      <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] md:w-1/2 lg:w-1/3 max-h-[80%] overflow-y-auto relative">
        {/* Close button that remains visible */}
        <div className="sticky top-0 bg-transparent z-10 flex justify-start items-center p-2 mb-4 gap-2">
          <button
            className="bg-gray-600 text-white rounded-full p-2 hover:bg-gray-700"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Copy to Clipboard button for all cards */}
          <button
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
            onClick={copyAllToClipboard}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
            </svg>
          </button>
        </div>

        {/* Title and Total Worth */}
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-2xl font-semibold mb-2">Missing Cards</h2>
          <p className="text-lg">Total Missing Cards Worth:</p>
          <p className="text-lg font-bold">${missingWorthUSD.toFixed(2)} | €{missingWorthEUR.toFixed(2)}</p>
        </div>

        {/* Card list */}
        <ul className="space-y-2 text-gray-800">
          {missingCards.map(card => (
            <li key={card.id} className="flex justify-between items-center p-2 border-b border-gray-300">
              <span>{card.name}</span>
              <button
                className="bg-blue-400 text-white px-2 py-1 rounded hover:bg-blue-500"
                onClick={() => copyToClipboard(card.name)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>

              </button>
            </li>
          ))}
        </ul>

        {/* Copy success message */}
        {copySuccess && (
          <p className="mt-4 text-green-500 text-center font-semibold">
            {copySuccess}
          </p>
        )}
      </div>
    </div>
  );
};

export default MissingCardsModal;
