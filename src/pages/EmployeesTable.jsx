import React, { useState } from "react";
import employeesData from "../data/employeesData";
import "./EmployeesTable.css";

export default function EmployeesTable() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const pageSize = 10;

  const filteredData = employeesData.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || emp.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginated = filteredData.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="employees-container">
      <h2>Employees</h2>

      {/* Search and Filter */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name or email..."
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
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <table className="employees-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th> 
            <th>ID</th>
          </tr>
        </thead>

        <tbody>
          {paginated.map((emp, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td className="emp-info">
                <img src={emp.avatar} alt="emp" />
                <div>
                  <div className="emp-name">{emp.name}</div>
                  <div className="emp-email">{emp.email}</div>
                </div>
              </td>
              <td>{emp.position}</td>
              <td>{emp.team}</td>
              <td>{emp.email}</td>
              <td>{emp.country}</td>
              <td className={`status ${emp.status}`}>{emp.status}</td>{" "}
              {/* Add status cell with class */}
              <td>{emp.id}</td>
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
              className={page === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
