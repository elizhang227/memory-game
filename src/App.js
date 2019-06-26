import React, { Component } from 'react';
import MemoryCard from './MemoryCard.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <h1>
                Memory Game
                </h1>
                <p>Match cards to win</p>
            </header>
            <div>
            <MemoryCard></MemoryCard>
            <MemoryCard></MemoryCard>
            <MemoryCard></MemoryCard>
            <MemoryCard></MemoryCard>
            </div>
            <div>
            <MemoryCard></MemoryCard>
            <MemoryCard></MemoryCard>
            <MemoryCard></MemoryCard>
            <MemoryCard></MemoryCard>
            </div>
            <div>
            <MemoryCard></MemoryCard>
            <MemoryCard></MemoryCard>
            <MemoryCard></MemoryCard>
            <MemoryCard></MemoryCard>
            </div>
            <div>
            <MemoryCard></MemoryCard>
            <MemoryCard></MemoryCard>
            <MemoryCard></MemoryCard>
            <MemoryCard></MemoryCard>
            </div>
            </div>
        );
    }
}

export default App;
