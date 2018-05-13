import React, { Component } from 'react';

class BookmarkItems extends Component {
  render() {
    return (
      <ul className="bookmark-items">
        {this.props.items.map((item, index) => {
          return (
          <div>
            <li key={item.id}><a href={"http://"+item.text}>{item.text}</a></li>
            <button
              onClick={(e) => {this.props.removeItem(index)}}
              className="remove-button">remove
            </button>
          </div>
          )
        })}
      </ul>
    );
  }
}

export default BookmarkItems;
