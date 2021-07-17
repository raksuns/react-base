import React, { useState } from 'react';

export const doIncrement = (counter: number): number => counter + 1;
export const doDecrement = (counter: number): number => counter - 1;

export default function Counter({ }) {
  const [counter, setCounter] = useState<number>(0);

  const onIncrement = () => {
    // setCounter(doIncrement(counter));
    setCounter(c => doIncrement(c));
  };

  const onDecrement = () => {
    setCounter(doDecrement(counter));
  };

  return (
    <div>
      <h1>My Counter</h1>
      <p>{counter}</p>

      <button
        type="button"
        onClick={onIncrement}
      >
        {counter}
      </button>

      <button
        type="button"
        onClick={onDecrement}
      >
        Decrement
      </button>
    </div>
  );
}
