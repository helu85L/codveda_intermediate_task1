import React, { useContext } from 'react';
import { CounterContext } from '../store';

function HomePage() {
  const { count, increment } = useContext(CounterContext);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our React SPA!</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default HomePage;
