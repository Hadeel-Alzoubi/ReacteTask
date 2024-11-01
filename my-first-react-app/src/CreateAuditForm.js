// src/AddEmployeeForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Position: '',
    Department: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('Name', formData.Name);
    formDataToSend.append('Position', formData.Position);
    formDataToSend.append('Department', formData.Department);

    try {
      await axios.post('https://localhost:44338/api/Audit/postEmployees', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setStatus('Employee has been added successfully!');
      setFormData({ Name: '', Position: '', Department: '' });
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-dark text-white text-center">
          <h3>Add New Employee</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Employee Name"
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="Position" className="col-sm-2 col-form-label">Position</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="Position"
                  id="Position"
                  value={formData.Position}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Employee Position"
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="Department" className="col-sm-2 col-form-label">Department</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="Department"
                  id="Department"
                  value={formData.Department}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Department ID"
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-dark">Add Employee</button>
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

export default AddEmployeeForm;
