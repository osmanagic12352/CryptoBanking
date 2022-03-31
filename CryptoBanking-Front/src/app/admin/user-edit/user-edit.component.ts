import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService, private helper: JwtHelperService, private router: Router) { }

  ngOnInit(): void {
    this.userAuth();

    this.service.listUsers();

    this.service.userInfo();
  }


  populateForm(selectedRecord: User) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: string) {
    if (confirm('Da li siguran da želiš obrisati karticu korisnika?')) {
      this.service.deleteUser(id)
        .subscribe(
          res => {
            this.service.listUsers();
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
