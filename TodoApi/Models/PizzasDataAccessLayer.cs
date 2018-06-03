using System;    
using System.Collections.Generic;    
using System.Data;    
using System.Data.SqlClient;    
using System.Linq;    
using System.Threading.Tasks; 

namespace TodoApi.Models
{
    public class PizzasDataAccessLayer
    {
        string sConnection = @"Server=DESKTOP-ACVT6B5\SQLEXPRESS;Database=pizzas;Trusted_Connection=True;MultipleActiveResultSets=true";
        public IEnumerable<Pizzas> GetAllPizzasOrders()
        {
            List<Pizzas> lstPizzas = new List<Pizzas>();

            using(SqlConnection con = new SqlConnection(sConnection))
            {
                SqlCommand cmd = new SqlCommand("spGetAllOrderPizzas", con);
                cmd.CommandType = CommandType.StoredProcedure;

                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while(rdr.Read())
                {
                    Pizzas pizzas = new Pizzas();

                    pizzas.Id = Convert.ToInt32(rdr["ID"]);
                    pizzas.sFirstName = rdr["FirstName"].ToString();
                    pizzas.sLastName = rdr["LastName"].ToString();
                    pizzas.sPhoneNumber = rdr["PhoneNumber"].ToString();
                    pizzas.dtPizzaDelivered = rdr["PizzaDelivered"].ToString();
                    pizzas.iNumberOfPizzas = Convert.ToInt32(rdr["NumberOfPizzas"]);

                    lstPizzas.Add(pizzas);
                }
                con.Close();
            }
            return lstPizzas;
        }

        public void AddPizzaOrder(Pizzas pizzas)
        {
            using (SqlConnection con = new SqlConnection(sConnection))
            {
                SqlCommand cmd = new SqlCommand("spAddPizzaOrder",con);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@FirstName",pizzas.sFirstName);
                cmd.Parameters.AddWithValue("@LastName",pizzas.sLastName);
                cmd.Parameters.AddWithValue("@PhoneNumber",pizzas.sPhoneNumber);
                cmd.Parameters.AddWithValue("@PizzaDelivered",pizzas.dtPizzaDelivered);
                cmd.Parameters.AddWithValue("@NumberOfPizzas",pizzas.iNumberOfPizzas);

                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();
            }
        }
    }
}