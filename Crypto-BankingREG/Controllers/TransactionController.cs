using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Crypto_BankingREG.Models;
using Crypto_BankingREG.Models.Service;
using Crypto_BankingREG.Models.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using AutoMapper;

namespace Crypto_BankingREG.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        public TransactionService _transaction;
        private readonly ILogger<TransactionController> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<ApplicationUser> _userManager;
        private DBContext _context;

        public TransactionController(TransactionService transactions, ILogger<TransactionController> logger, UserManager<ApplicationUser> userManager, DBContext context, IMapper mapper)
        {
            _transaction = transactions;
            _logger = logger;
            _userManager = userManager;
            _context = context;
            _mapper = mapper;
        }

        /// <summary>
        /// Dodavanje transactions
        /// </summary> 
        [Authorize]
        [HttpPost("add-transaction")]
        public async Task<IActionResult> AddTransaction(TransactionView transactions)
        {
            string userId = User.Claims.First(n => n.Type == "UserID").Value;
            var _user = await _userManager.FindByIdAsync(userId);
            if (_user != null)
            {
                var _transaction = _mapper.Map<TransactionModel>(transactions);
                _transaction = new TransactionModel()
                {
                    CoinName = transactions.CoinName,
                    Amount = transactions.Amount,
                    Total = transactions.Total,
                    BuyOrSell = transactions.BuyOrSell,
                    CryptoAdress = transactions.CryptoAdress,
                    UserId = userId
                };
                if (_transaction != null)
                {
                    _context.Transaction.Add(_transaction);
                    _context.SaveChanges();
                    return Ok();
                }
                else
                {
                    throw new Exception("Transakcija neuspješna!");
                }
            }
            else
            {
                throw new Exception("Problemi sa Id-om korisnika!");
            }
        }

        /// <summary>
        /// Dohvatanje svih transakcija
        /// </summary> 
        [Authorize(Roles = "Admin")]
        [HttpGet("Get-all-transaction")]
        public IActionResult GetAllTransaction()
        {
            var AllTransaction = _transaction.GetAllTransaction();
            return Ok(AllTransaction);
        }

        /// <summary>
        /// Dohvatanje pojedine transactions
        /// </summary> 
        [Authorize(Roles = "Admin")]
        [HttpGet("get-transaction-by-id/{id}")]
        public IActionResult GetTransactionById(int id)
        {
            try
            {
                var card = _transaction.GetTransactionById(id);
                return Ok(card);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
        }

        /// <summary>
        /// Uređivanje transactions
        /// </summary> 
        [Authorize(Roles = "Admin")]
        [HttpPut("Edit-transaction/{id}")]
        public IActionResult UpdateTransactionById(int id, [FromBody] TransactionView transakcija)
        {
            try
            {
                var transactionUpdate = _transaction.UpdateTransactionById(id, transakcija);
                return Ok(transactionUpdate);

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
        }

        /// <summary>
        /// Brisanje transactions
        /// </summary> 
        [Authorize(Roles = "Admin")]
        [HttpDelete("Delete-transaction/{id}")]
        public IActionResult DeleteTransactionById(int id)
        {
            try
            {
                _transaction.DeleteTransactionById(id);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
        }
    }
}
