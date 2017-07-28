"use strict"

import React from 'react';
import {connect} from 'react-redux'
import {Panel, Col, Row, Well, Button} from 'react-bootstrap';


class Cart extends React.Component{
  render(){
    if (this.porps.cart[0]) {
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
              <h6>cartArr.title</h6>
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
}


function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}
export default connect(mapStateToProps)(Cart);
