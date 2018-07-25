import React, { Component } from 'react';
const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";
class Author extends Component {
  constructor() {
    super();
    this.state = {
      authors: []
    };
  }
  componentDidMount() {
    this.getAuthors("");
  }
  getAuthors = async search => {
    const url = `${API_HOST}/authors`;
    const response = await fetch(url);
    const authorsData = await response.json();
    this.setState({ authors: authorsData });
  };

  render() {
    return (
      <div>
        {this.state.authors.map((author, i) => {
          return <li> {author.name}</li>;
        })}
      </div>
    );
  }
}

export default Author;
