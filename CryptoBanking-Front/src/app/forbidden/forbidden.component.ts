import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from '../shared/login.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styles: [
  ]
})
export class ForbiddenComponent implements OnInit {

  constructor(private router: Router, public service: UserService, private helper: JwtHelperService) { }

  ngOnInit(): void {
    this.userAuth();
    
    this.service.userInfo();
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
