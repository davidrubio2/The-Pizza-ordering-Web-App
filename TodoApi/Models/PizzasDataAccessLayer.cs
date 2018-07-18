using System;    
using System.Collections.Generic;    
using System.Data;    
using System.Data.SqlClient;    
using System.Linq;    
using System.Threading.Tasks; 

namespace TodoApi.Models
{
    public class OrdersDataAccessLayer
    {
        string sConnection = @"Server=tcp:centralpizzas.database.windows.net;Database=CentralPizzas;
User ID=test@centralpizzas;Password=Cane123#;Trusted_Connection=False;
Encrypt=True;";
        public IEnumerable<Orders> GetAllPizzasOrders()
        {
            List<Orders> lstOrders = new List<Orders>();

            using(SqlConnection con = new SqlConnection(sConnection))
            {
                SqlCommand cmd = new SqlCommand("spGetAllOrderPizzas", con);
                cmd.CommandType = CommandType.StoredProcedure;

                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while(rdr.Read())
                {
                    Orders orders = new Orders();

                    orders.Id = Convert.ToInt32(rdr["ID"]);
                    orders.sFirstName = rdr["FirstName"].ToString();
                    orders.sLastName = rdr["LastName"].ToString();
                    orders.sPhoneNumber = rdr["PhoneNumber"].ToString();
                    orders.dtPizzaDelivered = rdr["PizzaDelivered"].ToString();
                    orders.iNumberOfPizzas = Convert.ToInt32(rdr["NumberOfPizzas"]);

                    lstOrders.Add(orders);
                }
                con.Close();
            }
            return lstOrders;
        }

        public void AddPizzaOrder(Orders pizzas)
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