import React, { useState } from 'react';
import './Sidebar.css';
import Dashboard from '../../assets/Dashboard.svg';
import Navigation from '../../assets/Navigation.svg';
import Close from '../../assets/Close.svg';

function Sidebar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <div className={`mobile-menu-icon ${isSidebarVisible ? 'hidden' : ''}`} onClick={toggleSidebar}>
        <img src={Navigation} alt="Menu" />
      </div>
      <div className={`sidebar-container ${isSidebarVisible ? 'visible' : ''}`} role="complementary">
        <div className="sidebar-title">
          <h1>Acmy Solutions</h1>
          <div className={`close-icon ${isSidebarVisible ? 'visible' : ''}`} onClick={toggleSidebar}>
            <img src={Close} alt="Close" />
          </div>
        </div>
        <div className="sidebar-list">
          <ul>
            <li>
              <div className="sidebar-list-item">
                <img src={Dashboard} alt="dashboard" />
                <p>Dashboard</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
