import { Component, OnInit } from "@angular/core";
import { PaymentDetailService } from "src/app/shared/payment-detail.service";
import { ToastrService } from "ngx-toastr";
import { PaymentDetail } from "src/app/shared/payment-detail.model";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";
import { UserService } from "src/app/shared/user.service";

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})

export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService, public service_user: UserService, private helper: JwtHelperService, private router: Router) { }

  ngOnInit(): void {
    this.userAuth();

    this.service.ListCards();

    this.service_user.userInfo();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Da li siguran da želiš obrisati karticu korisnika?')) {
      this.service.deleteCard(id)
        .subscribe(
          res => {
            this.service.ListCards();
            this.toastr.error("Brisanje uspješno!", 'Brisanje kartice korisnika');
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

}