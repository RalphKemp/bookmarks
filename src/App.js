import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import BookmarkList from './components/bookmark_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookmarkList />
      </div>
    );
  }
}

export default App;
