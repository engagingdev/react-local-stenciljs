import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import DarkMode from "./components/DarkMode";
import Counter from './components/Counter';
import Timer from './components/Timer';
function App() {
  return (
    <div className="App">
      <DarkMode />
      <Counter/>
      <Timer/>
      <Header />
      </div>
  );
}

export default App;
