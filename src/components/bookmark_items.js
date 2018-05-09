import React, { Component } from 'react';

class BookmarkItems extends Component {
  render() {
    return (
      <ul>
        {this.props.entries.map(item => (
          <div>
            <li key={item.id}>{item.text}</li>
            <button>delete</button>
            <button>edit</button>
          </div>
        ))}
      </ul>
    );
  }
}

export default BookmarkItems;
