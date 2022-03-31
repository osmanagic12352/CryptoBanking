using Crypto_BankingREG.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;


namespace Crypto_BankingREG.Models.Service
{
    public class TransactionService
    {
        private DBContext _context;

        public TransactionService(DBContext context)
        {
            _context = context;
        }

        

        public List<TransactionModel> GetAllTransaction()
        {
            var AllTransactions = _context.Transaction.ToList();
            return AllTransactions;
        }

        public TransactionModel GetTransactionById(int TransactionID)
        {
            var transaction = _context.Transaction.FirstOrDefault(n => n.TransactionId == TransactionID);
            if (transaction != null)
            {
                return transaction;
            }
            else
            {
                throw new Exception("Pogrešan Id transaction!");
            }
        }

        public TransactionModel UpdateTransactionById(int TransactionID, TransactionView transaction)
        {
            var _transaction = _context.Transaction.FirstOrDefault(n => n.TransactionId == TransactionID);
            if (_transaction != null)
            {
                _transaction.CoinName = transaction.CoinName;
                _transaction.Amount = transaction.Amount;
                _transaction.BuyOrSell = transaction.BuyOrSell;
                _transaction.CryptoAdress = transaction.CryptoAdress;

                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Pogrešan Id transaction");
            }
            return _transaction;
        }

        public void DeleteTransactionById(int TransactionID)
        {
            var _transaction = _context.Transaction.FirstOrDefault(n => n.TransactionId == TransactionID);
            if (_transaction != null)
            {
                _context.Transaction.Remove(_transaction);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Uneseni Id je neispravan");
            }
        }
    }

}
