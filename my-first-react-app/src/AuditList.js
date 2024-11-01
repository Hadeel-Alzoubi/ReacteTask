// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AuditList = () => {
//   const [auditData, setAuditData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchId, setSearchId] = useState('');
//   const [singleAudit, setSingleAudit] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
      
//         const response = await axios.get('https://localhost:44338/api/Audit/getAllEmployees');
//         setAuditData(response.data);
//     };
//     fetchData();
//   }, []);

//   // Function to fetch audit by ID
//   const fetchAuditById = async () => {
//     setLoading(true);
//     setError(null);
//     setSingleAudit(null); // Reset previous result

//       const response = await axios.get(`https://localhost:44338/api/Audit/getEmployeeById/${searchId}`);
//       setSingleAudit(response.data);
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Audit Information</h1>

//       {/* Search by ID section */}
//       <div style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           placeholder="Enter Audit ID"
//           className="form-control"
//           value={searchId}
//           onChange={(e) => setSearchId(e.target.value)}
//         />
//         <button class="btn btn-primary" onClick={fetchAuditById}>Get Audit by ID</button>
//       </div>

//       {/* Display single audit result if available */}
//       {singleAudit && (
//         <div>
//           <h2>Audit Details</h2>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Action</th>
//                 <th>Employee</th>
//                 <th>Employee ID</th>
//                 <th>User ID</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{singleAudit.action}</td>
//                 <td>{singleAudit.employee}</td>
//                 <td>{singleAudit.employeeId}</td>
//                 <td>{singleAudit.userid}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Display all audits */}
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Action</th>
//             <th>Employee</th>
//             <th>Employee ID</th>
//             <th>User ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {auditData.map((audit) => (
//             <tr key={audit.id}>
//               <td>{audit.action}</td>
//               <td>{audit.employee}</td>
//               <td>{audit.employeeId}</td>
//               <td>{audit.userid}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AuditList;


// src/GetAllEmployees.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAllEmployees = () => {
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://localhost:44338/api/Audit/getAllEmployees');
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
            {employee.name} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetAllEmployees;
