"use strict"

import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom'

import {postBooks, deleteBooks} from '../../actions/booksActions';


class BooksForm extends React.Component{

  handleSubmit() {
    const books = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value
    }]
    this.props.postBooks(books)
  }

  onDelete() {
    let bookId = findDOMNode(this.refs.delete).value;
    this.props.deleteBooks(bookId);
  }

  render() {
    const booksList = this.props.books.map(function(booksArr){
      return(
        <option key={booksArr._id}> {booksArr._id} </option>
       )

    });
    return(
      <Well>
        <Panel>

          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
                type="placeholder"
                placeholder="Enter a title"
                ref="title" />
          </FormGroup>

          <FormGroup controlId="description">
            <ControlLabel>Title</ControlLabel>
            <FormControl
                type="placeholder"
                placeholder="Enter a description"
                ref="description" />
          </FormGroup>

          <FormGroup controlId="price">
            <ControlLabel>Title</ControlLabel>
            <FormControl
                type="placeholder"
                placeholder="Enter a price"
                ref="price" />
          </FormGroup>

      <Button
        bsStyle='primary'
        onClick={this.handleSubmit.bind(this)}>
        Save book
      </Button>

        <Panel style={{marginTop:'25px'}} >
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select a book ID to delete</ControlLabel>
            <FormControl ref="delete" componentClass="select" placeholder="select">
              <option value="select">select</option>
              {booksList}
            </FormControl>
          </FormGroup>
          <Button onClick={this.onDelete.bind(this)}
            bsStyle="danger"> Delete book </Button>
        </Panel>

      </Well>


    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      postBooks,
      deleteBooks
    },
    dispatch )
}


export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
