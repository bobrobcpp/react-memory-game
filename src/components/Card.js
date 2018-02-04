import React from 'react';
import cardBack from './Card_back.png';

export default class Card extends React.Component {
  state = {
    show: false
  };
  handleFlip = () => {
    this.setState(prevState => {
      return {
        show: !prevState.show
      };
    });
  };
  render() {
    return (
      <div className="card" onClick={this.handleFlip}>
        <img src={this.state.show ? this.props.character[0] : cardBack} alt="cardBack" />
      </div>
    );
  }
}
