import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AdminService } from '../shared/admin.service';

@Injectable({
  providedIn: 'root'
})
export class JwtGuard implements CanActivate {

  constructor(private router: Router, private helper: JwtHelperService, private admin : AdminService){

  }
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    const Token = localStorage.getItem("token");
    if(Token && !this.helper.isTokenExpired(Token)){
      let roles = next.data['permittedRoles'] as Array<string>;
      if(roles){
        if(this.admin.roleMatch(roles)) 
          return true;
        else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
      return true;
      
    }
    this.router.navigate(['/user/login']);
    localStorage.removeItem('token');
    return false;

  
  }
}
