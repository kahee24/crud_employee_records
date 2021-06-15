using Employee_records.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Employee_records.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        // GET: api/<EmployeeController>
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            using (EmployeeRecordsContext ctx = new EmployeeRecordsContext())
            {
                return ctx.Employees.ToList();
            }
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            using (EmployeeRecordsContext ctx = new EmployeeRecordsContext())
            {
                return ctx.Employees.FirstOrDefault(f => f.Id == id);

            }
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public void Post([FromBody] Employee value)
        {
            using (EmployeeRecordsContext ctx = new EmployeeRecordsContext())
            {
                ctx.Employees.Add(value);
                ctx.SaveChanges();

            }
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Employee value)
        {
             using (EmployeeRecordsContext ctx = new EmployeeRecordsContext())
            {
                Employee employee = ctx.Employees.FirstOrDefault(f => f.Id == id);
                employee.FirstName = value.FirstName;
                employee.MiddleName = value.MiddleName;
                employee.LastName = value.LastName;
                ctx.SaveChanges();

            }
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

            using (EmployeeRecordsContext ctx = new EmployeeRecordsContext())
            {
                Employee employee = ctx.Employees.FirstOrDefault(f => f.Id == id);
                ctx.Employees.Remove(employee);
                ctx.SaveChanges();
            }
        }
    }
}
