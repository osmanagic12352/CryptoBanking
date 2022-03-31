import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'http://localhost:5001/api/PaymentDetail/add-card'
  formData: PaymentDetail = new PaymentDetail(); 
  list: PaymentDetail[] = [];
 
  postCard(){
    return this.http.post(this.baseURL, this.formData);
  }

  putCard(){
    return this.http.put(`${'http://localhost:5001/api/PaymentDetail/Edit-card-details'}/${this.formData.id}`, this.formData);
  }

  put1Card(){
    return this.http.put('http://localhost:5001/api/PaymentDetail/edit-card', this.formData);
  }

  ListCards(){
    this.http.get('http://localhost:5001/api/PaymentDetail/get-all-cards').subscribe(
        (res) => {
          this.list = res as PaymentDetail[];
        },
        (err) => {
          console.log;
        } );
  }

  List1Card(){
    return this.http.get('http://localhost:5001/api/PaymentDetail/get-user-card');
  }

  deleteCard(id:number){
    return this.http.delete(`${'http://localhost:5001/api/PaymentDetail/Delete-card'}/${id}`);
  }
}
