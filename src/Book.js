import React, { Component } from "react";
const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";
class Book extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    this.getBooks("");
  }

  getBooks = async search => {
    const url = `${API_HOST}/books`;
    const response = await fetch(url);
    const bookData = await response.json();
    this.setState({ books: bookData });
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

export default Book;
