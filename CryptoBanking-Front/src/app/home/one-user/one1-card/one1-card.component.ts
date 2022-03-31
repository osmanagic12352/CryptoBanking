import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-one1-card',
  templateUrl: './one1-card.component.html',
  styles: [
  ]
})
export class One1CardComponent implements OnInit {

  constructor(public service:PaymentDetailService, 
    private toastr:ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  updateCard(form:NgForm){
    this.service.putCard().subscribe(
      res => {
        this.resetForm(form);
        this.service.List1Card();
        this.toastr.info('Uspješno uređeni!','Kartični podaci')

      },
      err => {console.log(err);}
    );
  }
  
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }
}
