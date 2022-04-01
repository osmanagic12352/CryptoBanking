import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { coinApiService } from '../shared/coinApi.service';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styles: [
  ]
})
export class TransactionComponent implements OnInit {

  titles: string[] = ['Valuta', 'Cijena (BAM)', 'Kupovni (BAM)', 'Prodajni (BAM)'];
  searchText: string = '';


  constructor(public service: UserService, 
    private helper: JwtHelperService, 
    private router: Router, 
    private http: HttpClient,
    public service_coin: coinApiService) { }

  ngOnInit(): void {
    this.userAuth();

    this.service_coin.coinList();
    
    this.service.userInfo();

  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
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

  searchCoin() {
    this.service_coin.filteredCoins = this.service_coin.coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
