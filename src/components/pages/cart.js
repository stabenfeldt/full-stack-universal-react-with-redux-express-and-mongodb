"use strict"

import React from 'react';
import {connect} from 'react-redux'
import {Panel, Col, Row, Well, Button, Label, ButtonGroup} from 'react-bootstrap';


class Cart extends React.Component{
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
      return(
        <Panel key={cartArr.id}>
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
                <Button bsStyle="default" bsSize="small">-</Button>
                <Button bsStyle="default" bsSize="small">+</Button>
                <span>     </span>
                <Button bsStyle="danger" bsSize="small">DELETE</Button>
              </ButtonGroup>
            </Col>

          </Row>
        </Panel>
      )
    })
    return(
      <Panel header="Cart" bsStyle="primary">
      {cartItemsList}
      </Panel>
    )
  }
}



function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}
export default connect(mapStateToProps)(Cart);
