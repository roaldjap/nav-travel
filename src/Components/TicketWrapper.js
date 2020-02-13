import React, { Component } from 'react'

class Ticket extends Component {
  constructor(props) {
    super(props)

    this.state = {
      "date": "2020-02-01",
      "dateText": "01 Feb",
      "dateDay": "Sat",
      "temperature": "29°C",
      "products": [
        {
          "class": "Premier",
          "status": "Available",
          "price": "$510",
          "priceWithDiscount": "$456"
        },
        {
          "class": "Premier Plus",
          "status": "Last Spaces",
          "price": "$580",
          "priceWithDiscount": "$500"
        },
        {
          "class": "Catamaran",
          "status": "Available",
          "price": "$910",
          "priceWithDiscount": "$830"
        }
      ]
    }
  }

  render() {
    return (
      <div class="ticket-wrapper">
        <p>{this.state.dateText}</p>
      </div>

    )
  }
}

export default Ticket
