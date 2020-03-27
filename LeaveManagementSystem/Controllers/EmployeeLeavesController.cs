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

     
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeLeaves>>> GetEmployeeLeaves()
        {
            return await _context.EmployeeLeaves.ToListAsync();
        }

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

       
        [HttpPost]
        public async Task<ActionResult<EmployeeLeaves>> PostEmployeeLeaves(EmployeeLeaves employeeLeaves)
        {
           
            
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
