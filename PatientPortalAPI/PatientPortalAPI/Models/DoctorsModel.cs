using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PatientPortalAPI.Models
{
    public class DoctorReviewsBase
    {
        public int DoctorRating { get; set; }
        public string DoctorReview { get; set; }
    }

    public class NewDoctorReview : DoctorReviewsBase
    {
        public int DoctorID { get; set; }
    }

    public class DoctorsModelID
    {
        public int DoctorID { get; set; }
    }

    public class DoctorsModelBase : DoctorsModelID
    {
        public string DoctorName { get; set; }
        public string DoctorAddress { get; set; }
        public string DoctorCity { get; set; }
        public string DoctorState { get; set; }
        public string DoctorZip { get; set; }
        public string DoctorRating { get; set; }
        public IList<InsuranceModelBase> AcceptedInsurance { get; set; }
    }

    public class DoctorsModelDetails : DoctorsModelBase
    {
        public IList<DoctorReviewsBase> DoctorReviews { get; set; }
    }
}