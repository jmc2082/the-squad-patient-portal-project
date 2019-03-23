using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using PatientPortalAPI.Models;
using PatientPortalAPI.Data;

namespace PatientPortalAPI.Controllers
{
    public class InsuranceController : ApiController
    {
        // GET api/values
        public string Get()
        {
            return JsonConvert.SerializeObject(DataManager.GetAllInsurance());
        }

        // GET api/values/5
        public string Get(int id)
        {
            return JsonConvert.SerializeObject(DataManager.GetSingleInsurance(id));
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
