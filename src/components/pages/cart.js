"use strict"

import React from 'react';
import {connect} from 'react-redux'
import {Modal, Panel, Col, Row, Well, Button, Label, ButtonGroup} from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { deleteCartItem, updateCart } from '../../actions/cartActions'


class Cart extends React.Component{

  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  open(){
    this.setState({
      showModal: true
    })
  }

  close(){
    this.setState({
      showModal: false
    })
  }

  onDelete(_id) {
      const currentBookToDelete = this.props.cart;
      const indexToDelete = currentBookToDelete.findIndex(
        function(cart) {
          return cart._id === _id
        }
      )
      let cartAfterDelete =  [ ...currentBookToDelete.slice(0, indexToDelete),
        ...currentBookToDelete.slice(indexToDelete + 1)]

      this.props.deleteCartItem(cartAfterDelete)
  }

  onIncrement(_id) {
    this.props.updateCart(_id, 1)
  };

  onDecrement(_id) {
    this.props.updateCart(_id, -1)
  };


  render(){
    if (this.props.cart[0]) {
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }

  renderEmpty() {
    return(<div></div>)
  }

  renderCart() {
    const cartItemsList = this.props.cart.map(function(cartArr) {
      if (cartArr.quantity <= 0) {
        return
      }
      return(
        <Panel key={cartArr._id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartArr.title}</h6><span>    </span>
            </Col>

            <Col xs={12} sm={2}>
              <h6>USD {cartArr.price}</h6>
            </Col>

            <Col xs={12} sm={2}>
              <h6>
                <Label bsStyle="success">
                   qty: {cartArr.quantity}
                </Label>
              </h6>
            </Col>

            <Col xs={4} sm={4}>
              <ButtonGroup style={{minWidth:'300px'}}>
                <Button
                  bsStyle="default"
                  bsSize="small"
                  onClick={this.onDecrement.bind(this, cartArr._id)}>
                  -
                </Button>
                <Button
                  bsStyle="default"
                  bsSize="small"
                  onClick={this.onIncrement.bind(this, cartArr._id)}
                >
                  +
                </Button>
                <span>     </span>
                <Button
                  bsStyle="danger"
                  bsSize="small"
                  onClick={this.onDelete.bind(this, cartArr._id)}
                >
                  DELETE
                </Button>
              </ButtonGroup>
            </Col>

          </Row>
        </Panel>
      )
    }, this)
    return(
      <Panel header="Cart" bsStyle="primary">
      {cartItemsList}
      <Row>
        <Col xs={12}>
          <h6>Total amount: </h6>
          <Button
            bsStyle="success"
            size="small"
            onClick={this.open.bind(this)}
          >
            PROCEED TO CHECKOUT
          </Button>
        </Col>
      </Row>
      <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6> test </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Panel>
    )
  }
}



function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteCartItem: deleteCartItem,
    updateCart: updateCart
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
