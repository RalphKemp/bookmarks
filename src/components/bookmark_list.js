import React, { Component } from 'react';
import BookmarkItems from './bookmark_items'

class BookmarkList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));

    console.log(this.state.text);
  }


  render() {
    return (
      <div className="bookmark-list-main-container">
        <div className="header">
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Enter bookmark URL"
              value={this.state.text}
              onChange={this.handleChange} >
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <div>
          <BookmarkItems entries={this.state.items} />
        </div>
      </div>
    );
  }
}

export default BookmarkList;
