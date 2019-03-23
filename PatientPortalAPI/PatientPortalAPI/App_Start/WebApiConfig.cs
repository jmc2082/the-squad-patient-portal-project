using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace PatientPortalAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "Login",
                routeTemplate: "api/Login/",
                defaults: new { controller = "Login" }
            );

            config.Routes.MapHttpRoute(
                name: "PatientData",
                routeTemplate: "api/PatientData/{id}",
                defaults: new { controller = "PatientData", id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "Demographics",
                routeTemplate: "api/Demographics/{id}",
                defaults: new { controller = "Demographics", id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "History",
                routeTemplate: "api/History/{id}",
                defaults: new { controller = "History", id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "Problems",
                routeTemplate: "api/Problems/{id}",
                defaults: new { controller = "Problems", id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "Doctors",
                routeTemplate: "api/Doctors/{zip}",
                defaults: new { controller = "Doctors", zip = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "Doctor",
                routeTemplate: "api/Doctor/{id}",
                defaults: new { controller = "Doctor", id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "Insurance",
                routeTemplate: "api/Insurance/{id}",
                defaults: new { controller = "Insurance", id = RouteParameter.Optional }
            );
        }
    }
}
