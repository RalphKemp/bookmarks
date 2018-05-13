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
        <div className="header">
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Enter bookmark URL"
              onChange={this.handleChange}
              value={this.state.text} >
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <div>
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
