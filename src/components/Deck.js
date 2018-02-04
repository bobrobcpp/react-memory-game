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
        return (
          <Card
            key={i}
            character={cards.splice(randNum, 1)}
            resetPicks={this.resetPicks}
            incrementTurn={this.incrementTurn}
            isShown={false}
          />
        );
      });

    this.state = {
      deckArray: cardList,
      selectedCharacter: undefined,
      isShown: false,
      turn: 0,
      picks: []
    };
  }

  resetPicks = () => {
    this.setState(() => {
      return {
        turn: 0,
        picks: []
      };
    });
  };

  incrementTurn = character => {
    this.setState(prevState => {
      return {
        selectedCharacter: character,
        picks: prevState.picks.concat(character),
        turn: prevState.turn + 1
      };
    });
  };

  // testMatch = () => {};
  componentDidUpdate() {
    if (this.state.turn === 2) {
      if (this.state.picks[0] === this.state.picks[1]) {
        console.log('winner');
      }

      this.resetPicks();
    }
  }

  // componentDidMount() {
  //   console.log(this.cardList);
  // };

  render() {
    return <div className="deck">{this.state.deckArray}</div>;
  }
}
