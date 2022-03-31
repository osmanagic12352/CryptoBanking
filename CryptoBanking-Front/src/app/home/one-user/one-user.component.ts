import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/shared/login.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styles: [
  ]
})
export class OneUserComponent implements OnInit {

  cardDetails: any;

  constructor(public service: UserService, 
    private toastr: ToastrService, 
    private helper: JwtHelperService, 
    private router: Router, 
    public service_card: PaymentDetailService) { }

  ngOnInit(): void {
    this.userAuth();
    this.service.userInfo();
    this.cardUser();
  }

  cardUser(){
    this.service_card.List1Card().subscribe(
      (res: any) => {
        this.cardDetails = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  populateForm(selectedRecord:User){
      this.service.formData = Object.assign({},selectedRecord);
  }

  populateForm1(selectedRecord:PaymentDetail){
    this.service_card.formData = Object.assign({},selectedRecord);
  }

  onDeleteUser(id:string){
      if(confirm('Da li siguran da želiš obrisati karticu korisnika?')){
          this.service.delete1User(id)
              .subscribe(
                  res =>{
                      this.service.userInfo();
                      this.toastr.error("Brisanje uspješno!", 'Brisanje kartice korisnika');
                      localStorage.removeItem('token');
                      this.router.navigate(['/user/login']);

          },
          err => {console.log(err)}
      )
      }
      
  }

  onDeleteCard(id:number){
    if(confirm('Da li siguran da želiš obrisati karticu korisnika?')){
        this.service_card.deleteCard(id)
            .subscribe(
                res =>{
                    this.service_card.List1Card();
                    this.toastr.success("Uspješno!", 'Brisanje kartice korisnika');
        },
                err => {
                    console.log(err)
                    this.toastr.error('Brisanje nije uspjelo!', 'Greška servera!')}
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
