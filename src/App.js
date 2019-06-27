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
        const cardToFlip = {...this.state.deck[cardIndex]};

        let newPickedCards = this.state.pickedCards.concat(cardIndex);

        let newDeck = this.state.deck.map((card, index) => {
            if (cardIndex === index) {
                return cardToFlip;
            }
            return card;
        });

        if (newDeck[cardIndex] === this.state.deck[cardIndex]) {
            return;
        }
        cardToFlip.isFlipped = true;

        if (newPickedCards.length === 2) {
            const card1Index = newPickedCards[0];
            const card2Index = newPickedCards[1];
            const card1 = newDeck[card1Index];
            const card2 = newDeck[card2Index];
            if (card1.symbol !== card2.symbol) {
                setTimeout(() => {
                    this.unflipCards(card1Index, card2Index);
                }, 1000);
            } else {
                console.log("matches")
            }
            newPickedCards = [];
        }

        this.setState({
            deck: newDeck, pickedCards: newPickedCards
        })
    }

    unflipCards(card1Index, card2Index) {  
        let newDeck = this.state.deck.map((card) => {
            return card
        })

        newDeck[card1Index].isFlipped = false;
        newDeck[card2Index].isFlipped = false;

        // const card1 = {...this.state.deck[card1Index]};
        // const card2 = {...this.state.deck[card2Index]};
    
        // card1.isFlipped = false;
        // card2.isFlipped = false;
    
        this.setState({
            deck: newDeck
        })
    }

    render() {
        const cardsJSX = this.state.deck.map((card, index) => {
            return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this,index)}/>
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
