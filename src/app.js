import React from 'react';
import ReactDOM from 'react-dom';
import Deck from './components/Deck-mark2';
import Card from './components/Card';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class MemoryGameApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Deck />
      </div>
    );
  }
}

ReactDOM.render(<MemoryGameApp />, document.getElementById('app'));
