import React, { Component } from 'react'
import './App.css'
import ListCustomer from './ListCustomer'

import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      customers: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('http://oemobiledemo.progress.com/OEMobileDemoServices/rest/CustomerService/Customer')
      .then(response => {
        //console.log(response.data.dsCustomer.ttCustomer);
        this.setState({customers: response.data.dsCustomer.ttCustomer});
      })
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Get Customers</button>
        <ListCustomer customers={this.state.customers} />
      </div>
    )
  }
}
export default App