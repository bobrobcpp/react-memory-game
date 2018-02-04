import React from 'react';
import cardBack from './Card_back.png';

export default class Card extends React.Component {
  state = {
    show: false,
    character: this.props.character[0]
  };

  handleFlip = () => {
    this.setState(prevState => {
      return {
        show: !prevState.show
      };
    });
  };

  handleClick = () => {
    this.handleFlip();
    this.props.incrementTurn(this.state.character);
  };

  resetCard = () => {
    this.setState(() => {
      return {
        show: false
      };
    });
  };

  render() {
    return (
      <div className="card" onClick={this.handleClick}>
        <img src={this.state.show ? this.state.character : cardBack} alt="cardBack" />
      </div>
    );
  }
}
