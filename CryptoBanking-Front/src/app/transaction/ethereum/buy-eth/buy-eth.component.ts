import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { coinApiService } from 'src/app/shared/coinApi.service';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { TransactionService } from 'src/app/shared/transaction.service';
import { TransactionEbuy } from 'src/app/shared/transactionE.model';

@Component({
  selector: 'app-buy-eth',
  templateUrl: './buy-eth.component.html',
  styles: [
  ]
})
export class BuyEthComponent implements OnInit {
  result: any;
  coinPrice: any = [];
  cardDetails: any;
  
  constructor(public service: TransactionService, private toastr: ToastrService, private price: coinApiService, public service_card: PaymentDetailService, public router: Router) { }

  ngOnInit(): void {
    this.ethPrice();
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

  ethPrice() {
    this.price.coinsPriceETH().then((res) => {
      this.result = res;
      this.coinPrice = this.result.ethereum.usd;
      console.log(this.coinPrice);
    })
  }

  onSubmitE(form: NgForm) {
    if(confirm('Da li siguran da želiš izvršiti transakciju?')){
    this.service.postTransactionEk().subscribe(
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
    this.service.formDataEk = new TransactionEbuy();
  }

}
