using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models
{
    public class Pizzas
    {
        public int Id {get; set;}
        public string sFirstName {get; set;}
        public string sLastName {get; set;}

        public string sPhoneNumber {get; set;}

        public string dtPizzaDelivered {get; set;}
    
        public int iNumberOfPizzas {get; set;}
  
    }    
}