using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Crypto_BankingREG.Models
{
    public class PaymentDetail
    {
        [Key]
        public int Id { get; set; }


        [Column(TypeName = "nvarchar (100)")]
        public string CardOwnerName { get; set; }


        [Column(TypeName = "nvarchar (16)")]
        public string CardNumber { get; set; }


        [Column(TypeName = "nvarchar (5)")]
        public string ExpDate { get; set; }


        [Column(TypeName = "nvarchar (3)")]
        public string CVV { get; set; }


        //Relacija 1:1 - 1 User ima 1 karticu
        public ApplicationUser User { get; set; }
        public string UserId { get; set; }
    }
}
