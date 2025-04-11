import React, { useState, useRef } from 'react';


function App() {
  return (
    <div style={styles.container}>
      <h1>React Form: useState vs useRef</h1>
      <FormWithState />
      <hr style={{ margin: '40px 0' }} />
      <FormWithRef />
    </div>
  );
}


// (i) useState version — live updates
function FormWithState() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    alert(`Submitted:\nName: ${name}\nEmail: ${email}`);
  };


  return (
    <div style={styles.formBox}>
      <h2>Form using useState</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p><strong>Live Preview:</strong> {name} ({email})</p>
    </div>
  );
}


// (ii) useRef version — values only on submit
function FormWithRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submittedData, setSubmittedData] = useState(null);


  const handleSubmit = e => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    setSubmittedData({ name, email });
  };


  return (
    <div style={styles.formBox}>
      <h2>Form using useRef</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} required />
        <input type="email" placeholder="Email" ref={emailRef} required />
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <p>
          <strong>Submitted:</strong> {submittedData.name} ({submittedData.email})
        </p>
      )}
    </div>
  );
}


// Styles
const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial',
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto',
  },
  formBox: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
};


export default App;
