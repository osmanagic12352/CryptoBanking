import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class AdminService {


  roleMatch(allowedRoles: any): boolean {
    var isMatch = false;
    const Token = localStorage.getItem('token');
    if (Token) {
      var payLoad = JSON.parse(window.atob(Token.split('.')[1]));
      var userRole = payLoad.role;
      allowedRoles.forEach((element: any) => {
        if (userRole == element) {
          isMatch = true;
          return true
        }
        else {
          return null
        }
      });
      return isMatch;
    }
    return false;

  }
}