"use strict"

import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom'

import {postBooks} from '../../actions/booksActions';


class BooksForm extends React.Component{

  handleSubmit() {
    const books = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value
    }]
    this.props.postBooks(books)
  }

  render() {
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

        </Panel>
      </Well>


    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ postBooks}, dispatch )
}

export default connect(null, mapDispatchToProps)(BooksForm);
