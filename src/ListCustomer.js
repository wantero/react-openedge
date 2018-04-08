import React from 'react';

const ListCustomer = ({ customers }) => (
  <ul>
    <h1>Customers</h1>
    {
        customers && customers.map((customer, index) => <li key={index}>{customer.CustNum} - {customer.Name}</li>)
    }
  </ul>
  );

export default ListCustomer;