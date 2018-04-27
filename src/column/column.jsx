import React from 'react';
import Card from '../card/card.jsx';
import './column.css';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.renderCards = this.renderCards.bind(this);
  }

  handleAdd() {
    let cardData = window.prompt('Please input text');
    let card = {text: cardData};
    this.props.addCard(this.props.colIdx, card);
  }

  renderCards() {
    return this.props.cards.map((card, i) => <Card colIdx={this.props.colIdx} cardIdx={i} onArrowClick={this.props.onArrowClick} key={i} text={card.text}/>)
  }

  render() {
    let { title, color } = this.props;
    let style = {
      backgroundColor: color,
      color: 'white'
    }
    let cards = this.renderCards();
    return <div className="column-container">
        <div style={style}>{title}</div>
        {cards}
        <div onClick={this.handleAdd}>+ Add a card</div>
      </div>;
  }
}

export default Column;