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
    // const response = await fetch(url);
    // const bookData = await response.json();
    // this.setState({ books: bookData });

    this.setState({
      books: [
        {
          title: "HARRY POTTER",
          _id: "23094823048"
        }
      ]
    });
  };

  render() {
    return (
      <div>
        {this.state.books.map((book) => {
          return <li key ={book._id}> {book.title}</li>;
        })}
      </div>
    );
  }
}

export default Book;
