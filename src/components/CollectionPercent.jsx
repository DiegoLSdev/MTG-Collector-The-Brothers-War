import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import titleBg from '../assets/icons/bg.png'


const CardSelectionPercentage = ({ selectedCards, totalCards, allCards, totalWorthEUR, totalWorthUSD }) => {

  // const [blackSelectedCards, setBlackSelectedCards] = useState(null);

  const calculatePercentage = () => {
    const selectedCount = selectedCards.length;
    const percentage = (selectedCount / totalCards) * 100;
    return Math.round(percentage);
  };

  const calculateGreenPercentage = () => {
    const greenCards = selectedCards.filter((cardName) => {
      const card = allCards.find((card) => card.name === cardName);

      // Ensure card is defined and has colors property
      if (card && card.colors) {
        return card.colors.includes('G');
      }

      return false;
    });

    const greenPercentage = (greenCards.length / 60) * 100;
    return Math.round(greenPercentage);
  };


  const calculateBluePercentage = () => {
    const blueCards = selectedCards.filter((cardName) => {
      const card = allCards.find((card) => card.name === cardName);

      // Ensure card is defined and has colors property
      if (card && card.colors) {
        return card.colors.includes('U');
      }

      return false;
    });

    const bluePercentage = (blueCards.length / 59) * 100;
    return Math.round(bluePercentage);
  };

  const calculateWhitePercentage = () => {
    const whiteCards = selectedCards.filter((cardName) => {
      const card = allCards.find((card) => card.name === cardName);

      // Ensure card is defined and has colors property
      if (card && card.colors) {
        return card.colors.includes('W');
      }

      return false;
    });

    const whitePercentage = (whiteCards.length / 63) * 100;
    return Math.round(whitePercentage);
  };

  const calculateBlackPercentage = () => {
    const blackCards = selectedCards.filter((cardName) => {
      const card = allCards.find((card) => card.name === cardName);

      // Ensure card is defined and has colors property
      if (card && card.colors) {
        return card.colors.includes('B');
      }

      return false;
    });

    const blackPercentage = (blackCards.length / 62) * 100;
    return Math.round(blackPercentage);
  };

  const calculateRedPercentage = () => {
    const redCards = selectedCards.filter((cardName) => {
      const card = allCards.find((card) => card.name === cardName);

      if (card && card.colors) {
        return card.colors.includes('R');
      }

      return false;
    });

    const redPercentage = (redCards.length / 62) * 100;
    return Math.round(redPercentage);
  };


  const percentage = calculatePercentage();

  const greenPercentage = calculateGreenPercentage();
  const bluePercentage = calculateBluePercentage();
  const whitePercentage = calculateWhitePercentage();
  const blackPercentage = calculateBlackPercentage();
  const redPercentage = calculateRedPercentage();

  return (
    <div className="">
      {/* <h3>All Cards</h3> */}

      <div className="flex flex-col md:flex-row justify-evenly">
        <img src={titleBg} alt="Title" className="h-72 md:h-72 w-full md:w-auto object-contain -mt-4 md:mt-0" />
        <div className=" flex gap-2 justify-center items-center flex-wrap ">

          <div className='flex gap-3'>

            
          <div className="text-white flex flex-col justify-center items-center">
              <p className='text-[30px] text-[#dfbc84]'>${totalWorthUSD.toFixed(2)}</p>
              <p className='text-[30px] text-[#dfbc84]'>€{totalWorthEUR.toFixed(2)}</p>
            </div>
            <div style={{ width: '125px', height: '125px', }}>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={10}
                styles={{
                  text: {
                    fontSize: '40px',
                    fontWeight: 'bold',
                    fill: '#e0a13a',
                  },
                  trail: {
                    stroke: '#f2f2f2',
                  },
                  path: {
                    stroke: '#e0a13a',
                  },
                }}
              />
            </div>
          </div>

          <div style={{ width: '90px', height: '90px', }} className="">
            {/* <img className='border border-purple-400'  src={greenIcon} alt={"green"} /> */}
            <CircularProgressbar
              value={greenPercentage}
              text={`${greenPercentage}%`}
              strokeWidth={10}
              styles={{

                text: {
                  fontSize: '35px',
                  fontWeight: 'bold',
                  fill: '#9bd3ae',
                },
                trail: {
                  stroke: '#f2f2f2',
                },

                path: {
                  stroke: '#9bd3ae',
                },
              }}
            />
          </div>

          <div style={{ width: '90px', height: '90px', }} className="">
            {/* <img className='border border-purple-400'  src={blueIcon} alt={"blue"} /> */}
            <CircularProgressbar
              value={bluePercentage}
              text={`${bluePercentage}%`}
              strokeWidth={10}
              styles={{
                text: {
                  fontSize: '35px',
                  fontWeight: 'bold',
                  fill: '#aae0fa',
                },
                trail: {
                  stroke: '#f2f2f2',
                },
                path: {
                  stroke: '#aae0fa',
                },
              }}
            />
          </div>

          <div style={{ width: '90px', height: '90px', }} className="">
            <CircularProgressbar
              value={whitePercentage}
              text={`${whitePercentage}%`}
              strokeWidth={10}
              styles={{
                text: {
                  fontSize: '35px',
                  fontWeight: 'bold',
                  fill: '#fffbd5',
                },
                trail: {
                  stroke: '#f2f2f2',
                },
                path: {
                  stroke: '#fffbd5',
                },
              }}
            />
          </div>

          <div style={{ width: '90px', height: '90px', }} className="">
            {/* <img className='border border-purple-400'  src={blackIcon} alt={"black"} /> */}
            <CircularProgressbar
              value={blackPercentage}
              text={`${blackPercentage}%`}
              strokeWidth={10}
              styles={{
                text: {
                  fontSize: '35px',
                  fontWeight: 'bold',
                  fill: '#cbc2bf',
                },
                trail: {
                  stroke: '#f2f2f2',
                },
                path: {
                  stroke: '#cbc2bf',
                },
              }}
            />
          </div>

          <div style={{ width: '90px', height: '90px', }} className="">
            {/* <img className='border border-purple-400'  src={redIcon} alt={"black"} /> */}
            <CircularProgressbar
              value={redPercentage}
              text={`${redPercentage}% `}
              strokeWidth={10}
              styles={{
                text: {
                  fontSize: '35px',
                  fontWeight: 'bold',
                  fill: '#f9aa8f',
                },
                trail: {
                  stroke: '#f2f2f2',
                },
                path: {
                  stroke: '#f9aa8f',
                },
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardSelectionPercentage;
