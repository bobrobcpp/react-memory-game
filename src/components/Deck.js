import React from 'react';
import Card from './Card';
import drinker from './drinker.png';
import macer from './macer.png';
import catman from './catman.png';
import lamb from './lamb.png';
import swordsman from './swordsman.png';
import pipehood from './pipehood.png';

export default class Deck extends React.Component {
  constructor(props) {
    super(props);
    let cards = [pipehood, pipehood, drinker, drinker, catman, catman, lamb, lamb, macer, macer, swordsman, swordsman];

    const packSize = 12;
    const cardList = Array(packSize)
      .fill('')
      .map((x, i) => {
        const min = Math.ceil(0);
        const max = Math.ceil(cards.length);
        let randNum = Math.floor(Math.random() * (max - min) + min);
        return <Card key={i} character={cards.splice(randNum, 1)} />;
      });

    this.state = {
      deckArray: cardList,
      selectedCard: undefined
    };
  }

  render() {
    return <div className="deck">{this.state.deckArray}</div>;
  }
}
