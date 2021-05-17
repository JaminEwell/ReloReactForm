using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ReloReferral.Models
{
    public partial class webappContext : DbContext
    {
        public webappContext()
        {
        }

        public webappContext(DbContextOptions<webappContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ReloOutgoingReferral> ReloOutgoingReferral { get; set; }

        // Unable to generate entity type for table 'dbo.listing_postlets'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=SD-SQL-01a.pickford.intra;Initial Catalog=webapp;persist security info=True;user id=dcastillo;password=rAnd7rsnat!");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<ReloOutgoingReferral>(entity =>
            {
                entity.ToTable("relo_outgoing_referral");

                entity.Property(e => e.AgentName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AltPhone)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AltPhoneType)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Branch)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerBathrooms)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerBedrooms)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerCity)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerCompany)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerHomeFindingTripDate)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerJobTransfer)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerPreQualified)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerPreQualifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerPriceRange)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerPropertyType)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerState)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CellPhone)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ClientAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ClientCellPhone)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ClientCity)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ClientEmail)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ClientName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ClientState)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ClientZipCode)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MainPhone)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MainPhoneType)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Notes).HasColumnType("text");

                entity.Property(e => e.OfficePhone)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ReferralDate).HasColumnType("datetime");

                entity.Property(e => e.ReferralType)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerAddress)
                    .HasMaxLength(75)
                    .IsUnicode(false);

                entity.Property(e => e.SellerBathrooms)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerBedrooms)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerCity)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerListedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerMoveBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerNeedToSellFirst)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerPreviouslyListed)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerPropertyType)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerSquareFeet)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerState)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerYearBuilt)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerZipCode)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Source)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SpeakWithAgent)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
