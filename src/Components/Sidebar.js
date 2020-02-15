import React, { Component } from 'react'

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div className="sidebar">
        <h1 className="our-prices">Our <br/> Prices</h1>
        <div className="wavy"></div>
        
        <div className="product-types premier">
          <p className="title">Premier &#9658;</p>
        </div>
        <div className="product-types premier-plus">
          <p className="title">Premier Plus &#9658;</p>
        </div>
        <div className="product-types catamaran">
          <p className="title">Catamaran &#9658;</p>
        </div>

        {/* <button onClick={this.props.loadSampleTickets}>Load Sample Data</button> */}
      </div>
    )
  }
}

export default Sidebar
