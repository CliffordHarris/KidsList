using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace Dec
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/Scripts/jquery.unobtrusive*",
                "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                "~/Scripts/knockout-{version}.js",
                "~/Scripts/knockout.validation.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/sammy-{version}.js",
                "~/Scripts/app/common.js",
                "~/Scripts/app/app.datamodel.js",
                "~/Scripts/app/app.viewmodel.js",
                "~/Scripts/app/home.viewmodel.js",
                "~/Scripts/app/_run.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/bootstrap.js",
                "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/Custom.css",
                "~/Content/spacey.css",
                "~/Content/site.css"));

            var angularBundleCdnPath = "//cdn.jsdelivr.net/g/angularjs@1.2.19(angular.min.js+angular-route.min.js+angular-animate.min.js+angular-cookies.min.js)";

            bundles.Add(new ScriptBundle("~/bundles/angular",
                        angularBundleCdnPath).Include(
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-animate.js",
                        "~/Scripts/angular-route.js",
                        "~/Scripts/angular-cookies.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularControllers").Include(
                    "~/Angular/ChoresController.js",
                    "~/Services/ChoresService.js"
                    ));

            bundles.Add(new ScriptBundle("~/bundles/angularServices").Include(
                "~/Services/ChoresService.js"
        ));

        }
    }
}
