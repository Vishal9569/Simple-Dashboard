import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Report from './Component/Report';
import Analytics from './Component/Analytics';
import Leads from './Component/Leads';
import "./index.css";


function App() {
  return (
    <Router>
      <div className="app-container">

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/report" element={<Report />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
