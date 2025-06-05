import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import ordersData from '../data/ordersData';
import  './Customers.css'

const Customers = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(ordersData.length / pageSize);

  const paginated = ordersData.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="orders-container">
      <h2>Customers</h2>
      <table className="orders-table">
        <thead>
          <tr>
          <th></th>
            <th></th>
            <th>Name</th>
            <th>Project Name</th>
            <th>Status</th>
            <th>Weeks</th>
            <th>Budget</th>
            <th>Location</th>
            <th>Customer ID</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((order, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>
                <div className="customer-info">
                  <img src={order.avatar} alt="avatar" />
                  <div>
                    <div className="customer-name">{order.name}</div>
                    <div className="customer-email">{order.email}</div>
                  </div>
                </div>
              </td>
              <td>{order.project}</td>
              <td>
                <div className={`status ${order.status}`}>
                  <FaCircle className="status-dot" />
                  {order.status}
                </div>
              </td>
              <td>{order.weeks}</td>
              <td>{order.budget}</td>
              <td>{order.location}</td>
              <td>{order.customerId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <div className="page-info">Page {page} of {totalPages} pages</div>
        <div className="page-buttons">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={page === i + 1 ? 'active' : ''}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
