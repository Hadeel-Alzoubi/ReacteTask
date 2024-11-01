// src/GetEmployeeById.js
import React, { useState } from 'react';
import axios from 'axios';

const GetEmployeeById = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employee, setEmployee] = useState(null);

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`https://localhost:44338/api/Audit/getEmployeeById/${employeeId}`);
      setEmployee(response.data);
    } catch (error) {
      console.error("Error fetching employee:", error);
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
      <button onClick={fetchEmployee}>Fetch Employee</button>
      {employee && (
        <div>
          <h3>{employee.name}</h3>
          <p>Position: {employee.position}</p>
        </div>
      )}
    </div>
  );
};

export default GetEmployeeById;
