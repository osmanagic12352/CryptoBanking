import { Injectable } from '@angular/core';
import { TransactionAbuy, TransactionAsell } from './transactionA.model';
import { TransactionBbuy, TransactionBsell } from './transactionB.model';
import { TransactionEbuy, TransactionEsell } from './transactionE.model';
import { TransactionTbuy, TransactionTsell } from './transactionT.model';
import { HttpClient } from "@angular/common/http";
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  list: Transaction[] = [];
  formData: Transaction = new Transaction();
  transactions: Transaction[] = [];

  readonly baseURLAk = 'http://localhost:5001/api/Transaction/add-transaction'
  formDataAk: TransactionAbuy = new TransactionAbuy();

  readonly baseURLBk = 'http://localhost:5001/api/Transaction/add-transaction'
  formDataBk: TransactionBbuy = new TransactionBbuy();

  readonly baseURLEk = 'http://localhost:5001/api/Transaction/add-transaction'
  formDataEk: TransactionEbuy = new TransactionEbuy();

  readonly baseURLTk = 'http://localhost:5001/api/Transaction/add-transaction'
  formDataTk: TransactionTbuy = new TransactionTbuy();

  readonly baseURLAp = 'http://localhost:5001/api/Transaction/add-transaction'
  formDataAp: TransactionAsell = new TransactionAsell();

  readonly baseURLBp = 'http://localhost:5001/api/Transaction/add-transaction'
  formDataBp: TransactionBsell = new TransactionBsell();

  readonly baseURLEp = 'http://localhost:5001/api/Transaction/add-transaction'
  formDataEp: TransactionEsell = new TransactionEsell();

  readonly baseURLTp = 'http://localhost:5001/api/Transaction/add-transaction'
  formDataTp: TransactionTsell = new TransactionTsell();

  postTransactionAk() {
    return this.http.post(this.baseURLAk, this.formDataAk);
  }

  postTransactionBk() {
    return this.http.post(this.baseURLBk, this.formDataBk);
  }

  postTransactionEk() {
    return this.http.post(this.baseURLEk, this.formDataEk);
  }

  postTransactionTk() {
    return this.http.post(this.baseURLTk, this.formDataTk);
  }

  postTransactionAp() {
    return this.http.post(this.baseURLAp, this.formDataAp);
  }

  postTransactionBp() {
    return this.http.post(this.baseURLBp, this.formDataBp);
  }

  postTransactionEp() {
    return this.http.post(this.baseURLEp, this.formDataEp);
  }

  postTransactionTp() {
    return this.http.post(this.baseURLTp, this.formDataTp);
  }

  listTransactions() {
    this.http.get('http://localhost:5001/api/Transaction/Get-all-transaction').subscribe(
      (res) => {
        this.list = res as Transaction[];
        this.transactions = this.list;
      },
      (err) => {
        console.log(err);
      });
  };


deleteTransaction(transactionId: number){
  return this.http.delete('http://localhost:5001/api/Transaction/Delete-transaction/' + transactionId);
}
}
