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
  
     PizzasDataAccessLayer objPizzas = new PizzasDataAccessLayer();

        // GET api/values
        [HttpGet]
        public  ActionResult<List<Pizzas>> GetAll()
        {
            List<Pizzas> lstPizzas = new List<Pizzas>();  
            lstPizzas = objPizzas.GetAllPizzasOrders().ToList();  
  
            return lstPizzas; 

        }

    }
}
