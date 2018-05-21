import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import swal from 'sweetalert';

class BookmarkItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      text: '',
    };
    this.toggleEditItem = this.toggleEditItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEditItem() {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }

  handleChange({ target: { value } }) {
    this.setState({
      text: value,
    });
  }

  render() {
    const { isEdit, text } = this.state;

    const {
      item, editItem, index, removeItem,
    } = this.props;
    return (
      <div>
        {isEdit ?
          <form className="main-form-edit">
            <input
              className="search-edit"
              onChange={e => this.handleChange(e)}
              placeholder={item.text}
            />
            <button
              className="remove-button-edit"
            >
              <i className="fa fa-arrow-left" />
            </button>
            <button
              className="search-button-edit"
              onClick={(e) => {
                editItem(e, item.id, index, text);
                this.toggleEditItem();
              }}
            >
              <i className="fa fa-check" />
            </button>
          </form>
        :
          <div className="list-item">
            <li className="list-item-li" key={item.id}><a href={`http://${item.text}`}>{item.text}</a></li>
            <button
              onClick={() => { removeItem(index); }}
              className="remove-button"
            >x
            </button>
            <button
              onClick={() => { this.toggleEditItem(); }}
              className="edit-button"
            ><i className="fa fa-pencil" />
            </button>
          </div>
        }
      </div>
    );
  }
}


BookmarkItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.string,
  }),
  index: PropTypes.number,
  editItem: PropTypes.func,
  removeItem: PropTypes.func,
};


BookmarkItem.defaultProps = {
  item: undefined,
  index: undefined,
  editItem: noop,
  removeItem: noop,
};

export default BookmarkItem;
