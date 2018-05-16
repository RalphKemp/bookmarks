import React, { Component } from 'react';
import isValidDomain from 'is-valid-domain';

class BookmarkItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      text: ""
    };
    this.toggleEditItem = this.toggleEditItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEditItem() {
    this.setState({
      isEdit: !this.state.isEdit
    });
  }

   handleChange({target: {value}}) {
    this.setState({
      text: value,
      valid: isValidDomain(value)
    });
  }


  render(){
    const { isEdit, text } = this.state;

    const { item, editItem, index } = this.props;
    return (
      <div>
         {isEdit ?
          <form className="main-form-edit">
            <input className="search-edit"
                    onChange={ e => this.handleChange(e) }
                    placeholder={item.text}>
            </input>


            <button
              className="remove-button-edit">
              <i className="fa fa-arrow-left"></i>
            </button>


            <button
              className="search-button-edit"
              onClick={(e) => {
                editItem(e, item.id, index, text)
                this.toggleEditItem()
              }}
            >
            <i className="fa fa-check"></i>
            </button>
          </form>
        :
          <div className="list-item">
            <li className="list-item-li" key={item.id}><a href={`http://${item.text}`}>{item.text}</a></li>
            <button
              onClick={() => {this.props.removeItem(index)}}
              className="remove-button">x
            </button>
            <button
              onClick={() => {this.toggleEditItem()}}
              className="edit-button"><i className="fa fa-pencil"></i>
            </button>
          </div>
        }
      </div>
    );
  }
}

export default BookmarkItem;
