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
    public class PatientDataController : ApiController
    {
        // GET api/values
        public string Get()
        {
            return "";
        }

        // GET api/values/5
        public string Get(int id)
        {
            return JsonConvert.SerializeObject(DataManager.GetPatientData(id));
        }

        // POST api/values
        public void Post(int id, [FromBody]string value)
        {
            DataManager.UpdatePatientDoctors(id, JsonConvert.DeserializeObject<List<DoctorsModelID>>(value));
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
            DataManager.UpdatePatientDemographics(id, JsonConvert.DeserializeObject<DemographicsModel>(value));
        }

        // DELETE api/values/5
        public void Delete(int id, [FromBody]string value)
        {
            DataManager.UpdatePatientDoctors(id, JsonConvert.DeserializeObject<List<DoctorsModelID>>(value));
        }
    }
}
