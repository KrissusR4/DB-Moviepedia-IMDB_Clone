using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Neo4jClient;
using Neo4jClient.Cypher;
using MoviepediaApi;
using MoviepediaApi.Models;

namespace MoviepediaApi.Controllers
{
    public class MovieController : ApiController
    {
		public List<Movie> GetMoviesLike(string movieTitle)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			string title = ".*" + movieTitle + ".*";

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("movieTitle", title);


			var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n:Movie) where exists(n.title) and n.title =~ {movieTitle} return n",
															queryDict, CypherResultMode.Set);

			List<Movie> movies = ((IRawGraphClient)client).ExecuteGetCypherResults<Movie>(query).ToList();

			return movies.ToList();
		}

		public Movie GetMovie(string mTitle)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("movieTitle", mTitle);


			var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n:Movie) where exists(n.title) and n.title =~ {movieTitle} return n",
															queryDict, CypherResultMode.Set);

			List<Movie> movies = ((IRawGraphClient)client).ExecuteGetCypherResults<Movie>(query).ToList();

			return movies.ToList().First();
		}

		public List<Movie> GetMoviesOrSeries(string title)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			string movieOrSeriesTitle = ".*" + title + ".*";

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("movieOrSeriesTitle", movieOrSeriesTitle);


			var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n) where exists(n.title) and n.title =~ {movieOrSeriesTitle} return n",
															queryDict, CypherResultMode.Set);

			List<Movie> movies = ((IRawGraphClient)client).ExecuteGetCypherResults<Movie>(query).ToList();

			return movies.ToList();
		}

		public List<Movie> GetMoviesFromDirector(string directorName)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("directorName", directorName);


			var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n)-[r:DIRECTED]->(m:Movie) where exists(n.name) and n.name =~ {directorName} return m",
															queryDict, CypherResultMode.Set);

			List<Movie> movies = ((IRawGraphClient)client).ExecuteGetCypherResults<Movie>(query).ToList();

			return movies.ToList();
		}

		public List<Movie> GetMoviesOrSeriesFromDirector(string dName)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("directorName", dName);


			var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n)-[r:DIRECTED]->(m) where exists(n.name) and n.name =~ {directorName} return m",
															queryDict, CypherResultMode.Set);

			List<Movie> movies = ((IRawGraphClient)client).ExecuteGetCypherResults<Movie>(query).ToList();

			return movies.ToList();
		}

		public List<Movie> GetMoviesFromProducent(string producentName)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("producentName", producentName);


			var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n)-[r:PRODUCED]->(m:Movie) where exists(n.name) and n.name =~ {producentName} return m",
															queryDict, CypherResultMode.Set);

			List<Movie> movies = ((IRawGraphClient)client).ExecuteGetCypherResults<Movie>(query).ToList();

			return movies.ToList();
		}

		public List<Movie> GetMoviesOrSeriesFromProducent(string pName)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("producentName", pName);


			var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n)-[r:PRODUCED]->(m) where exists(n.name) and n.name =~ {producentName} return m",
															queryDict, CypherResultMode.Set);

			List<Movie> movies = ((IRawGraphClient)client).ExecuteGetCypherResults<Movie>(query).ToList();

			return movies.ToList();
		}

		public List<Movie> GetMoviesFromWriter(string writerName)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("writerName", writerName);


			var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n)-[r:WROTE]->(m:Movie) where exists(n.name) and n.name =~ {writerName} return m",
															queryDict, CypherResultMode.Set);

			List<Movie> movies = ((IRawGraphClient)client).ExecuteGetCypherResults<Movie>(query).ToList();

			return movies.ToList();
		}

		public List<Movie> GetMoviesOrSeriesFromWriter(string wName)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("writerName", wName);


			var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n)-[r:WROTE]->(m) where exists(n.name) and n.name =~ {writerName} return m",
															queryDict, CypherResultMode.Set);

			List<Movie> movies = ((IRawGraphClient)client).ExecuteGetCypherResults<Movie>(query).ToList();

			return movies.ToList();
		}

		public List<Role> GetMoviesFromActor(string actorName)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("actorName", actorName);


			var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n)-[r:ACTED_IN]->(m:Movie) where exists(n.name) and n.name =~ {actorName} RETURN {title: m.title, role: r.roles} as movieRole",
															queryDict, CypherResultMode.Set);

			List<Role> roles = ((IRawGraphClient)client).ExecuteGetCypherResults<Role>(query).ToList();

			return roles.ToList();
		}

		public List<Role> GetMoviesOrSeriesFromActor(string aName)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("actorName", aName);


			var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n)-[r:ACTED_IN]->(m) where exists(n.name) and n.name =~ {actorName} return {title: m.title, role: r.roles} as movieOrSeriesRole",
															queryDict, CypherResultMode.Set);

			List<Role> roles = ((IRawGraphClient)client).ExecuteGetCypherResults<Role>(query).ToList();

			return roles.ToList();
		}

		public List<Movie> GetMoviesFromRole(string roleName)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			string name = ".*" + roleName + ".*";

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("roleName", name);


			var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n)-[r:ACTED_IN]->(m:Movie) where exists(r.roles) and r.roles =~ {roleName} return m",
															queryDict, CypherResultMode.Set);

			List<Movie> movies = ((IRawGraphClient)client).ExecuteGetCypherResults<Movie>(query).ToList();

			return movies.ToList();
		}

        [HttpPost]
		public void addMovie([FromBody] Movie m)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("title", m.title);
			queryDict.Add("released", m.released);
			queryDict.Add("genre", m.genre);
			queryDict.Add("tagline", m.tagline);
            queryDict.Add("picture", m.picture);
            queryDict.Add("trailer", m.trailer);

			var query = new Neo4jClient.Cypher.CypherQuery("MERGE (n:Movie {title:'" + m.title
															+ "', released:" + m.released + ", genre:'" + m.genre
															+ "', tagline:'" + m.tagline
															+ "', picture:'" + m.picture + "', trailer:'" + m.trailer + "' , rate:" +
                                                            m.rate + "}) return n",
															queryDict, CypherResultMode.Set);

            ((IRawGraphClient)client).ExecuteCypher(query);

		}

        [HttpPut]
        public void updateMovie([FromBody] Movie m)
        {
            var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
            client.Connect();

            Dictionary<string, object> queryDict = new Dictionary<string, object>();
            //queryDict.Add("title", s.title);
            queryDict.Add("rate", m.rate);

            var query = new Neo4jClient.Cypher.CypherQuery("MERGE (n:Movie {title:'" + m.title + "'}) ON MATCH SET n.rate={rate} return n",
                                                            queryDict, CypherResultMode.Set);

            ((IRawGraphClient)client).ExecuteCypher(query);
           
        }

		/*public void update(string title, int rate)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			//queryDict.Add("title", title);
			queryDict.Add("rate", rate);

			var query = new Neo4jClient.Cypher.CypherQuery("MERGE (n:Movie {title:'" + title + "'}) ON MATCH SET n.rate={rate}",
															queryDict, CypherResultMode.Set);

			((IRawGraphClient)client).ExecuteCypher(query);

		}*/

		public string deleteMovie(string title)
		{
			var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
			client.Connect();

			Dictionary<string, object> queryDict = new Dictionary<string, object>();
			queryDict.Add("movieTitle", title);

			var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) where (n:Movie) and exists(n.title) and n.title =~ {movieTitle} delete n",
															queryDict, CypherResultMode.Projection);

            ((IRawGraphClient)client).ExecuteCypher(query);

			return "Movie deleted.";

		}

        public List<Movie> GetMoviesFromYear(int released, int count)
        {
            var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
            client.Connect();

            Dictionary<string, object> queryDict = new Dictionary<string, object>();
            queryDict.Add("released", released);
            queryDict.Add("count", count);


            var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n:Movie) where exists(n.released) and n.released > {released} return n order by n.rate desc limit {count}",
                                                            queryDict, CypherResultMode.Set);

            List<Movie> movies = ((IRawGraphClient)client).ExecuteGetCypherResults<Movie>(query).ToList();

            return movies.ToList();
        }

        public List<Movie> GetMoviesByGenre(string genre)
        {
            var client = new GraphClient(new Uri("http://localhost:7474/db/data"), "neo4j", "edukacija");
            client.Connect();

            string movieGenre = ".*" + genre + ".*";

            Dictionary<string, object> queryDict = new Dictionary<string, object>();
            queryDict.Add("genre", movieGenre);


            var query = new Neo4jClient.Cypher.CypherQuery("start n=node(*) match (n:Movie) where exists(n.genre) and n.genre =~ {genre} return n",
                                                            queryDict, CypherResultMode.Set);

            List<Movie> movies = ((IRawGraphClient)client).ExecuteGetCypherResults<Movie>(query).ToList();

            return movies.ToList();
        }

    }
}
