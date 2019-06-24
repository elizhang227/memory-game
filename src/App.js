import React from 'react';
import MemoryCard from './MemoryCard.js';
import './App.css';

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <h1>
            Memory Game
            </h1>
            <p>Match cards to win</p>
        </header>
        <MemoryCard>CARD</MemoryCard>
        </div>
    );
}

export default App;
