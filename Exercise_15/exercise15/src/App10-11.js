import React from 'react';
import PropTypes from 'prop-types';


function App() {
  return (
    <div style={styles.container}>
      <h1>React Props & Validation</h1>
      <Parent />
    </div>
  );
}


// Parent component
function Parent() {
  const message = "Hello from Parent Component!";
  return <Child message={message} />;
}


// Child component with props validation
function Child({ message }) {
  return (
    <div style={styles.childBox}>
      <h2>Child Component</h2>
      <p>{message}</p>
    </div>
  );
}


// Props validation using prop-types
Child.propTypes = {
  message: PropTypes.string.isRequired,
};


// Styling
const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial',
    textAlign: 'center',
  },
  childBox: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
  },
};


export default App;


