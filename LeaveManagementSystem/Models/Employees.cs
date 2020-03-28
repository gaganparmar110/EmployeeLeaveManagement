using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveManagementSystem.Models
{
    public class Employees
    {
        [Key]
        public int EmployeId { get; set; }

       
        public string EmployeName { get; set; }
    }
}
