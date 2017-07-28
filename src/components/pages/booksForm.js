"use strict"
import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';


class BooksForm extends React.Component{

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
        </Panel>
      </Well>


    )
  }
}


export default BooksForm;
