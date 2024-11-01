using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactTask.DTOs;
using ReactTask.Models;

namespace ReactTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuditController : ControllerBase
    {
        private readonly MyDbContext _db;
        public AuditController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("ShowAllAction")]
        public async Task<IActionResult> ShowAllAction()
        {
            var all = _db.Audits.ToList();
            return Ok(all);
        }

        [HttpGet("getAllEmployees")]
        public async Task<IActionResult> getAllEmployees()
        {
            var employees = _db.Employees.ToList();
            return Ok(employees);
        }

        [HttpGet("getEmployeeById/{id}")]
        public async Task<IActionResult> getEmployeeById(int id)
        {
            var employee = _db.Employees.Find(id);
            if (employee == null)
            {
                return BadRequest();
            }
            var audit = new Audit
            {
                Action = "Read",
                Employee = employee.Name,
                EmployeeId = employee.Id,
                Userid = 1,
                Timestamp = DateTime.Now

            };
            _db.Audits.Add(audit);
            await _db.SaveChangesAsync();
            return Ok(employee);
        }

        [HttpPost("postEmployees")]
        public async Task<IActionResult> postEmployees([FromForm] EmployeeDTO employee)
        {
            var addEmployee = new Employee
            {
                Name = employee.Name,
                Position = employee.Position,
                Department = employee.Department,
            };
            _db.Employees.Add(addEmployee);
            await _db.SaveChangesAsync();

            var audit = new Audit
            {
                Action = "Create",
                Employee = employee.Name,
                EmployeeId = addEmployee.Id,
                Userid = 1,
                Timestamp = DateTime.Now

            };
            _db.Audits.Add(audit);
            await _db.SaveChangesAsync();
            return Ok("Employee has been added successfuly");
        }

        [HttpPut("PutEmployee/{id}")]
        public async Task<IActionResult> PutEmployee(int id, [FromForm] EmployeeDTO employee)
        {
            var existEmployee = _db.Employees.FirstOrDefault(x => x.Id == id);
            if (existEmployee == null)
            {
                return BadRequest();
            }
            existEmployee.Name = employee.Name;
            existEmployee.Position = employee.Position;
            existEmployee.Department = employee.Department;
            _db.Employees.Update(existEmployee);
            await _db.SaveChangesAsync();

            var audit = new Audit
            {
                Action = "Update",
                Employee = existEmployee.Name,
                EmployeeId = existEmployee.Id,
                Userid = 1,
                Timestamp = DateTime.Now

            };
            _db.Audits.Add(audit);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("deleteEmployee/{id}")]
        public async Task<IActionResult> deleteEmployee(int id)
        {
            var employee = _db.Employees.Find(id);
            if (employee == null)
            {
                return BadRequest();
            }

            employee.IsDeleted = true;

            var audit = new Audit
            {
                Action = "Delete",
                Employee = employee.Name,
                EmployeeId = employee.Id,
                Userid = 1,
                Timestamp = DateTime.Now

            };
            _db.Audits.Add(audit);

            await _db.SaveChangesAsync();
            return NoContent();
        } 
    }
}
