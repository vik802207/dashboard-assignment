import React, { useState, useEffect } from "react";
import {
  SidebarComponent,
  MenuComponent,
} from "@syncfusion/ej2-react-navigations";
import { useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth <= 700);

  const items = [
    { text: "DASHBOARD", separator: true },
    { text: "Ecommerce", iconCss: "e-icons e-home", id: "dashboard" },

    { text: "PAGES", separator: true },
    { text: "Orders", iconCss: "e-icons e-location", id: "orders" },
    { text: "Employees", iconCss: "e-icons e-people", id: "employees" },
    { text: "Customers", iconCss: "e-icons e-user", id: "customers" },

    { text: "APPS", separator: true },
    { text: "Calendar", iconCss: "e-icons e-timeline-work-week", id: "calendar" },
    { text: "Kanban", iconCss: "e-icons e-folder", id: "kanban" },
    { text: "Editor", iconCss: "e-icons e-edit", id: "editor" },
    {
      text: "Color Picker",
      iconCss: "e-icons e-font-color",
      id: "color-picker",
    },
    { text: "CHARTS", separator: true },
    { text: "Line", iconCss: "e-icons e-line", id: "line" },
    { text: "Area", iconCss: "e-icons e-chart-insert-line", id: "area" },
    { text: "Pie", iconCss: "e-icons e-chart-insert-pie", id: "pie" },
  ];

  const processedItems = items.map((item) => {
    if (item.separator) return item;
    const isActive = location.pathname === `/${item.id}`;
    return {
      ...item,
      cssClass: isActive ? "active-menu" : "",
    };
  });

  const onItemSelect = (args) => {
    if (args.item.id) {
      navigate(`/${args.item.id}`);
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      {!sidebarVisible && (
        <button className="hamburger-btn" onClick={toggleSidebar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      )}

      {sidebarVisible && (
        <SidebarComponent
          width="250px"
          enableDock={false}
          target=".main-content"
          className="custom-sidebar"
        >
          <div className="sidebar-logo">
            DashPro
            <button className="hamburger-btn" onClick={toggleSidebar}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
          <MenuComponent
            items={processedItems}
            select={onItemSelect}
            orientation="Vertical"
            cssClass="custom-menu"
          />
        </SidebarComponent>
      )}
    </>
  );
};

export default Sidebar;
