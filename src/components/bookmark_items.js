import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookmarkItems extends Component {
  render() {
    return (
      <ul className="bookmark-items">
        {this.props.items.map((item, index) => {
          return (
          <div>
            <Link to={item.text}>
              <li key={item.id}>{item.text}</li>
            </Link>
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
