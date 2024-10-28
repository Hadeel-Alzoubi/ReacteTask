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

        [HttpGet("GetAllAduit")]
        public async Task<IActionResult> GetAll()
        {
            var auditInfo = await _db.Audits.ToListAsync();
            return Ok(auditInfo);
        }

        [HttpGet("GetAuditByID")]
        public async Task<IActionResult> GetByID(int id)
        {
            var auditById = await _db.Audits.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(auditById);
        }

        [HttpPost("CreateAudit")]
        public async Task<IActionResult> CreateAudit([FromForm] AuditRequestDTO dTO)
        {
            var createAudit = new Audit
            {
                Action = dTO.Action,
                Employee = dTO.Employee,
                EmployeeId = dTO.EmployeeId,
                Userid = dTO.Userid,
            };

            await _db.Audits.AddAsync(createAudit);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("EditAudit")]
        public async Task<IActionResult> EditAudit(int id,[FromForm] AuditRequestDTO dTO)
        {
            var audit = await _db.Audits.FirstOrDefaultAsync(x => x.Id == id);
            if (audit == null)
            {
                return NotFound();
            }

            audit.Action = dTO.Action ?? audit.Action;
            audit.Employee = dTO.Employee ?? audit.Employee;
            audit.EmployeeId = dTO.EmployeeId ?? audit.EmployeeId;
            audit.Userid = dTO.Userid ?? audit.Userid;

            _db.Audits.Update(audit);
            await _db.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("DeleteAudit")]
        public async Task<IActionResult> deleteAudit(int id)
        {
            var audit = await _db.Audits.FirstOrDefaultAsync(x => x.Id == id);
            if (audit == null)
            {
                return NotFound();
            }
            
            _db.Audits.Remove(audit);
            await _db.SaveChangesAsync();

            return Ok();
        }

    }
}
