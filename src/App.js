import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";
class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      authors: []
    };
  }
  componentDidMount() {
    this.getBooks("");
    this.getAuthors("");
  }

  getBooks = async search => {
    const url = `${API_HOST}/books`;
    const response = await fetch(url);
    const bookData = await response.json();
    this.setState({ books: bookData });
  };

  getAuthors = async search => {
    const url = `${API_HOST}/authors`;
    const response = await fetch(url);
    const authorsData = await response.json();
    this.setState({ authors: authorsData });
  };

  render() {
    return (
      <div>
        {this.state.books.map((book, i) => {
          return <li> {book.title}</li>;
        })}
      </div>
    );
  }
}

export default App;
