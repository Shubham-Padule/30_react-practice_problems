import React, { useState, useEffect } from 'react';

function Eleven() {
  const quotes = [
    "The best way to predict the future is to create it. - Peter Drucker",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
    "I have learned over the years that when one’s mind is made up, this diminishes fear. - Rosa Parks",
    "I alone cannot change the world, but I can cast a stone across the water to create many ripples. - Mother Teresa",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is what happens when you’re busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
  ];

  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    const generateRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    };
    
    generateRandomQuote();
  }, [quotes]);

  return (
    <div>
      <h1>Eleven</h1>
      <p>{randomQuote}</p>
    </div>
  );
}

export default Eleven;
