import React, { useState } from 'react';

function Counter() {
//syntax
//const [state, setState] = useState(initialValue);

//Here, state is the variable that holds the current state value, and 
//setState is the function used to update the state. 
//initialValue is the initial value for the state.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
