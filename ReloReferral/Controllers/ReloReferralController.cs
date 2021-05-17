using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReloReferral.Models;

namespace ReloReferral.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    [Route("api/[controller]")]
    public class ReloReferralController : Controller
    {
        WebAppDataAccessLayer objreloreferral = new WebAppDataAccessLayer();

        [HttpGet("[action]")]
        public IEnumerable<ReloOutgoingReferral> Index()
        {
            return objreloreferral.GetAllReloReferrals();
        }

        [HttpGet("[action]")]
        public int Landing()
        {
            return 1;
        }

        [HttpGet("[action]")]
        public int ViewCreate()
        {
            return 1;
        }

        // GET: api/<controller>
        [HttpPost("[action]")]
        public int Create(ReloOutgoingReferral referral)
        {
            var result = objreloreferral.AddReloReferral(referral);

            // If db entry successful, send email
            if (result == 1)
            {
                var builder = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

                IConfigurationRoot configuration = builder.Build();

                var emailTo = configuration.GetConnectionString("emailTo");
                var emailCc = configuration.GetConnectionString("emailCC");
                var subject = configuration.GetConnectionString("emailSubject");
                var emailFrom = configuration.GetConnectionString("emailFrom");
                var htmlBody = "";
                var msg = "";
                var agentMsg = "";

                if (referral.ReferralType == "Buyer")
                {
                    htmlBody = @"<html>
                    <body>
                    <p>Sent on: {0}</p>
                    <p>
                        Agent Name: {1} <br />
                        Branch: {2} <br />
                        Agent Phone: {3} <br />
                        Email: {4} <br />
                    </p>
                    <p>
                        Referral Type: {5} <br />
                    </p>
                    <p>
                        <strong>CLIENT INFORMATION</strong><br />
                        Client name: {6} <br />
                        Source: {7} <br />
                        Speak with assigned agent before they call client: {8} <br />
                        Client address: {9} <br />
                        Client main phone: {10} <br />
                        Client main phone type: {11} <br />
                        Client alternate phone: {12} <br />
                        Client alternate phone type: {13} <br />
                        Client email: {14} <br />
                    </p>
                    <p>
                        <strong>PURCHASE INFORMATION - BUYER</strong><br />
                        City: {15} <br />
                        State: {16} <br />
                        Job transfer: {17} <br />
                        Company: {18} <br />
                        Property type: {19} <br />
                        Bedrooms: {20} <br />
                        Baths: {21} <br />
                        Price range: {22} <br />
                        Pre-qualified: {23} <br />
                        Pre-qualified by: {24} <br />
                        When will client make home finding trip: {25} <br />
                    </p>
                    <p>
                        <strong>NOTES</strong><br />
                        {26} <br />
                    </p>
                    </body>
                    </html>
                     ";

                    msg = string.Format(
                          htmlBody,
                          DateTime.Now.ToShortDateString(),
                          !string.IsNullOrEmpty(referral.AgentName) ? referral.AgentName : "",
                          !string.IsNullOrEmpty(referral.Branch) ? referral.Branch : "",
                          !string.IsNullOrEmpty(referral.OfficePhone) ? referral.OfficePhone : "",
                          !string.IsNullOrEmpty(referral.Email) ? referral.Email : "",
                          !string.IsNullOrEmpty(referral.ReferralType) ? referral.ReferralType : "",
                          !string.IsNullOrEmpty(referral.ClientName) ? referral.ClientName : "",
                          !string.IsNullOrEmpty(referral.Source) ? referral.Source : "",
                          !string.IsNullOrEmpty(referral.SpeakWithAgent) ? referral.SpeakWithAgent : "",
                          !string.IsNullOrEmpty(referral.ClientAddress) ? referral.ClientAddress + ", " + referral.ClientCity + ", " + referral.ClientState + ", " + referral.ClientZipCode : "",
                          !string.IsNullOrEmpty(referral.MainPhone) ? referral.MainPhone : "",
                          !string.IsNullOrEmpty(referral.MainPhoneType) ? referral.MainPhoneType : "",
                          !string.IsNullOrEmpty(referral.AltPhone) ? referral.AltPhone : "",
                          !string.IsNullOrEmpty(referral.AltPhoneType) ? referral.AltPhoneType : "",
                          !string.IsNullOrEmpty(referral.ClientEmail) ? referral.ClientEmail : "",
                          !string.IsNullOrEmpty(referral.BuyerCity) ? referral.BuyerCity : "",
                          !string.IsNullOrEmpty(referral.BuyerState) ? referral.BuyerState : "",
                          !string.IsNullOrEmpty(referral.BuyerJobTransfer) ? referral.BuyerJobTransfer : "",
                          !string.IsNullOrEmpty(referral.BuyerCompany) ? referral.BuyerCompany : "",
                          !string.IsNullOrEmpty(referral.BuyerPropertyType) ? referral.BuyerPropertyType : "",
                          !string.IsNullOrEmpty(referral.BuyerBedrooms) ? referral.BuyerBedrooms : "",
                          !string.IsNullOrEmpty(referral.BuyerBathrooms) ? referral.BuyerBathrooms : "",
                          !string.IsNullOrEmpty(referral.BuyerPriceRange) ? referral.BuyerPriceRange : "",
                          !string.IsNullOrEmpty(referral.BuyerPreQualified) ? referral.BuyerPreQualified : "",
                          !string.IsNullOrEmpty(referral.BuyerPreQualifiedBy) ? referral.BuyerPreQualifiedBy : "",
                          !string.IsNullOrEmpty(referral.BuyerHomeFindingTripDate) ? referral.BuyerHomeFindingTripDate : "",
                          !string.IsNullOrEmpty(referral.Notes) ? referral.Notes : ""
                          );
                }
                else if (referral.ReferralType == "Seller")
                {
                    htmlBody = @"<html>
                    <body>
                    <p>Sent on: {0}</p>
                    <p>
                        Agent Name: {1} <br />
                        Branch: {2} <br />
                        Agent Phone: {3} <br />
                        Email: {4} <br />
                    </p>
                    <p>
                        Referral Type: {5} <br />
                    </p>
                    <p>
                        <strong>CLIENT INFORMATION</strong><br />
                        Client name: {6} <br />
                        Source: {7} <br />
                        Speak with assigned agent before they call client: {8} <br />
                        Client address: {9} <br />
                        Client main phone: {10} <br />
                        Client main phone type: {11} <br />
                        Client alternate phone: {12} <br />
                        Client alternate phone type: {13} <br />
                        Client email: {14} <br />
                    </p>
                    <p>
                        <strong>LISTING INFORMATION - SELLER</strong><br />
                        Listing address: {15} <br />
                        Property type: {16} <br />
                        Bedrooms: {17} <br />
                        Bathrooms: {18} <br />
                        Square feet: {19} <br />
                        Year built: {20} <br />
                        Previously listed: {21} <br />
                        Listed by: {22} <br />
                    </p>
                    <p>
                        <strong>NOTES</strong><br />
                        {23} <br />
                    </p>
                    </body>
                    </html>
                     ";

                    msg = string.Format(
                        htmlBody,
                        DateTime.Now.ToShortDateString(),
                        !string.IsNullOrEmpty(referral.AgentName) ? referral.AgentName : "",
                        !string.IsNullOrEmpty(referral.Branch) ? referral.Branch : "",
                        !string.IsNullOrEmpty(referral.OfficePhone) ? referral.OfficePhone : "",
                        !string.IsNullOrEmpty(referral.Email) ? referral.Email : "",
                        !string.IsNullOrEmpty(referral.ReferralType) ? referral.ReferralType : "",
                        !string.IsNullOrEmpty(referral.ClientName) ? referral.ClientName : "",
                        !string.IsNullOrEmpty(referral.Source) ? referral.Source : "",
                        !string.IsNullOrEmpty(referral.SpeakWithAgent) ? referral.SpeakWithAgent : "",
                        !string.IsNullOrEmpty(referral.ClientAddress) ? referral.ClientAddress + ", " + referral.ClientCity + ", " + referral.ClientState + ", " + referral.ClientZipCode : "",
                        !string.IsNullOrEmpty(referral.MainPhone) ? referral.MainPhone : "",
                        !string.IsNullOrEmpty(referral.MainPhoneType) ? referral.MainPhoneType : "",
                        !string.IsNullOrEmpty(referral.AltPhone) ? referral.AltPhone : "",
                        !string.IsNullOrEmpty(referral.AltPhoneType) ? referral.AltPhoneType : "",
                        !string.IsNullOrEmpty(referral.ClientEmail) ? referral.ClientEmail : "",
                        !string.IsNullOrEmpty(referral.SellerAddress) ? referral.SellerAddress + ", " + referral.SellerCity + ", " + referral.SellerState + ", " + referral.SellerZipCode : "",
                        !string.IsNullOrEmpty(referral.SellerPropertyType) ? referral.SellerPropertyType : "",
                        !string.IsNullOrEmpty(referral.SellerBedrooms) ? referral.SellerBedrooms : "",
                        !string.IsNullOrEmpty(referral.SellerBathrooms) ? referral.SellerBathrooms : "",
                        !string.IsNullOrEmpty(referral.SellerSquareFeet) ? referral.SellerSquareFeet : "",
                        !string.IsNullOrEmpty(referral.SellerYearBuilt) ? referral.SellerYearBuilt : "",
                        !string.IsNullOrEmpty(referral.SellerPreviouslyListed) ? referral.SellerPreviouslyListed : "",
                        !string.IsNullOrEmpty(referral.SellerListedBy) ? referral.SellerListedBy : "",
                        !string.IsNullOrEmpty(referral.Notes) ? referral.Notes : ""
                        );
                }
                else
                {
                    htmlBody = @"<html>
                    <body>
                    <p>Sent on: {0}</p>
                    <p>
                        Agent Name: {1} <br />
                        Branch: {2} <br />
                        Agent Phone: {3} <br />
                        Email: {4} <br />
                    </p>
                    <p>
                        Referral Type: {5} <br />
                    </p>
                    <p>
                        <strong>CLIENT INFORMATION</strong><br />
                        Client name: {6} <br />
                        Source: {7} <br />
                        Speak with assigned agent before they call client: {8} <br />
                        Client address: {9} <br />
                        Client main phone: {10} <br />
                        Client main phone type: {11} <br />
                        Client alternate phone: {12} <br />
                        Client alternate phone type: {13} <br />
                        Client email: {14} <br />
                    </p>
                    <p>
                        <strong>LISTING INFORMATION - SELLER</strong><br />
                        Listing address: {15} <br />
                        Property type: {16} <br />
                        Bedrooms: {17} <br />
                        Bathrooms: {18} <br />
                        Square feet: {19} <br />
                        Year built: {20} <br />
                        Previously listed: {21} <br />
                        Listed by: {22} <br />
                    </p>
                    <p>
                        <strong>PURCHASE INFORMATION - BUYER</strong><br />
                        City: {23} <br />
                        State: {24} <br />
                        Job transfer: {25} <br />
                        Company: {26} <br />
                        Property type: {27} <br />
                        Bedrooms: {28} <br />
                        Baths: {29} <br />
                        Price range: {30} <br />
                        Pre-qualified: {31} <br />
                        Pre-qualified by: {32} <br />
                        When will client make home finding trip: {33} <br />
                    </p>
                    <p>
                        <strong>NOTES</strong><br />
                        {34} <br />
                    </p>
                    </body>
                    </html>
                     ";

                    msg = string.Format(
                      htmlBody,
                      DateTime.Now.ToShortDateString(),
                      !string.IsNullOrEmpty(referral.AgentName) ? referral.AgentName : "",
                      !string.IsNullOrEmpty(referral.Branch) ? referral.Branch : "",
                      !string.IsNullOrEmpty(referral.OfficePhone) ? referral.OfficePhone : "",
                      !string.IsNullOrEmpty(referral.Email) ? referral.Email : "",
                      !string.IsNullOrEmpty(referral.ReferralType) ? referral.ReferralType : "",
                      !string.IsNullOrEmpty(referral.ClientName) ? referral.ClientName : "",
                      !string.IsNullOrEmpty(referral.Source) ? referral.Source : "",
                      !string.IsNullOrEmpty(referral.SpeakWithAgent) ? referral.SpeakWithAgent : "",
                      !string.IsNullOrEmpty(referral.ClientAddress) ? referral.ClientAddress + ", " + referral.ClientCity + ", " + referral.ClientState + ", " + referral.ClientZipCode : "",
                      !string.IsNullOrEmpty(referral.MainPhone) ? referral.MainPhone : "",
                      !string.IsNullOrEmpty(referral.MainPhoneType) ? referral.MainPhoneType : "",
                      !string.IsNullOrEmpty(referral.AltPhone) ? referral.AltPhone : "",
                      !string.IsNullOrEmpty(referral.AltPhoneType) ? referral.AltPhoneType : "",
                      !string.IsNullOrEmpty(referral.ClientEmail) ? referral.ClientEmail : "",
                      !string.IsNullOrEmpty(referral.SellerAddress) ? referral.SellerAddress : "",
                      !string.IsNullOrEmpty(referral.SellerPropertyType) ? referral.SellerPropertyType : "",
                      !string.IsNullOrEmpty(referral.SellerBedrooms) ? referral.SellerBedrooms : "",
                      !string.IsNullOrEmpty(referral.SellerBathrooms) ? referral.SellerBathrooms : "",
                      !string.IsNullOrEmpty(referral.SellerSquareFeet) ? referral.SellerSquareFeet : "",
                      !string.IsNullOrEmpty(referral.SellerYearBuilt) ? referral.SellerYearBuilt : "",
                      !string.IsNullOrEmpty(referral.SellerPreviouslyListed) ? referral.SellerPreviouslyListed : "",
                      !string.IsNullOrEmpty(referral.SellerListedBy) ? referral.SellerListedBy : "",
                      !string.IsNullOrEmpty(referral.BuyerCity) ? referral.BuyerCity : "",
                      !string.IsNullOrEmpty(referral.BuyerState) ? referral.BuyerState : "",
                      !string.IsNullOrEmpty(referral.BuyerJobTransfer) ? referral.BuyerJobTransfer : "",
                      !string.IsNullOrEmpty(referral.BuyerCompany) ? referral.BuyerCompany : "",
                      !string.IsNullOrEmpty(referral.BuyerPropertyType) ? referral.BuyerPropertyType : "",
                      !string.IsNullOrEmpty(referral.BuyerBedrooms) ? referral.BuyerBedrooms : "",
                      !string.IsNullOrEmpty(referral.BuyerBathrooms) ? referral.BuyerBathrooms : "",
                      !string.IsNullOrEmpty(referral.BuyerPriceRange) ? referral.BuyerPriceRange : "",
                      !string.IsNullOrEmpty(referral.BuyerPreQualified) ? referral.BuyerPreQualified : "",
                      !string.IsNullOrEmpty(referral.BuyerPreQualifiedBy) ? referral.BuyerPreQualifiedBy : "",
                      !string.IsNullOrEmpty(referral.BuyerHomeFindingTripDate) ? referral.BuyerHomeFindingTripDate : "",
                      !string.IsNullOrEmpty(referral.Notes) ? referral.Notes : ""
                      );
                }


                agentMsg = @"<html>
                    <body>
                    <div style=""border-top: 1px solid;border-bottom: 1px solid;padding-top:5px;padding-bottom:5px;"">
                        <p>
                           Your referral has been sent to Outgoing Referral Services.
                            You will also receive confirmation of the referral by a relocation staff member, if you do not receive confirmation 
                            from relocation during normal business hours, you should call and confirm they've received your referral. 
                        </p>
                        <p>
                            858.792.3393
                        </p>
                        <p>
                            <a href=""mailto:outgoing@bhhscal.com"">outgoing@bhhscal.com</a>
                        </p>
                    </div>
                    </body>
                    </html>
                     ";

                agentMsg = agentMsg + msg;

                objreloreferral.SendEmail(emailTo, referral.Email, emailCc, subject, msg).Wait();
                objreloreferral.SendEmail(referral.Email, emailFrom, emailCc, subject, agentMsg).Wait();
            }

            return result;
        }

    }
}