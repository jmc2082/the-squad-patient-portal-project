using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PatientPortalAPI.Models;

namespace PatientPortalAPI.Data
{
    public static class DataManager
    {
        private static List<LoginModel> Users;
        private static List<InsuranceModelDetails> Insurance;
        private static List<DoctorsModelDetails> Doctors;
        private static List<ProblemsModelList> Problems;
        private static List<PatientInfoModel> Patients;

        private static void Initialize()
        {
            Random rando = new Random(DateTime.Now.Millisecond);

            Users = new List<LoginModel>();
            Users.Add(new LoginModel { Username = "Test1", Password = "Pass1"});
            Users.Add(new LoginModel { Username = "Test2", Password = "Pass2" });

            Insurance = new List<InsuranceModelDetails>();
            for (int i = 1; i < 11; i++)
            {
                InsuranceModelDetails newInsurance = new InsuranceModelDetails();
                newInsurance.InsuranceID = i;
                newInsurance.InsuranceName = "Insurance Company " + i.ToString();
                newInsurance.InsuranceAddress = (i * 100).ToString() + " Tryon Street";
                newInsurance.InsuranceCity = "Charlotte";
                newInsurance.InsuranceState = "NC";
                newInsurance.InsuranceZip = "12345-1234";
                newInsurance.InsurancePhone = "555-123-123" + (i - 1).ToString();
                Insurance.Add(newInsurance);
            }

            Doctors = new List<DoctorsModelDetails>();
            for (int i = 1; i < 11; i++)
            {
                DoctorsModelDetails newDoctor = new DoctorsModelDetails();
                newDoctor.DoctorID = i;
                newDoctor.DoctorName = "Doctor " + i.ToString();
                newDoctor.DoctorAddress = (i * 100).ToString() + " Tryon Street";
                newDoctor.DoctorCity = "Charlotte";
                newDoctor.DoctorState = "NC";
                newDoctor.DoctorZip = "12345-1234";

                int randNum = rando.Next(0, 10);
                if (randNum == 0)
                {
                    newDoctor.DoctorReviews = null;
                    newDoctor.DoctorRating = null;
                }
                else
                {
                    newDoctor.DoctorReviews = new List<DoctorReviewsBase>();
                    for (int j = 0; j < randNum; j++)
                    {
                        DoctorReviewsBase newReview = new DoctorReviewsBase();
                        newReview.DoctorReview = "Review " + (j + 1).ToString();
                        newReview.DoctorRating = rando.Next(1, 5);
                        newDoctor.DoctorReviews.Add(newReview);
                    }

                    newDoctor.DoctorRating = newDoctor.DoctorReviews.Average(x => x.DoctorRating).ToString();
                }

                newDoctor.AcceptedInsurance = new List<InsuranceModelBase>();
                randNum = rando.Next(0, 5);
                for (int j = 0; j < randNum; j++)
                {
                    int insuranceNum = rando.Next(1, 10);
                    if (!newDoctor.AcceptedInsurance.Any(x => x.InsuranceID == insuranceNum))
                        newDoctor.AcceptedInsurance.Add(Insurance.FirstOrDefault(x => x.InsuranceID == insuranceNum));
                }

                Doctors.Add(newDoctor);
            }

            Problems = new List<ProblemsModelList>();
            ProblemsModelList parent = new ProblemsModelList();
            parent.ProblemID = 0;
            parent.ProblemName = "";
            parent.ProblemDescription = "";
            ProblemsModelList chest = new ProblemsModelList();
            chest.ProblemID = 1;
            chest.ProblemName = "Chest Problems";
            chest.ProblemDescription = "Any issues in the chest area.";
            ProblemsModelList heart = new ProblemsModelList();
            heart.ProblemID = 2;
            heart.ProblemName = "Heart Problems";
            heart.ProblemDescription = "Any issues with the heart.";
            ProblemsModelList heartAttack = new ProblemsModelList();
            heartAttack.ProblemID = 3;
            heartAttack.ProblemName = "Heart Attack";
            heartAttack.ProblemDescription = "History of Heart Attacks";
            ProblemsModelList arrythmia = new ProblemsModelList();
            arrythmia.ProblemID = 4;
            arrythmia.ProblemName = "Arrythmia";
            arrythmia.ProblemDescription = "Heart beats inconsistently or weirdly.";
            heart.ProblemChildren = new List<ProblemChild>();
            heart.ProblemChildren.Add(new ProblemChild { ProblemID = heartAttack.ProblemID });
            heart.ProblemChildren.Add(new ProblemChild { ProblemID = arrythmia.ProblemID });
            ProblemsModelList breathing = new ProblemsModelList();
            breathing.ProblemID = 5;
            breathing.ProblemName = "Breathing Issues";
            breathing.ProblemDescription = "History of breathing issues.";
            chest.ProblemChildren = new List<ProblemChild>();
            chest.ProblemChildren.Add(new ProblemChild { ProblemID = heart.ProblemID });
            chest.ProblemChildren.Add(new ProblemChild { ProblemID = breathing.ProblemID });
            ProblemsModelList everythingElse = new ProblemsModelList();
            everythingElse.ProblemID = 6;
            everythingElse.ProblemName = "Everything Else";
            everythingElse.ProblemDescription = "Any other kind of issue.";
            parent.ProblemChildren = new List<ProblemChild>();
            parent.ProblemChildren.Add(new ProblemChild { ProblemID = everythingElse.ProblemID });
            parent.ProblemChildren.Add(new ProblemChild { ProblemID = chest.ProblemID });
            Problems.Add(parent);
            Problems.Add(chest);
            Problems.Add(heart);
            Problems.Add(arrythmia);
            Problems.Add(heartAttack);
            Problems.Add(breathing);
            Problems.Add(everythingElse);

            Patients = new List<PatientInfoModel>();
            PatientInfoModel patient = new PatientInfoModel();
            patient.PatientData = new PatientDataModel();
            patient.PatientData.Address = "1 Main Street";
            patient.PatientData.Birthdate = DateTime.Now.ToShortDateString();
            patient.PatientData.CellPhone = "555-123-1234";
            patient.PatientData.City = "Charlotte";
            patient.PatientData.Email = "test.person@fake.email.com";
            patient.PatientData.EmergencyContactInfo = new List<EmergencyContactInfo>();
            patient.PatientData.EmergencyContactInfo.Add(new EmergencyContactInfo { FullName = "Mom Person", Relationship = "Mom", CellPhone = "555-123-2345" });
            patient.PatientData.Employer = "A Company";
            patient.PatientData.FirstName = "Test";
            patient.PatientData.ID = "1";
            patient.PatientData.InsuranceInfo = new List<InsuranceModelPatientDetails>();
            patient.PatientData.InsuranceInfo.Add(new InsuranceModelPatientDetails { InsuranceID = 1, PlanName = "Plan 1", GroupNumber = "1", EmployeeNumber = "2" });
            patient.PatientData.InsuredPerson = new InsuredPerson
            {
                InsuredSSN = "123-45-6789",
                InsuredRelationship = "Self",
                InsuredBirthdate = DateTime.Now.ToShortDateString()
            };
            patient.PatientData.LastName = "Person";
            patient.PatientData.Occupation = "Job";
            patient.PatientData.SSN = "123-45-6789";
            patient.PatientData.State = "NC";
            patient.PatientData.Zip = "12345-6789";

            patient.Doctors = new List<DoctorsModelID>();
            patient.Doctors.Add(new DoctorsModelID { DoctorID = 1 });

            patient.Demographics = new DemographicsModel
            {
                City = "Charlotte",
                EducationLevel = "Bachelor's Degree",
                Ethnicity = "Prefer Not to Say",
                Gender = "Prefer Not to Say",
                GeneralHealthLevel = "Good",
                MaritalStatus = "Single",
                State = "NC",
                Zip = "12345-6789"
            };

            patient.History = null;
            Patients.Add(patient);
        }

