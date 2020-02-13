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
          <p className="title">Premier</p>
        </div>
        <div className="product-types premier-plus">
          <p className="title">Premier Plus</p>
        </div>
        <div className="product-types catamaran">
          <p className="title">Catamaran</p>
        </div>
      </div>
    )
  }
}

export default Sidebar
