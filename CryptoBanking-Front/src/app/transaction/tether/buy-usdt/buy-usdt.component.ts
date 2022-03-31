import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { coinApiService } from 'src/app/shared/coinApi.service';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { TransactionService } from 'src/app/shared/transaction.service';
import { TransactionTbuy } from 'src/app/shared/transactionT.model';

@Component({
  selector: 'app-buy-usdt',
  templateUrl: './buy-usdt.component.html',
  styles: [
  ]
})
export class BuyUsdtComponent implements OnInit {
  result: any;
  coinPrice: any = [];
  cardDetails: any;
  
  constructor(public service: TransactionService, private toastr: ToastrService, private price: coinApiService, public service_card: PaymentDetailService, public router: Router) { }

  ngOnInit(): void {
    this.usdtPrice();
    this.cardInfo();
  }

  cardInfo(){
    this.service_card.List1Card().subscribe(
      (res) => {
        this.cardDetails = res;
      },
      (err) => {
        console.log(err);
        this.router.navigate(['/card-insert']);
      }
    );
  }

  usdtPrice() {
    this.price.coinsPriceUSDT().then((res) => {
      this.result = res;
      this.coinPrice = this.result.tether.usd;
      console.log(this.coinPrice);
    })
  }

  onSubmitT(form: NgForm) {
    if(confirm('Da li siguran da želiš izvršiti transakciju?')){
    this.service.postTransactionTk().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Uspješno!', 'Podnešen zahtjev za transakciju')

      },
      err => { console.log(err);
        this.toastr.error('Neuspješno!', 'Transakcija nije uspjela') }
    );}
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formDataTk = new TransactionTbuy();
  }

}

