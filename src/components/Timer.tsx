import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
 // Side effect code
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup code (optional)
    return () => {
      clearInterval(timer);
    };
  }, []); // dependencies array (optional)

  //return
  return <p>Count: {count}</p>;
}

export default Timer;
