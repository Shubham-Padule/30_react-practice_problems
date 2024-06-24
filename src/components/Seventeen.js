import React, { useState } from 'react';

function Seventeen() {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <>
      <div>
        <input type='color' onChange={handleChange} />
      </div>
      <div
        style={{
          height: '100px',
          width: '100px',
          backgroundColor: selectedColor
        }}
      />
    </>
  );
}

export default Seventeen;
