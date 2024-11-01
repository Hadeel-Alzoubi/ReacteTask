import React from 'react';
import './App.css'; // Import CSS file
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AuditList from './AuditList';
import CreateAuditForm from './CreateAuditForm';
import  UpdateEmployeeForm from './Update';
import DeleteEmployee from './Delete';
import ShowAllAction from './ShowAllAction';
import GetEmployeeById from './getEmployeeById';
function App() {
  return (
      <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-nav">
        <Link  class="nav-link" to="/AuditList">All Employee</Link> 
        <Link  class="nav-link" to="/CreateAuditForm">Create Employee Form</Link>
        <Link  class="nav-link" to="/UpdateEmployeeForm">Update Employee Form</Link>
        <Link  class="nav-link" to="/DeleteEmployee">Delete Employee</Link>
        <Link  class="nav-link" to="/GetEmployeeById">Get Employee By Id</Link> 
        <Link  class="nav-link" to="/ShowAllAction">Show All Action</Link>

      </div>
      </nav>
      <Routes>
        <Route path="/AuditList" element={<AuditList />} />
        <Route path='/CreateAuditForm' element={<CreateAuditForm/>}/>
        <Route path='/UpdateEmployeeForm' element={<UpdateEmployeeForm/>}/>
        <Route path='/DeleteEmployee' element={<DeleteEmployee/>}/>
        <Route path='/ShowAllAction' element={<ShowAllAction/>}/>
        <Route path='/GetEmployeeById' element={<GetEmployeeById/>}/>
      </Routes>
    </Router>
  );
}

export default App;