import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
// import './styles.css';

export default function Stars({ nofStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(event, ind) {
    event.stopPropagation();
    console.log('click', ind);
    setRating(ind);
  }

  function handleEnter(ind) {
    console.log('Enter', ind);
    setHover(ind);
  }

  function handleLeave(ind) {
    console.log('Leave', ind);
    setHover(rating);
  }

  function handleBackground() {
    console.log('background');
    setRating(0);
    setHover(0);
  }

  return (
    <div
      style={{ width: '100vw', height: '100vh', position: 'relative' }}
      onClick={handleBackground}
    >
      
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          border: '2px solid black',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {[...Array(nofStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              style={index <= (hover || rating) ? {color:'gold'}:{color:'black'}}
              onClick={(event) => handleClick(event, index)}
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={() => handleLeave(index)}
              size={40}
            />
          );
        })}
      </div>
    </div>
  );
}
