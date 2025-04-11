

// InlineStyledButton.js
import React from 'react';


function InlineStyledButton() {
  const btnStyle = {
    backgroundColor: 'teal',
    padding: '12px 24px',
    fontSize: '16px',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  };


  return <button style={btnStyle}>Inline Styled Button</button>;
}


export default InlineStyledButton;





// InternalStyledButton.js
import React from 'react';


function InternalStyledButton() {
  return (
    <>
      <style>{`
        .internal-btn {
          background-color: darkorange;
          padding: 12px 24px;
          font-size: 16px;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
      <button className="internal-btn">Internal Styled Button</button>
    </>
  );
}


export default InternalStyledButton;
