using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviepediaApi.Models
{
	public class Actor
	{
		//public String id { get; set; }
		public String name { get; set; }
		public int born { get; set; }
		public String birthplace { get; set; }
		public String biography { get; set; }
        public String picture { get; set; }

        public List<Movie> filmography { get; set; }
	}
}