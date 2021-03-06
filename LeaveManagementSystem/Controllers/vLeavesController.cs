﻿using System;
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
    public class vLeavesController : ControllerBase
    {
        private readonly EmployeeContext _context;

        public vLeavesController(EmployeeContext context)
        {
            _context = context;
        }

       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<vLeaves>>> GetvLeaves()
        {
            return await _context.vLeaves.ToListAsync();
        }

       
        [HttpGet("{id}")]
        public async Task<ActionResult<vLeaves>> GetvLeaves(int id)
        {
            var vLeaves = await _context.vLeaves.FindAsync(id);

            if (vLeaves == null)
            {
                return NotFound();
            }

            return vLeaves;
        }

      
        [HttpPut("{id}")]
        public async Task<IActionResult> PutvLeaves(int id, vLeaves vLeaves)
        {
            if (id != vLeaves.EmployeeLeaveId)
            {
                return BadRequest();
            }

            _context.Entry(vLeaves).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!vLeavesExists(id))
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
        public async Task<ActionResult<vLeaves>> PostvLeaves(vLeaves vLeaves)
        {
            _context.vLeaves.Add(vLeaves);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetvLeaves", new { id = vLeaves.EmployeeLeaveId }, vLeaves);
        }

      
        [HttpDelete("{id}")]
        public async Task<ActionResult<vLeaves>> DeletevLeaves(int id)
        {
            var vLeaves = await _context.vLeaves.FindAsync(id);
            if (vLeaves == null)
            {
                return NotFound();
            }

            _context.vLeaves.Remove(vLeaves);
            await _context.SaveChangesAsync();

            return vLeaves;
        }

        private bool vLeavesExists(int id)
        {
            return _context.vLeaves.Any(e => e.EmployeeLeaveId == id);
        }
    }
}
