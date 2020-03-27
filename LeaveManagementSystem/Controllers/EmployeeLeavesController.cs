using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LeaveManagementSystem.Models;

namespace LeaveManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeLeavesController : ControllerBase
    {
        private readonly EmployeeContext _context;

        public EmployeeLeavesController(EmployeeContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeLeaves
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeLeaves>>> GetEmployeeLeaves()
        {
            return await _context.EmployeeLeaves.ToListAsync();
        }

        // GET: api/EmployeeLeaves/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeLeaves>> GetEmployeeLeaves(int id)
        {
            var employeeLeaves = await _context.EmployeeLeaves.FindAsync(id);

            if (employeeLeaves == null)
            {
                return NotFound();
            }

            return employeeLeaves;
        }

        // PUT: api/EmployeeLeaves/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeLeaves(int id, EmployeeLeaves employeeLeaves)
        {
            if (id != employeeLeaves.EmployeeLeaveId)
            {
                return BadRequest();
            }

            _context.Entry(employeeLeaves).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeLeavesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EmployeeLeaves
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<EmployeeLeaves>> PostEmployeeLeaves(EmployeeLeaves employeeLeaves)
        {
           // var employeeName = employeeLeaves.;
            // var check = await SingleOrDefault(t => t.EmployeeName == employeeLeaves.EmployeeName);
            var startdate = employeeLeaves.LeaveStartDate;
            var currentdate = DateTime.Now;
            var result = startdate - currentdate;
            if (result.Days > 7)
            {
                _context.EmployeeLeaves.Add(employeeLeaves);
                await _context.SaveChangesAsync();

            }
            

            return CreatedAtAction("GetEmployeeLeaves", new { id = employeeLeaves.EmployeeLeaveId }, employeeLeaves);
        }

        // DELETE: api/EmployeeLeaves/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmployeeLeaves>> DeleteEmployeeLeaves(int id)
        {
            var employeeLeaves = await _context.EmployeeLeaves.FindAsync(id);
            if (employeeLeaves == null)
            {
                return NotFound();
            }

            _context.EmployeeLeaves.Remove(employeeLeaves);
            await _context.SaveChangesAsync();

            return employeeLeaves;
        }

        private bool EmployeeLeavesExists(int id)
        {
            return _context.EmployeeLeaves.Any(e => e.EmployeeLeaveId == id);
        }
    }
}
