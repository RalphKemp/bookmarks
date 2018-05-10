import React, { Component } from 'react';

class BookmarkItems extends Component {
  render() {
    return (
      <ul className="bookmark-items">
        {this.props.items.map((item, index) => {
          return <li onClick={(e) => {this.props.removeItem(index)}} key={item.id}>{item.text}</li>
        })}
      </ul>
    );
  }
}

export default BookmarkItems;
