import React, { useReducer } from 'react';


const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};



function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });


  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>useReducer Counter</h2>
      <p style={{ fontSize: '24px' }}>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>{' '}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>
    </div>
  );
}


export default CounterWithReducer;