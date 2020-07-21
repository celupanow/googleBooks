import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getAllBooks();
  }

getAllBooks = () => {
  API.getSavedBooks()
  .then(res =>
    this.setState({
      books: res.data
    })
    )
    .catch(err => console.log(err));
};

handleBookDelete = _id => {
  API.deleteBook(_id).then(res => this.getAllBooks());
};

//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchBooks();
//   };

  
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="xs-12">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.authors}</p>
                    <p><img src={book.thumbnail} /></p>
                    <p>{book.description}</p>
                    <p><a href={book.link}>Book Info</a></p>
                    <Button key={book._id} onClick={() => this.handleBookDelete(book._id)} className="input-lg">
                      Delete
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

export default Saved;


