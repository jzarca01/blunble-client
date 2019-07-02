import React from "react";

import MutedList from "../muted-list/muted-list.component";
import Header from "../header";

import "./style.css";

const Dashboard = () => (
  <div className="dashboard">
    <Header />
    <div className="dashboard-content">
      <MutedList>Hello</MutedList>
      <div className="dashboard-buttons">
        <button>Test 1</button>
        <button>Test 2</button>
      </div>
    </div>
  </div>
);

export default Dashboard;
