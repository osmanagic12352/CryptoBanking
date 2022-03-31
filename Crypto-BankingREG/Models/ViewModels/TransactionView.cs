using System.ComponentModel.DataAnnotations;

namespace Crypto_BankingREG.Models.ViewModels
{
    public class TransactionView
    {
        [Required]
        public string CoinName { get; set; }
        [Required]
        public decimal Amount { get; set; }
        [Required]
        public string Total { get; set; }
        [Required]
        public string BuyOrSell { get; set; }
        [Required]
        public string CryptoAdress { get; set; }
    }
}
