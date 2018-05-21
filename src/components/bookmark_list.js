import React, { Component } from 'react';
import { map, find } from 'lodash';
import swal from 'sweetalert';
import BookmarkItem from './bookmark_item';

class BookmarkList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount() {
    if (localStorage.items) {
      this.setState({
        items: JSON.parse(localStorage.items),
        text: '',
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState.items) !== JSON.stringify(this.state.items)) {
      localStorage.items = JSON.stringify(this.state.items);
    }
  }

  handleChange({ target: { value } }) {
    this.setState({
      text: value,
    });
  }

  removeItem(index) {
    const newItems = this.state.items.filter((item, itemIndex) => itemIndex !== index);
    this.setState({ items: newItems });
  }


  handleEdit(e, id, index, newText) {
    function isValidDomain(v) {
      var re = (/^(?!:\/\/)([a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64}?$/gi);
      return re.test(v);
    }

    e.preventDefault();
    if (newText === '') {
      return swal('Please enter an address.');
    } else if (!isValidDomain(newText)) {
      return swal('Please enter a valid address.');
    }
    const itemToEdit = find(this.state.items, item => item.id === id);
    this.state.items.splice(index, 1);
    const editedItem = {
      ...itemToEdit,
      text: newText,
    };
    return this.setState({
      items: [
        ...this.state.items,
        editedItem,
      ],
    });
  }

  handleSubmit(e) {
    function isValidDomain(v) {
      var re = (/^(?!:\/\/)([a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64}?$/gi);
      return re.test(v);
    }

    e.preventDefault();
    if (!this.state.text.length) {
      return swal('Please enter an address.');
    }

    if (!isValidDomain(this.state.text)) {
      return swal('Please enter a valid address.');
    }

    return this.setState({
      items: [
        ...this.state.items,
        {
          text: this.state.text,
          id: Date.now(),
        },
      ],
      text: '',
    });
  }

  render() {
    return (
      <div className="bookmark-list-main-container">
        <div className="header-div">
          <div className="logo">
            <p>Bookmark Buddy</p>
          </div>
          <form onSubmit={this.handleSubmit} className="main-form">
            <input
              placeholder="Enter bookmark URL"
              onChange={this.handleChange}
              value={this.state.text}
              className="search"
            />
            <button type="submit" className="search-button">+</button>
          </form>
        </div>
        <div className="list-div">
          <ul key={Date.now()} className="bookmark-items">
            {
            map(this.state.items, (item, index) => (
              <BookmarkItem
                item={item}
                index={index}
                removeItem={this.removeItem}
                editItem={this.handleEdit}
              />
              ))
          }
          </ul>
        </div>
      </div>
    );
  }
}


export default BookmarkList;
