using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveManagementSystem.Models
{
    public class EmployeeLeaves
    {
        [Key]
        public int EmployeeLeaveId { get; set; }
       // public string EmployeeName { get; set; }
        public DateTime LeaveStartDate { get; set; }
        public DateTime LeaveEndDate { get; set; }
        public int EmployeId { get; set; }
    }
}
