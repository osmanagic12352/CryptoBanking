import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styles: [
  ]
})
export class CardEditComponent implements OnInit {

  constructor(public service:PaymentDetailService, 
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  updateRecord(form: NgForm){
    this.service.putCard().subscribe(
      res => {
        this.resetForm(form);
        this.service.ListCards();
        this.toastr.info('Uspješno unešeno!','Kartični podaci')

      },
      err => {console.log(err);}
    );
  }
  
  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }

}
