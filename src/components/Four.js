// Build a List Component to display list of items
import React from "react";

const Four = () => {
  const items = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
  ];
  return (
    <div>
      <h1>display items</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>
            
            {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Four;
