using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PatientPortalAPI.Models
{
    public class DemographicsModel
    {
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string Gender { get; set; }
        public string Ethnicity { get; set; }
        public string MaritalStatus { get; set; }
        public string EducationLevel { get; set; }
        public string GeneralHealthLevel { get; set; }
    }
}