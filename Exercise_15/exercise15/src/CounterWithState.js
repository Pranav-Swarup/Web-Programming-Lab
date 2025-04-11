import React, { useState } from 'react';


function CounterWithState() {
  const [count, setCount] = useState(0);


  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>useState Counter</h2>
      <p style={{ fontSize: '24px' }}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>{' '}
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}


export default CounterWithState;
