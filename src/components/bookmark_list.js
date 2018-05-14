import React, { Component } from 'react';
import BookmarkItems from './bookmark_items';
import swal from 'sweetalert';
import isValidDomain from 'is-valid-domain';

class BookmarkList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', valid: true};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentWillMount() {
    const items = localStorage.items;

    if(items) {
      this.setState({
        items: JSON.parse(items),
        text: ''
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(JSON.stringify(prevState.items) !== JSON.stringify(this.state.items)) {
      localStorage.items = JSON.stringify(this.state.items);
    }
  }


  handleChange({target: {value}}) {
    this.setState({
      text: value,
      valid: isValidDomain(value)
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.text.length) {
      return swal('Please enter an address.');
    }
    if (!this.state.valid) {
      return swal('Please enter a valid address.');
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  removeItem(index) {
    const newItems = this.state.items.filter((item, itemIndex) => {
      return itemIndex !== index;
    })
    this.setState({ items: newItems })
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
              className="search" >
            </input>
            <button type="submit" className="search-button">+</button>
          </form>
        </div>
        <div className="list-div">
          <BookmarkItems
            items={this.state.items}
            removeItem={this.removeItem}
          />
        </div>
      </div>
    );
  }
}

export default BookmarkList;
