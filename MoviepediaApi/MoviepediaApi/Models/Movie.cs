using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviepediaApi.Models
{
	public class Movie
	{
		//public String id { get; set; }
		public String title { get; set; }
		public int released { get; set; }
		public String genre { get; set; }
		public String tagline { get; set; }
        public String picture { get; set; }
        public String trailer { get; set; }
        public int rate { get; set; }
        public string roles { get; set; }

        //public List<Role> cast { get; set; }
	}
}