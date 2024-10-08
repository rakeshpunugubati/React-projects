import React, { useState } from 'react';
import './styles.css';

function Tictactoe() {
  const [xturn, setXturn] = useState(true);
  const [symbol, setSymbol] = useState([...Array(9).fill('')]);
  const [winner, setWinner] = useState(null);

  const handleOnclick = (index) => {
    if (symbol[index] === '' && !winner) {
      const newSymbol = [...symbol];
      newSymbol[index] = xturn ? 'X' : 'O';
      setSymbol(newSymbol);
      setXturn(!xturn);
      checkWinner(newSymbol);
    }
  };

  const checkWinner = (currentSymbols) => {
    const winningCombinations = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal
      [2, 4, 6], // Diagonal
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if ( currentSymbols[a] === currentSymbols[b] && currentSymbols[a] === currentSymbols[c]) {
        setWinner(currentSymbols[a]);
        return;
      }
    }

    if (!currentSymbols.includes('')) {
      setWinner('Draw');
    }
  };

  const resetGame = () => {
    setSymbol([...Array(9).fill('')]);
    setWinner(null);
    setXturn(true);
  };

  return (
    <div className="game-container">
      {winner && <div className="winner">{winner === 'Draw' ? 'It\'s a Draw!' : `${winner} Wins!`}</div>}
      <div style={{display:'flex', alignItems:'center', gap:'30px'}}>
        <div>{xturn && !winner && `Its X turn`}</div>
        <div className="grid">
          {symbol.map((item, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => handleOnclick(index)}
            >
              {item}
            </div>
          ))}
        </div>
        <div>{!xturn && !winner &&`Its O turn`}</div>
      </div>
      
      <button className="reset-button" onClick={resetGame}>Restart Game</button>
    </div>
  );
}

export default Tictactoe;
