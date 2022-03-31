import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { coinApiService } from '../shared/coinApi.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  switch: boolean;
  switchButton: 'login' | 'tecaj';
  
  titles: string[] = ['#', 'Valuta', 'Cijena (BAM)', 'Promjena 24h', 'Kupovni (BAM)', 'Prodajni (BAM)'];
  searchText: string = '';
  

  constructor(private http: HttpClient, private router: Router, private config: NgbCarouselConfig, private helper: JwtHelperService, public service: coinApiService) {

    config.interval = 7000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.service.coinList();
    
    this.userAuth();
  }

  userAuth(){
    const Token = localStorage.getItem("token");
    if (Token && !this.helper.isTokenExpired(Token) != null) {
      this.router.navigate(['/home']);
    }
  }

  button(type: 'login' | 'tecaj') {
    this.switch = true;
    this.switchButton = type;
  }

  searchCoin() {
    this.service.filteredCoins = this.service.coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
