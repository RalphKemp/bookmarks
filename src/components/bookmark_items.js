import React, { Component } from 'react';

class BookmarkItems extends Component {
  render() {
    return (
      <ul className="bookmark-items">
        {this.props.items.map((item, index) => {
          return (
          <div>
            <li key={item.id}>{item.text}</li>
            <button
              onClick={(e) => {this.props.removeItem(index)}}
              className="remove-button">remove
            </button>
            <button
              onClick={(e) => {this.props.editItem(index)}}
              className="edit-button">edit
            </button>
          </div>
          )
        })}
      </ul>
    );
  }
}

export default BookmarkItems;
