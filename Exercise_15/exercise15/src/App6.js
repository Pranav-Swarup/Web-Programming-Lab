import React from 'react';
import CounterWithState from './CounterWithState';
import CounterWithReducer from './CounterWithReducer';


export default function App() {
  return (
    <div>
      <CounterWithState />
      <hr />
      <CounterWithReducer />
    </div>
  );
}
