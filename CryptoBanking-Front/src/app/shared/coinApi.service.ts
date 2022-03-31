import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Coin } from './coinApi.model';

@Injectable()
export class coinApiService {

    coins: Coin[] = [];
    filteredCoins: Coin[] = [];

    private baseUrlBTC = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    private baseUrlETH = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';
    private baseUrlADA = 'https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd';
    private baseUrlUSDT = 'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd';
    private baseUrlCoin = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

    constructor(private http: HttpClient) { }

    coinsPriceBTC(){
        const url = this.baseUrlBTC;
        return this.http.get(url).toPromise().then((data) => {
            return data
        })
    }

    coinsPriceETH(){
        const url = this.baseUrlETH;
        return this.http.get(url).toPromise().then((data) => {
            return data
        })
    }

    coinsPriceADA(){
        const url = this.baseUrlADA;
        return this.http.get(url).toPromise().then((data) => {
            return data
        })
    }

    coinsPriceUSDT(){
        const url = this.baseUrlUSDT;
        return this.http.get(url).toPromise().then((data) => {
            return data
        })
    }

    coinList() {
        this.http.get<Coin[]>(this.baseUrlCoin).subscribe(
          (res) => {
            this.coins = res;
            this.filteredCoins = this.coins;
          },
          (err) => console.error(err)
        );
      }
}