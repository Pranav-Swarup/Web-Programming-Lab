import React from 'react';
import InlineStyledButton from './InlineStyledButton';
import InternalStyledButton from './InternalStyledButton';
import ExternalStyledButton from './ExternalStyledButton';


function App() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>React Styling Demo</h2>
      <InlineStyledButton />
      <br /><br />
      <InternalStyledButton />
      <br /><br />
      <ExternalStyledButton />
    </div>
  );
}


export default App;
