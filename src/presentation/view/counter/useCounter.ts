import { useState, useCallback } from "react";

function useCounter() {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount(currentCount => currentCount + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(currentCount => currentCount - 1)
  }, [count]);
  return { count, increment, decrement };
}

export { useCounter };