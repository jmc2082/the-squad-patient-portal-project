using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PatientPortalAPI.Models
{
    public class EmergencyContactInfo
    {
        public string FullName { get; set; }
        public string Relationship { get; set; }
        public string WorkPhone { get; set; }
        public string HomePhone { get; set; }
        public string CellPhone { get; set; }
    }

    public class InsuredPerson
    {
        public string InsuredRelationship { get; set; }
        public string InsuredBirthdate { get; set; }
        public string InsuredSSN { get; set; }
    }

    public class PatientDataModel
    {
        public string ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Birthdate { get; set; }
        public string SSN { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string Employer { get; set; }
        public string Occupation { get; set; }
        public string HomePhone { get; set; }
        public string CellPhone { get; set; }
        public string WorkPhone { get; set; }
        public string Email { get; set; }
        public IList<EmergencyContactInfo> EmergencyContactInfo { get; set; }
        public InsuredPerson InsuredPerson { get; set; }
        public IList<InsuranceModelPatientDetails> InsuranceInfo { get; set; }
    }

    public class PatientInfoModel
    {
        public PatientDataModel PatientData;
        public DemographicsModel Demographics;
        public List<HistoryModel> History;
        public List<DoctorsModelID> Doctors;
    }
}