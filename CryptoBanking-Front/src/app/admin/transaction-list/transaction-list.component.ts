import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Transaction } from 'src/app/shared/transaction.model';
import { TransactionService } from 'src/app/shared/transaction.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styles: [
  ]
})
export class TransactionListComponent implements OnInit {

  searchText: string = '';

  constructor(public service: TransactionService,
    public service_user: UserService,
    private helper: JwtHelperService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.userAuth();

    this.service.listTransactions();

    this.service_user.userInfo();

  }


  populateForm(selectedRecord: Transaction) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(transactionId: number) {
    if (confirm('Da li siguran da želiš obrisati transakciju?')) {
      this.service.deleteTransaction(transactionId)
        .subscribe(
          res => {
            this.service.listTransactions();
            this.toastr.success("Brisanje uspješno!", 'Brisanje transakcije');
          },
          err => { console.log(err) }
        )
    }

  }

  userAuth() {
    const Token = localStorage.getItem("token");
    if (Token && !this.helper.isTokenExpired(Token)) {
      return true;
    }
    else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

  searchCoin() {
    this.service.list = this.service.transactions.filter(
      (transaction: any) =>
        transaction.userId.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
