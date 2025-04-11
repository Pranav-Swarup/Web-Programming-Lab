import React, { useEffect, useState, useRef, useContext, createContext } from 'react';


const ThemeContext = createContext();


export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));


  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#eee',
    minHeight: '100vh',
    padding: '30px',
    textAlign: 'center',
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={appStyle}>
        <h1>React Hooks Lab</h1>
        <JokeFetcher />
        <hr />
        <InputFocus />
        <hr />
        <ThemeToggler />
        <ThemedBox />
      </div>
    </ThemeContext.Provider>
  );
}

// 7. useEffect – Show a random joke from local array
function JokeFetcher() {
  const jokes = [
    'Why don’t scientists trust atoms? Because they make up everything!',
    'What do you call fake spaghetti? An impasta!',
    'Why did the computer go to the doctor? It had a virus!',
    'Why don’t programmers like nature? It has too many bugs.',
  ];
  const [joke, setJoke] = useState('');


  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };


  useEffect(() => {
    getRandomJoke();
  }, []);


  return (
    <div>
      <h2>Random Joke (useEffect)</h2>
      <p>{joke}</p>
      <button onClick={getRandomJoke}>Get Another Joke</button>
    </div>
  );
}


// 8. useRef – Focus input on button click
function InputFocus() {
  const inputRef = useRef();


  return (
    <div>
      <h2>Focus Input (useRef)</h2>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <br />
      <button onClick={() => inputRef.current.focus()} style={{ marginTop: '10px' }}>
        Focus Input
      </button>
    </div>
  );
}


// 9. useContext – Theme toggling
function ThemeToggler() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}


function ThemedBox() {
  const { theme } = useContext(ThemeContext);
  const boxStyle = {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: theme === 'light' ? '#eee' : '#444',
    borderRadius: '10px',
  };


  return (
    <div style={boxStyle}>
      <p>This box follows the {theme} theme.</p>
    </div>
  );
}


