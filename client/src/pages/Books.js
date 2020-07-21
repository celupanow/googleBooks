import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Input";

class Books extends Component {
  state = {
    books: [],
    searchTerm: ""
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  searchBooks = () => {
    API.getBooks(this.state.searchTerm)
      .then(res => {
        console.log(res.data.items);
        this.setState({ books: res.data.items });
      })
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks();
  };

  handleSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      id: book.id,
      title: book.volumeInfo.title,
      link: book.saleInfo.buyLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      thumbnail: book.volumeInfo.imageLinks.smallThumbnail
    }).then(() => this.searchBooks());
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input name="searchTerm" value={this.state.searchTerm} onChange={this.handleInputChange} placeholder="Search For a Book" />
              <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.authors}</p>
                    <p><img src={book.volumeInfo.imageLinks.smallThumbnail} /> </p>
                    <p>{book.volumeInfo.description}</p>
                    <p><a href={book.volumeInfo.infoLink}>Book Info</a></p>
                    <Button key={book.volumeInfo.title} onClick={() => this.handleSave(book.id)} className="input-lg">
                      Save
                      </Button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Books;
