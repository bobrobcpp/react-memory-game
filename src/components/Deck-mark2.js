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

    let cardList = [
      pipehood,
      pipehood,
      drinker,
      drinker,
      catman,
      catman,
      lamb,
      lamb,
      macer,
      macer,
      swordsman,
      swordsman
    ];

    const packSize = 12;
    const dummyList = Array(packSize).fill('');
    let initArray = dummyList.map((x, i) => {
      const min = Math.ceil(0);
      const max = Math.ceil(cardList.length);
      const randNum = Math.floor(Math.random() * (max - min) + min);
      return cardList.splice(randNum, 1);
    });

    this.state = {
      deckArray: initArray,
      selectedCharacter: undefined,
      turn: 0,
      picks: [],
      allOff: true
    };
  }

  resetPicks = () => {
    this.turnOff();
    this.setState(() => {
      return {
        turn: 0,
        picks: []
      };
    });
  };

  turnOn = () => {
    this.setState(() => {
      return {
        allOff: false
      };
    });
  };

  turnOff = () => {
    this.setState(() => {
      return {
        packSwitch: true
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

  render() {
    return (
      <div className="deck">
        {this.state.deckArray.map((x, i) => {
          return (
            <Card
              key={i}
              character={this.state.deckArray[i]}
              resetPicks={this.resetPicks}
              incrementTurn={this.incrementTurn}
              allOff={this.state.allOff}
              turnOn={this.turnOn}
              turn={this.state.turn}
            />
          );
        })}
      </div>
    );
  }
}
