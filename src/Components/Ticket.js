import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

class Ticket extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div class="ticket-wrapper">
          <div className="header">
            {this.props.details.dateText}<br/>
            ({this.props.details.dateDay})
          </div>
          <div className="red-badge">
            {this.props.details.temperature}
          </div>
          {/* Prime */}
          <p>{this.props.details.products[0].price}</p>
          <p>{this.props.details.products[0].priceWithDiscount}</p>
          <p>{this.props.details.products[0].status}</p>
      </div>
    )
  }
}

export default Ticket
