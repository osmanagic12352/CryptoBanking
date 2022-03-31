import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { coinApiService } from 'src/app/shared/coinApi.service';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { TransactionService } from 'src/app/shared/transaction.service';
import { TransactionAbuy } from 'src/app/shared/transactionA.model';

@Component({
  selector: 'app-buy-ada',
  templateUrl: './buy-ada.component.html',
  styles: [
  ]
})
export class BuyAdaComponent implements OnInit {

  result: any;
  coinPrice: any = [];
  cardDetails: any;
  
  constructor(public service: TransactionService, private toastr: ToastrService, private price: coinApiService, public service_card: PaymentDetailService, public router: Router) { }

  ngOnInit(): void {
    this.adaPrice();
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

  adaPrice() {
    this.price.coinsPriceADA().then((res) => {
      this.result = res;
      this.coinPrice = this.result.cardano.usd;
      console.log(this.coinPrice);
    })
  }

  onSubmitA(form: NgForm) {
    if(confirm('Da li siguran da želiš izvršiti transakciju?')){
    this.service.postTransactionAk().subscribe(
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
    this.service.formDataAk = new TransactionAbuy();
  }

}