        // Login stuff
        public static bool LoginUser(LoginModel user)
        {
            if (Users == null)
                Initialize();
            return true; // Users.Any(x => x.Username == user.Username && x.Password == user.Password);
        }

        // Insurance stuff
        public static List<InsuranceModelDetails> GetAllInsurance()
        {
            if (Users == null)
                Initialize();
            return Insurance;
        }

        public static InsuranceModelDetails GetSingleInsurance(int insuranceID)
        {
            if (Users == null)
                Initialize();
            return Insurance.FirstOrDefault(x => x.InsuranceID == insuranceID);
        }

        // Doctor stuff
        public static List<DoctorsModelDetails> GetAllDoctors()
        {
            if (Users == null)
                Initialize();
            return Doctors;
        }

        public static List<DoctorsModelDetails> GetDoctorsByZip(string zip)
        {
            if (Users == null)
                Initialize();
            return Doctors.Where(x => x.DoctorZip == zip).ToList();
        }

        public static DoctorsModelDetails GetSingleDoctor(int doctorID)
        {
            if (Users == null)
                Initialize();
            return Doctors.FirstOrDefault(x => x.DoctorID == doctorID);
        }

        public static void PostDoctorReview(NewDoctorReview review)
        {
            if (Users == null)
                Initialize();
            DoctorsModelDetails doctor = Doctors.FirstOrDefault(x => x.DoctorID == review.DoctorID);
            doctor.DoctorRating = doctor.DoctorReviews.Average(x => x.DoctorRating).ToString();
            doctor.DoctorReviews.Add(review);
        }

