import React, { useState } from 'react';
import ordersData from '../data/ordersData';
import './OrdersTable.css';

export default function OrdersTable() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const pageSize = 10;

  const filteredData = ordersData.filter(order => {
    const matchesSearch =
      order.name.toLowerCase().includes(search.toLowerCase()) ||
      order.email.toLowerCase().includes(search.toLowerCase()) ||
      order.project.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === 'All' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginated = filteredData.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="orders-container">
      <h2>Orders</h2>

      {/* Search and Filter */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name, email or project..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(1);
          }}
        >
          <option value="All">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Cancel">Cancel</option>
        </select>
      </div>

      <table className="orders-table">
        <thead>
          <tr>
          <th></th>
            <th></th>
            <th>Customer</th>
            <th>Project</th>
            <th>Status</th>
            <th>Weeks</th>
            <th>Budget</th>
            <th>Location</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((order, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td className="customer-info">
                <img src={order.avatar} alt="avatar" />
                <div>
                  <div className="customer-name">{order.name}</div>
                  <div className="customer-email">{order.email}</div>
                </div>
              </td>
              <td>{order.project}</td>
              <td className={`status ${order.status}`}>{order.status}</td>
              <td>{order.weeks}w</td>
              <td>{order.budget}</td>
              <td>{order.location}</td>
              <td>{order.customerId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <div className="page-info">
          Page {page} of {totalPages}
        </div>
        <div className="page-buttons">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={page === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
