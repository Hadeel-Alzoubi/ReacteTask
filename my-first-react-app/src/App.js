import React from 'react';
import './App.css'; // Import CSS file
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AuditList from './AuditList';
import CreateAuditForm from './CreateAuditForm';
function App() {
  return (
      <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-nav">
        <Link  class="nav-link" to="/AuditList">AuditList</Link> 
        <Link  class="nav-link" to="/CreateAuditForm">CreateAuditForm</Link>
      </div>
      </nav>
      <Routes>
        <Route path="/AuditList" element={<AuditList />} />
        <Route path='/CreateAuditForm' element={<CreateAuditForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;