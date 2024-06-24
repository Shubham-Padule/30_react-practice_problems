import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Fifteen({ items }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      Fifteen
      <div>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

Fifteen.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Fifteen;
