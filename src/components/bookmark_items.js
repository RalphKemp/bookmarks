import React, { Component } from 'react';

class BookmarkItems extends Component {
  render() {
    return (
      <ul className="bookmark-items">
        {this.props.items.map(item => (
          <div>
            <li key={item.id}>{item.text}</li>
            <button
                onClick = {() => this.props.deleteItem(item.key)}
             >delete</button>
          </div>
        ))}
      </ul>
    );
  }
}

export default BookmarkItems;
