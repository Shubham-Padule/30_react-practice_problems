import React, { useEffect, useState } from 'react';

const Seven = () => {
  const [time, setTime] = useState(60); // Initializing time as a number

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]); 
  // Dependency array should be [time]
  console.log(time)

  return (
    <div>
      Time left: {time} seconds
    </div>
  );
}

export default Seven;
