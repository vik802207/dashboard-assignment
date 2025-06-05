// src/pages/Dashboard.jsx
import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
} from "@syncfusion/ej2-react-charts";

import { FaUsers, FaShoppingCart, FaBox, FaDollarSign } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const stats = [
    { label: "Users", value: 1245, bgColor: "#22d3ee", icon: <FaUsers /> },
    { label: "Sales", value: "$78.5k", bgColor: "#34d399", icon: <FaShoppingCart /> },
    { label: "Orders", value: 256, bgColor: "#AB47BC", icon: <FaBox /> },
    { label: "Revenue", value: "$146k", bgColor: "#f472b6", icon: <FaDollarSign /> },
  ];

  const barChartData = [
    { month: "Jan", sales: 4000, orders: 200 },
    { month: "Feb", sales: 6000, orders: 300 },
    { month: "Mar", sales: 8000, orders: 400 },
    { month: "Apr", sales: 10000, orders: 500 },
    { month: "May", sales: 12000, orders: 650 },
    { month: "Jun", sales: 11000, orders: 550 },
  ];

  const pieChartData = [
    { x: "Electronics", y: 35 },
    { x: "Clothing", y: 28 },
    { x: "Grocery", y: 20 },
    { x: "Furniture", y: 10 },
    { x: "Books", y: 7 },
  ];

  const activities = [
    "John placed an order",
    "Revenue crossed $100k",
    "New user Emma signed up",
    "5 orders shipped today",
    "Admin updated product",
    "Mike left a review",
    "Payment gateway updated",
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome Back, Admin!</h2>
      <p className="dashboard-subtitle">Here's what's happening in your store today:</p>

      {/* Stats Cards */}
      <div className="card-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card" style={{ backgroundColor: stat.bgColor }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.label}</h3>
              <p>{stat.value}</p>
              <button className="card-btn">View</button>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="charts-row">
        <ChartComponent
          primaryXAxis={{ valueType: "Category", title: "Month" }}
          primaryYAxis={{ title: "Sales ($)" }}
          title="Monthly Sales vs Orders"
          width="100%"
        >
          <Inject services={[ColumnSeries, Category]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={barChartData}
              xName="month"
              yName="sales"
              type="Column"
              name="Sales"
              fill="#3b82f6"
            />
            <SeriesDirective
              dataSource={barChartData}
              xName="month"
              yName="orders"
              type="Column"
              name="Orders"
              fill="#f59e0b"
            />
          </SeriesCollectionDirective>
        </ChartComponent>

        <AccumulationChartComponent title="Product Categories Breakdown">
          <Inject services={[PieSeries]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieChartData}
              xName="x"
              yName="y"
              type="Pie"
              dataLabel={{ visible: true, position: "Outside", name: "x" }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
      {/* Revenue Updates Section */}
<div className="revenue-updates">
  <div className="revenue-summary">
    <div className="budget">
      <h4>$93,438</h4>
      <span className="budget-increase">23%</span>
      <p>Budget</p>
    </div>
    <div className="expense">
      <h4>$48,487</h4>
      <p>Expense</p>
    </div>
    <button className="download-btn">Download Report</button>
  </div>

  <ChartComponent
    primaryXAxis={{ valueType: "Category" }}
    primaryYAxis={{ labelFormat: "${value}" }}
    width="100%"
    height="250px"
    title="Budget vs Expense"
  >
    <Inject services={[ColumnSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective
        dataSource={[
          { month: "Jan", budget: 120, expense: 200 },
          { month: "Feb", budget: 140, expense: 240 },
          { month: "Mar", budget: 180, expense: 260 },
          { month: "Apr", budget: 200, expense: 300 },
          { month: "May", budget: 200, expense: 300 },
          { month: "Jun", budget: 190, expense: 300 },
          { month: "Jul", budget: 200, expense: 300 },
        ]}
        xName="month"
        yName="budget"
        name="Budget"
        type="Column"
        fill="#10b981"
      />
      <SeriesDirective
        dataSource={[
          { month: "Jan", budget: 120, expense: 200 },
          { month: "Feb", budget: 140, expense: 240 },
          { month: "Mar", budget: 180, expense: 260 },
          { month: "Apr", budget: 200, expense: 300 },
          { month: "May", budget: 200, expense: 300 },
          { month: "Jun", budget: 190, expense: 300 },
          { month: "Jul", budget: 200, expense: 300 },
        ]}
        xName="month"
        yName="expense"
        name="Expense"
        type="Column"
        fill="#1f2937"
      />
    </SeriesCollectionDirective>
  </ChartComponent>
</div>


      {/* Activity Log */}
      <div className="activity-log">
        <h3>Recent Activity</h3>
        <ul>
          {activities.map((act, idx) => (
            <li key={idx}>{act}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
