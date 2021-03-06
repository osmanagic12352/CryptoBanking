using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace Crypto_BankingREG.Models
{
    public class DBContext : IdentityDbContext<ApplicationUser>

    {
        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);


            //builder.Entity<TransakcijaModel>()
            //    .HasOne(b => b.Uplata)
            //    .WithMany(ba => ba.Transakcije)
            //    .HasForeignKey(bi => bi.UplataId)
            //    .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<TransactionModel>()
                .HasOne(b => b.User)
                .WithMany(ba => ba.Transakcije)
                .HasForeignKey(bi => bi.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<PaymentDetail>()
                .HasOne(b => b.User)
                .WithOne(ba => ba.PaymentDetail)
                .HasForeignKey<PaymentDetail>(bi => bi.UserId)
                .OnDelete(DeleteBehavior.Cascade);


        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<PaymentDetail> PaymentDetails { get; set; }
        public DbSet<TransactionModel> Transaction { get; set; }
    }
}
