using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ReloReferral.Models
{
    public class WebAppDataAccessLayer
    {
        webappContext db = new webappContext();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="toEmailAddress"></param>
        /// <param name="cCEmailAddress"></param>
        /// <param name="emailSubject"></param>
        /// <param name="emailMessage"></param>
        /// <returns></returns>
        public async Task SendEmail(string toEmailAddress, string fromEmailAddress, string cCEmailAddress, string emailSubject, string emailMessage)
        {
            using (var smtp = new SmtpClient
            {
                Host = "relay.pickford.intra",
                Port = 25,
                EnableSsl = false,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                Timeout = 50000
            })
            {
                using (var message = new MailMessage())
                {
                    message.To.Add(toEmailAddress);
                    message.From = new MailAddress(fromEmailAddress);
                    message.Bcc.Add(cCEmailAddress);
                    message.Subject = emailSubject;
                    message.Body = emailMessage;
                    message.IsBodyHtml = true;

                    using (var smtpClient = new SmtpClient("relay.pickford.intra"))
                    {
                        await smtpClient.SendMailAsync(message);
                    }
                }
            }
        }

        /// <summary>
        /// GetAllReloReferrals
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ReloOutgoingReferral> GetAllReloReferrals()
        {
            try
            {
                return db.ReloOutgoingReferral.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new employee record     
        public int AddReloReferral(ReloOutgoingReferral referral)
        {
            try
            {
                referral.ReferralDate = DateTime.Now;
                db.ReloOutgoingReferral.Add(referral);
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar employee    
        public int UpdateReferral(ReloOutgoingReferral referral)
        {
            try
            {
                db.Entry(referral).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular employee    
        public ReloOutgoingReferral GetReferralData(int id)
        {
            try
            {
                ReloOutgoingReferral referral = db.ReloOutgoingReferral.Find(id);
                return referral;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular employee    
        public int DeleteReferral(int id)
        {
            try
            {
                ReloOutgoingReferral referral = db.ReloOutgoingReferral.Find(id);
                db.ReloOutgoingReferral.Remove(referral);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
