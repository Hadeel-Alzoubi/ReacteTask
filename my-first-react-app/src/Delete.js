// src/DeleteEmployee.js
import React, { useState } from 'react';
import axios from 'axios';

const DeleteEmployee = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [status, setStatus] = useState('');

  const deleteEmployee = async () => {
    try {
      await axios.delete(`https://localhost:44338/api/Audit/deleteEmployee/${employeeId}`);
      setStatus('Employee deleted successfully!');
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        placeholder="Enter Employee ID"
      />
      <button onClick={deleteEmployee}>Delete Employee</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default DeleteEmployee;
