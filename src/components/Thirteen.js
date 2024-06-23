import React, { useState } from 'react';

function Thirteen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = () => {
    if (!email || !password) {
      setError('Email and password are required.');
      return false;
    }
    // Add more validations if necessary
    setError('');
    return true;
  };

  const handleLogin = () => {
    if (!validateForm()) return;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find((user) => user.email === email);

    if (user) {
      if (user.password === password) {
        console.log('Login successful');
        setError('');
        setMessage('Login successful');
        // Add any post-login logic here
      } else {
        setError('Invalid password.');
        setMessage('');
      }
    } else {
      setError('User not found.');
      setMessage('');
    }
  };

  const handleSignup = () => {
    if (!validateForm()) return;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.some((user) => user.email === email);

    if (userExists) {
      setError('User already exists.');
      setMessage('');
    } else {
      const newUser = { email, password };
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      console.log('Signup successful');
      setError('');
      setMessage('Signup successful. You can now log in.');
      // Switch to login mode after successful signup
      setIsRegister(false);
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setError('');
    setMessage('');
  };

  return (
    <div>
      <h1>Thirteen</h1>
      <div>
        <form>
          <input
            type='email'
            placeholder='Enter Your Email'
            value={email}
            onChange={handleEmailChange}
          /><br />
          <input
            type='password'
            placeholder='Enter Your Password'
            value={password}
            onChange={handlePasswordChange}
          /><br />
          {isRegister ? (
            <button type='button' onClick={handleSignup}>Signup</button>
          ) : (
            <button type='button' onClick={handleLogin}>Login</button>
          )}
          <button type='button' onClick={toggleMode}>
            {isRegister ? 'Switch to Login' : 'Switch to Signup'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {message && <p style={{ color: 'green' }}>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Thirteen;
