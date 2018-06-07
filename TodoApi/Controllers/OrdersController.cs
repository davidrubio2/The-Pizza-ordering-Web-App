using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;


namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : Controller
    {
  
     OrdersDataAccessLayer objOrders = new OrdersDataAccessLayer();

        // GET api/values
        [HttpGet]
        public  ActionResult<List<Orders>> GetAll()
        {
            List<Orders> lstOrders = new List<Orders>();  
            lstOrders = objOrders.GetAllPizzasOrders().ToList();  
  
            return lstOrders; 

        }

    }
}
