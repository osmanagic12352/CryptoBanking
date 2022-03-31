import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable()
export class ChartService {

    private baseUrlBTC = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=3&interval=hourly';

    private baseUrlBNB = 'https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=3&interval=hourly';

    private baseUrlCAR = 'https://api.coingecko.com/api/v3/coins/cardano/market_chart?vs_currency=usd&days=3&interval=hourly';

    private baseUrlETH = 'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=3&interval=hourly';

    private baseUrlXRP = 'https://api.coingecko.com/api/v3/coins/ripple/market_chart?vs_currency=usd&days=3&interval=hourly';

    private baseUrlSOL = 'https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=3&interval=hourly';

    constructor(private http: HttpClient) { }

    coinsHistoryBTC(){
        const url = this.baseUrlBTC;
        return this.http.get(url).toPromise().then((data) => {
            return data
        })
    }

    coinsHistoryBNB(){
        const url = this.baseUrlBNB;
        return this.http.get(url).toPromise().then((data) => {
            return data
        })
    }

    coinsHistoryCAR(){
        const url = this.baseUrlCAR;
        return this.http.get(url).toPromise().then((data) => {
            return data
        })
    }

    coinsHistoryETH(){
        const url = this.baseUrlETH;
        return this.http.get(url).toPromise().then((data) => {
            return data
        })
    }

    coinsHistoryXRP(){
        const url = this.baseUrlXRP;
        return this.http.get(url).toPromise().then((data) => {
            return data
        })
    }

    coinsHistorySOL(){
        const url = this.baseUrlSOL;
        return this.http.get(url).toPromise().then((data) => {
            return data
        })
    }
}