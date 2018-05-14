import React, { Component } from 'react';

class BookmarkItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };
    this.editItem = this.editItem.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  editItem() {
    this.setState({
      isEdit: !this.state.isEdit
    });
  }

  renderForm() {
    return (
      <form>
        <input></input>
        <button>ok</button>
      </form>
    )
  }

  render(){

    const {isEdit} = this.state;

    const test = isEdit ? (<div>yes</div>) : (<div>no</div>);

    return (
      <ul className="bookmark-items">
        {this.props.items.map((item, index) => {
          return (
            <div className="list-item">
              <li className="list-item-li" key={item.id}><a href={"http://"+item.text}>{item.text}</a></li>
              <button
                onClick={(e) => {this.props.removeItem(index)}}
                className="remove-button">x
              </button>
              <button
                onClick={(e) => {this.editItem(index)}}
                className="edit-button"><i className="fa fa-pencil"></i>
              </button>
            </div>
            );
          }
        )}
      </ul>
    );
  }
}

export default BookmarkItems;
