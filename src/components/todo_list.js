import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], text: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    if (this.state.text !== "") {
      const newListItem = {
        text: this.state.text,
        key: Date.now()
      };
    }
  }

  render() {
    return (
      <div className="todolist-main-container">
        <div className="header">
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Enter bookmark URL" value={this.state.text}>
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
