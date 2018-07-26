import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Book from "./Book";
import Author from "./Author";
const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Books</p>
        <Book />
        <p>Authors</p>
        <Author />
      </div>
    );
  }
}

export default App;
