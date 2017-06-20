using GarageAngularJS.Models;
using GarageAngularJS.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;

namespace GarageAngularJS.Controllers
{
    public class ValuesController : ApiController
    {
        GarageRepository garage = new GarageRepository();
        // GET api/values

        public IEnumerable<Vehicle> Get()
        {
            return garage.GetAll();
        }

        // GET api/values/5

        public Vehicle Get(string regNr)
        {
            return garage.GetVehicle(regNr);
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
