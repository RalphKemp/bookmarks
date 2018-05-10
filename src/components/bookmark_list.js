import React, { Component } from 'react';
import BookmarkItems from './bookmark_items';
import swal from 'sweetalert';

class BookmarkList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  handleChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.text.length) {
      return swal('please enter an address');
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

  deleteItem(key) {
    const filteredItems = this.state.items.filter(function(item) {
      return (item.key !== key)
    });
    this.setState({ items: filteredItems });
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
          <BookmarkItems items={this.state.items}
                        deleteItem={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default BookmarkList;