        // Problems stuff
        public static List<ProblemsModelList> GetAllProblems()
        {
            if (Users == null)
                Initialize();
            return Problems;
        }

        public static ProblemsModelDetails GetProblem(int problemID)
        {
            if (Users == null)
                Initialize();
            ProblemsModelDetails problem = new ProblemsModelDetails();
            ProblemsModelBase baseProblem = Problems.FirstOrDefault(x => x.ProblemID == problemID);
            problem.ProblemID = baseProblem.ProblemID;
            problem.ProblemName = baseProblem.ProblemName;
            problem.ProblemDescription = baseProblem.ProblemDescription;
            problem.ProblemChildren = GetChildProblems(problem.ProblemID);
            return problem;
        }

        public static List<ProblemsModelDetails> GetChildProblems(int problemID)
        {
            if (Users == null)
                Initialize();
            List<ProblemsModelDetails> children = new List<ProblemsModelDetails>();
            ProblemsModelList parentBase = Problems.FirstOrDefault(x => x.ProblemID == problemID);
            if (parentBase.ProblemChildren != null)
            {
                foreach (ProblemChild child in parentBase.ProblemChildren)
                {
                    ProblemsModelDetails childDetails = new ProblemsModelDetails();
                    ProblemsModelBase childBase = Problems.FirstOrDefault(x => x.ProblemID == child.ProblemID);
                    childDetails.ProblemID = child.ProblemID;
                    childDetails.ProblemName = childBase.ProblemName;
                    childDetails.ProblemDescription = childBase.ProblemDescription;
                    childDetails.ProblemChildren = GetChildProblems(child.ProblemID);
                    children.Add(childDetails);
                }
            }
            return children;
        }

        // Patient stuff
        public static PatientInfoModel GetPatientInfo(int patientID)
        {
            if (Users == null)
                Initialize();
            return Patients.FirstOrDefault(x => x.PatientData.ID == 1.ToString());
        }

        public static void AddNewPatient(PatientInfoModel patient)
        {
            if (Users == null)
                Initialize();
            Patients.Add(patient);
        }

        public static PatientDataModel GetPatientData(int patientID)
        {
            if (Users == null)
                Initialize();
            return Patients.FirstOrDefault(x => x.PatientData.ID == 1.ToString()).PatientData;
        }

        public static void UpdatePatientData(PatientDataModel patient)
        {
            if (Users == null)
                Initialize();
            Patients.FirstOrDefault(x => x.PatientData.ID == patient.ID).PatientData = patient;
        }

        public static DemographicsModel GetPatientDemographics(int patientID)
        {
            if (Users == null)
                Initialize();
            return Patients.FirstOrDefault(x => x.PatientData.ID == patientID.ToString()).Demographics;
        }

        public static void UpdatePatientDemographics(int patientID, DemographicsModel demo)
        {
            if (Users == null)
                Initialize();
            Patients.FirstOrDefault(x => x.PatientData.ID == patientID.ToString()).Demographics = demo;
        }

        public static List<HistoryModel> GetPatientHistory(int patientID)
        {
            if (Users == null)
                Initialize();
            return Patients.FirstOrDefault(x => x.PatientData.ID == patientID.ToString()).History;
        }

        public static void UpdatePatientHistory(int patientID, List<HistoryModel> history)
        {
            if (Users == null)
                Initialize();
            Patients.FirstOrDefault(x => x.PatientData.ID == patientID.ToString()).History = history;
        }

        public static List<DoctorsModelBase> GetPatientDoctors(int patientID)
        {
            if (Users == null)
                Initialize();
            List<DoctorsModelBase> doctors = new List<DoctorsModelBase>();
            foreach (DoctorsModelID doctorID in Patients.FirstOrDefault(x => x.PatientData.ID == patientID.ToString()).Doctors)
            {
                doctors.Add(Doctors.FirstOrDefault(x => x.DoctorID == doctorID.DoctorID));
            }
            return doctors;
        }

        public static void UpdatePatientDoctors(int patientID, List<DoctorsModelID> doctors)
        {
            if (Users == null)
                Initialize();
            Patients.FirstOrDefault(x => x.PatientData.ID == patientID.ToString()).Doctors = doctors;
        }
    }
}