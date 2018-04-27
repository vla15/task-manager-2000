import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Column from './column/column';

class App extends Component {

  constructor(props) {
    super(props);
    this.renderColumns = this.renderColumns.bind(this);
    this.onArrowClick = this.onArrowClick.bind(this);
    this.addCard = this.addCard.bind(this);
    this.state = {
      columns: [
      {color: '#8E6E95', title: 'Winnie', cards: [{text: 'hello'}, {text: 'world'}]},
      {color: '#39A59C', title: 'Bob', cards: [{text: 'hello'}, {text: 'world'}]},
      {color: '#344759', title: 'Thomas', cards: [{text: 'hello'}, {text: 'world'}]},
      {color: '#E8741E', title: 'George', cards: [{text: 'hello'}, {text: 'world'}]}
    ]
    }
  }

  renderColumns() {
    return this.state.columns.map((col, i) => (
      <Column
        className="column"
        addCard={this.addCard}
        onArrowClick={this.onArrowClick}
        colIdx={i}
        key={i}
        color={col.color}
        title={col.title}
        cards={col.cards}
      />
    ));
  }

  onArrowClick(colIdx = 1, cardIdx = 1, direction) {
    let targetIdx = direction === 'left' ? colIdx - 1 : colIdx + 1;
    let targetCards = this.state.columns[colIdx].cards.slice()
    let removedCard = targetCards.splice(cardIdx, 1);
    let updatedCards = this.state.columns[targetIdx].cards.slice()
    updatedCards.push(removedCard[0]);
    let columns = this.state.columns.map((column, i) => {
      if (i === targetIdx) {
        return {
          ...column,
          cards: updatedCards
        }
      } else if (i === colIdx) {
        return {
          ...column,
          cards: targetCards
        }
      }
      return column;
    })
    this.setState(prevState => {
        return { columns }
    })
  }

  addCard(colIdx, item) {
    this.setState(prevState => {
      let updatedState = prevState.columns.slice();
      updatedState[colIdx].cards.push(item);
      return {
        columns: updatedState
      }
    })
  }

  render() {
    let columns = this.renderColumns();
    return <div className="App">
      {columns}
      </div>;
  }
}

export default App;
