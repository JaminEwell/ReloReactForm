using System;
using System.Collections.Generic;

namespace ReloReferral.Models
{
    public partial class ReloOutgoingReferral
    {
        public DateTime? ReferralDate { get; set; }
        public string AgentName { get; set; }
        public string Branch { get; set; }
        public string Email { get; set; }
        public string OfficePhone { get; set; }
        public string CellPhone { get; set; }
        public string ReferralType { get; set; }
        public string ClientName { get; set; }
        public string Source { get; set; }
        public string SpeakWithAgent { get; set; }
        public string ClientAddress { get; set; }
        public string ClientCity { get; set; }
        public string ClientState { get; set; }
        public string ClientZipCode { get; set; }
        public string ClientEmail { get; set; }
        public string MainPhone { get; set; }
        public string AltPhone { get; set; }
        public string ClientCellPhone { get; set; }
        public string SellerAddress { get; set; }
        public string SellerCity { get; set; }
        public string SellerState { get; set; }
        public string SellerZipCode { get; set; }
        public string SellerPropertyType { get; set; }
        public string SellerBedrooms { get; set; }
        public string SellerBathrooms { get; set; }
        public string SellerSquareFeet { get; set; }
        public string SellerYearBuilt { get; set; }
        public string SellerPreviouslyListed { get; set; }
        public string SellerListedBy { get; set; }
        public string SellerNeedToSellFirst { get; set; }
        public string SellerMoveBy { get; set; }
        public string BuyerCity { get; set; }
        public string BuyerState { get; set; }
        public string BuyerJobTransfer { get; set; }
        public string BuyerCompany { get; set; }
        public string BuyerPropertyType { get; set; }
        public string BuyerBedrooms { get; set; }
        public string BuyerBathrooms { get; set; }
        public string BuyerPriceRange { get; set; }
        public string BuyerPreQualified { get; set; }
        public string BuyerPreQualifiedBy { get; set; }
        public string BuyerHomeFindingTripDate { get; set; }
        public string Notes { get; set; }
        public int Id { get; set; }
        public string MainPhoneType { get; set; }
        public string AltPhoneType { get; set; }
    }
}
