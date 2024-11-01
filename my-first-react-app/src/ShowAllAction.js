import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowAllAction = () => {
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://localhost:44338/api/Audit/ShowAllAction');
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h3>All Employees</h3>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.employee} - {employee.timestamp} - {employee.action}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowAllAction;
