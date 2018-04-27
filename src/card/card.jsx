import React from 'react';
import './card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { onArrowClick, colIdx, cardIdx } = this.props;
    return (
    <div className="card-box">
        {colIdx ? <div onClick={() => onArrowClick(colIdx, cardIdx, 'left')}>{'<'}</div> : null}
        <div className="card-text">{this.props.text}</div>
        {colIdx <= 2 ? <div onClick={() => onArrowClick(colIdx, cardIdx, 'right')}>{'>'}</div> : null}
    </div>
      )
  }
}

export default Card;