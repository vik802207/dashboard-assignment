import React, { useState } from "react";
import { FaBell, FaEnvelope, FaBoxOpen, FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
      </div>

      <div className="navbar-right">
        <div className="icon-group">
          <FaBoxOpen title="Orders" />
          <FaBell title="Notifications" />
          <FaEnvelope title="Messages" />
        </div>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="Profile"
            className="profile-pic"
          />
          <div
            className="username-dropdown"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="username">Emma Watson</span>
            <FaChevronDown className="dropdown-icon" />
          </div>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>View Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
