using System.ComponentModel.DataAnnotations;


namespace Crypto_BankingREG.Models
{
    public class ApplicationUserView
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string FullName { get; set; }
    }
}
