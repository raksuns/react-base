import React from 'react';
import { useCounter } from './useCounter';

export default function Counter() {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <h1>My Counter : {count}</h1>
      <button
        type="button"
        onClick={increment}
      >
        Increment
      </button>

      <button
        type="button"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}
