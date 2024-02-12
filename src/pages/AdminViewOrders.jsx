import React from 'react';
import '../styling/adminViewAllOrdersStyling.css';

const orders = [
    // ... order objects
];

const AdminViewAllOrdersPage = () => {
    return (
      <div className="admin-view-all-orders-page">
        <h1>Admin - View All Orders</h1>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Car</th>
              <th>Price</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.car}</td>
                <td>{order.price}</td>
                <td>{order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AdminViewAllOrdersPage;