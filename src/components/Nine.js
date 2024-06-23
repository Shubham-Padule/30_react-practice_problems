import React, { useState } from 'react';
// onclick change color

const Nine = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleClick = () => {
    const newColor = backgroundColor === 'yellow' ? 'lightblue' : 'yellow';
    setBackgroundColor(newColor);
    console.log(newColor);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: backgroundColor, // Use the state value for background color
        width: '200px',
        height: '200px', // Corrected spelling of height
        cursor: 'pointer'
      }}
    >
      Click me to change color
    </div>
  );
}

export default Nine;
