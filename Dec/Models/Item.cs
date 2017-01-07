using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dec.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsRequired { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}