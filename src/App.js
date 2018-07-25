import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    this.getData("");
  }

  getData = async search => {
    const response = await fetch(process.env.REACT_APP_BOOKS_API||"http://localhost:3000/books");
    const bookData = await response.json();
    this.setState({ books: bookData });
  };
  render() {
    return (
      <div>
        {this.state.books.map((book, i) => {
          return<li> {book.title}</li>;
        })}
      </div>
    );
  }
}

export default App;
