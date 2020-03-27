using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeaveManagementSystem.Models;

namespace LeaveManagementSystem.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        { }

        public DbSet<Employees> Employees { get; set; }
       // public DbSet<EmployeeLeaves> EmployeeLeaves { get; set; }

        public DbSet<LeaveManagementSystem.Models.EmployeeLeaves> EmployeeLeaves { get; set; }
       // public DbSet<EmployeeLeaves> EmployeeLeaves { get; set; }

        public DbSet<LeaveManagementSystem.Models.vLeaves> vLeaves { get; set; }
    }

}
