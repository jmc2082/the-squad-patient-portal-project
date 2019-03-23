using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PatientPortalAPI.Models
{
    public class InsuranceModelBase
    {
        public int InsuranceID { get; set; }
    }

    public class InsuranceModelDetails : InsuranceModelBase
    {
        public string InsuranceName { get; set; }
        public string InsuranceAddress { get; set; }
        public string InsuranceCity { get; set; }
        public string InsuranceState { get; set; }
        public string InsuranceZip { get; set; }
        public string InsurancePhone { get; set; }
    }

    public class InsuranceModelPatientDetails : InsuranceModelBase
    {
        public string GroupNumber { get; set; }
        public string EmployeeNumber { get; set; }
        public string PlanName { get; set; }
    }
}