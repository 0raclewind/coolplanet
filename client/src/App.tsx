import React from 'react';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Users from './components/Users/Users';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<Detail />} />
            <Route path="/*" element={<Navigate to="/users" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
