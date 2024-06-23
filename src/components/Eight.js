import React, { useState } from 'react';

const Eight = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput(''); // Reset input field
    }
    console.log(todos);
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>ADD</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>REMOVE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Eight;
