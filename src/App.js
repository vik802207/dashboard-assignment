import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar";

import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Navbar";
import Customers from "./pages/Customers";
import EmployeesTable from "./pages/EmployeesTable";
import OrdersTable from "./pages/OrdersTable";
import Calendar from "./pages/Calendar";
import KanbanBoard from "./pages/KanbanBoard";
import RichTextEditor from "./pages/RichTextEditor";
import ColorPicker from "./pages/ColorPicker";
import LineChartWithClick from "./pages/LineChartWithClick";
import AreaChart from "./pages/AreaChart";
const Charts = () => <div className="p-6">📈 Charts</div>;
const Tables = () => <div className="p-6">📋 Tables</div>;

const App = () => {
  return (
    <div className="abc">
    <Router>
      <div className="vik">
      <Navbar/>
        <Sidebar />
        <div >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<KanbanBoard/>} />
            <Route path="/customers" element={<Customers/>} />
            <Route path="/orders" element={<OrdersTable/>} />
            <Route path="editor" element={<RichTextEditor/>}/>
            <Route path="/employees" element={<EmployeesTable/>} />
            <Route path="/color-picker" element={<ColorPicker/>} />
            <Route path="/line" element={<LineChartWithClick/>} />
            <Route path="/area" element={<AreaChart/>}/>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
   
  );
};

export default App;
