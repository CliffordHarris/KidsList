using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Dec.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public ICollection<Item> Items { get; set; }
    }
}