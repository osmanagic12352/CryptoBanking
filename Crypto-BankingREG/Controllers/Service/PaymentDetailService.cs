using Crypto_BankingREG.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;


namespace Crypto_BankingREG.Models.Service
{
    public class PaymentDetailService : ControllerBase
    {
        private DBContext _context;


        public PaymentDetailService(DBContext context)
        {
            _context = context;
        }

       

        public List<PaymentDetail> GetAllPaymentDetails()
        {
            var allPaymentDetails = _context.PaymentDetails.ToList();
            return allPaymentDetails;
        }
        public PaymentDetail GetPaymentDetailById(int cardId)
        {
            var paymentDetail = _context.PaymentDetails.FirstOrDefault(n => n.Id == cardId);
            if (paymentDetail != null)
            {
                return paymentDetail;
            }
            else
            {
                throw new Exception("Uneseni Id je neispravan!");
            }
        }

        public PaymentDetail UpdatePaymentDetailById(int cardId, PaymentDetailView card)
        {
            var _card = _context.PaymentDetails.FirstOrDefault(n => n.Id == cardId);
            if (_card != null)
            {
                _card.CardOwnerName = card.CardOwnerName;
                _card.CardNumber = card.CardNumber;
                _card.ExpDate = card.ExpDate;
                _card.CVV = card.CVV;

                _context.SaveChanges();
                return _card;
            }
            else
            {
                throw new Exception("Mjenjane podataka nije upsjelo! Da li ste sve ispravno upisali, možda pogrešan Id?");
            }
        }

        public void DeletePaymentDetailById(int id)
        {
            var _card = _context.PaymentDetails.FirstOrDefault(n => n.Id == id);
            if (_card != null)
            {
                _context.PaymentDetails.Remove(_card);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Uneseni Id je neispravan!");
            }
        }
    }
}


//public PaymentDetail GetUserCard()
//{
//    string userId = User.Claims.First(a => a.Type == "UserID").Value;
//    var card = _context.PaymentDetails.FirstOrDefault(n => n.UserId == userId);
//    if (card != null)
//    {
//        return card;
//    }
//    else
//    {
//        throw new Exception("Nemate karticu!");
//    }
//}
