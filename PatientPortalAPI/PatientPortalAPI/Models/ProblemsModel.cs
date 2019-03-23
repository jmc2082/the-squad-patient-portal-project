using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PatientPortalAPI.Models
{
    public class ProblemChild
    {
        public int ProblemID { get; set; }
    }

    public class ProblemsModelBase
    {
        public int ProblemID { get; set; }
        public string ProblemName { get; set; }
        public string ProblemDescription { get; set; }
    }

    public class ProblemsModelList : ProblemsModelBase
    {
        public IList<ProblemChild> ProblemChildren { get; set; }
    }

    public class ProblemsModelDetails : ProblemsModelBase
    {
        public IList<ProblemsModelDetails> ProblemChildren { get; set; }
    }
}