// src/CreateAuditForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateAuditForm = () => {
  const [formData, setFormData] = useState({
    Action: '',
    Employee: '',
    EmployeeId: '',
    Userid: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://localhost:44338/api/Audit/CreateAudit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setStatus('Audit created successfully!');
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-dark text-white text-center">
          <h3>Create New Audit</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label htmlFor="Action" className="col-sm-2 col-form-label">Action</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="Action"
                  id="Action"
                  value={formData.Action}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g., Create, Update, Delete"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="Employee" className="col-sm-2 col-form-label">Employee</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="Employee"
                  id="Employee"
                  value={formData.Employee}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Employee Name"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="EmployeeId" className="col-sm-2 col-form-label">Employee ID</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="EmployeeId"
                  id="EmployeeId"
                  value={formData.EmployeeId}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Employee ID"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="Userid" className="col-sm-2 col-form-label">User ID</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="Userid"
                  id="Userid"
                  value={formData.Userid}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter User ID"
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-dark">Create Audit</button>
            </div>
          </form>
          {status && (
            <div className="mt-3 text-center">
              <span className={status.startsWith('Error') ? "text-danger" : "text-success"}>{status}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateAuditForm;
