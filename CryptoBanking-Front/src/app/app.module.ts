import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginService } from './shared/login.service';
import { JwtInterceptor } from './JWT/jwt.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtGuard } from './JWT/jwt.guard';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ChartService} from './shared/chart.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PaymentDetailsComponent } from './admin/payment-details/payment-details.component';
import { CardEditComponent } from './admin/payment-details/card-edit/card-edit.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BitcoinComponent } from './transaction/bitcoin/bitcoin.component';
import { EthereumComponent } from './transaction/ethereum/ethereum.component';
import { TetherComponent } from './transaction/tether/tether.component';
import { CardanoComponent } from './transaction/cardano/cardano.component';
import { UserEditComponent } from './admin/user-edit/user-edit.component';
import { UserEditFormComponent } from './admin/user-edit/user-edit.form/user-edit-form.component';
import { OneUserComponent } from './home/one-user/one-user.component';
import { One1UserComponent } from './home/one-user/one1-user/one1-user.component';
import { CardInsertComponent } from './home/card-insert/card-insert.component';
import { One1CardComponent } from './home/one-user/one1-card/one1-card.component';
import { BuyEthComponent } from './transaction/ethereum/buy-eth/buy-eth.component';
import { SellEthComponent } from './transaction/ethereum/sell-eth/sell-eth.component';
import { SellAdaComponent } from './transaction/cardano/sell-ada/sell-ada.component';
import { BuyAdaComponent } from './transaction/cardano/buy-ada/buy-ada.component';
import { SellBtcComponent } from './transaction/bitcoin/sell-btc/sell-btc.component';
import { BuyBtcComponent } from './transaction/bitcoin/buy-btc/buy-btc.component';
import { SellUsdtComponent } from './transaction/tether/sell-usdt/sell-usdt.component';
import { BuyUsdtComponent } from './transaction/tether/buy-usdt/buy-usdt.component';
import { coinApiService } from './shared/coinApi.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TransactionListComponent } from './admin/transaction-list/transaction-list.component';



export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ForbiddenComponent,
    PaymentDetailsComponent,
    CardEditComponent,
    TransactionComponent,
    BitcoinComponent,
    EthereumComponent,
    TetherComponent,
    CardanoComponent,
    UserEditComponent,
    UserEditFormComponent,
    OneUserComponent,
    One1UserComponent,
    CardInsertComponent,
    One1CardComponent,
    BuyUsdtComponent,
    SellUsdtComponent,
    BuyAdaComponent,
    SellAdaComponent,
    BuyEthComponent,
    SellEthComponent,
    BuyBtcComponent,
    SellBtcComponent,
    TransactionListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgbModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [LoginService, JwtGuard, ChartService, coinApiService,{
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

