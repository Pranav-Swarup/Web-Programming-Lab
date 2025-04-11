import React, { useState } from 'react';
import "E://React Native//webplab//my-app//src//App1.css"


function Header(props) {
  return <h1>{props.title}</h1>;
}


function Content() {
  const [joke, setJoke] = useState('');


  const jokes = [
    'Bombardiro Crocodilo',
    'Trallalero Tralala',
    'Brr Brr Patapim'
  ];


  const getJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };


  return (
    <div>
      <button onClick={getJoke}>Tell me a joke</button>
      <p>{joke}</p>
    </div>
  );
}


function Footer() {
  return <footer>© 2025 All rights reserved.</footer>;
}


export default function App() {
    return (
      <div>
        <header>
          <Header title="Welcome to the React App!" />
        </header>
        <main>
          <Content />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
