import React, { Component } from 'react';
import MemoryCard from './MemoryCard.js';
import './App.css';

function generateDeck() {
    const symbols = ['a', 'ß', 'c', 'd', 'e', '$', 'f', 'g'];
    const deck = [];

    for (let i = 0; i < 16; i++) {
        deck.push({
            isFlipped: false,
            symbol: symbols[i%8]
        })
    }

    shuffle(deck)
    console.log(deck);
    return deck
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

class App extends Component {
    state = {
        deck: generateDeck(),
        pickedCards: []
    }

    pickCard(cardIndex) {
        if (cardIndex === this.state.deck[cardIndex]) {
            return;
        }

        const cardToFlip = {...this.state.deck[cardIndex]};
    }

    render() {
        const cardsJSX = this.state.deck.map((card, index) => {
            return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index}/>
        });
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                    Memory Game
                    </h1>
                    <p>Match cards to win</p>
                </header>
                <div>
                    {cardsJSX.slice(0,4)}
                </div>
                <div>
                    {cardsJSX.slice(4,8)}
                </div>
                <div>
                    {cardsJSX.slice(8,12)}
                </div>
                <div>
                    {cardsJSX.slice(12,16)}
                </div>
            </div>
        );
    }
}

export default App;
