import React, { useEffect } from 'react';
import './App.css';
import logo from './logo.svg';
function App() {
  useEffect(() => {
    // Dynamically load the Web Component script from the server
    const script = document.createElement('script');
    script.src = 'http://localhost:4200/api/wcserver';
    script.type = 'module';

    // Append the script to the document head
    document.head.appendChild(script);

    return () => {
      // Clean up by removing the script when the component unmounts
      document.head.removeChild(script);
    };
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <my-component title="HC "></my-component>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
