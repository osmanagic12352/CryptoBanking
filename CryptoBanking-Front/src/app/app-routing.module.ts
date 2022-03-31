import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { JwtGuard } from './JWT/jwt.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PaymentDetailsComponent } from './admin/payment-details/payment-details.component';
import { CardEditComponent } from './admin/payment-details/card-edit/card-edit.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BitcoinComponent } from './transaction/bitcoin/bitcoin.component';
import { CardanoComponent } from './transaction/cardano/cardano.component';
import { EthereumComponent } from './transaction/ethereum/ethereum.component';
import { TetherComponent } from './transaction/tether/tether.component';
import { UserEditComponent } from './admin/user-edit/user-edit.component';
import { UserEditFormComponent } from './admin/user-edit/user-edit.form/user-edit-form.component';
import { OneUserComponent } from './home/one-user/one-user.component';
import { One1UserComponent } from './home/one-user/one1-user/one1-user.component';
import { CardInsertComponent } from './home/card-insert/card-insert.component';
import { One1CardComponent } from './home/one-user/one1-card/one1-card.component';
import { BuyEthComponent } from './transaction/ethereum/buy-eth/buy-eth.component';
import { SellEthComponent } from './transaction/ethereum/sell-eth/sell-eth.component';
import { BuyBtcComponent } from './transaction/bitcoin/buy-btc/buy-btc.component';
import { SellBtcComponent } from './transaction/bitcoin/sell-btc/sell-btc.component';
import { BuyAdaComponent } from './transaction/cardano/buy-ada/buy-ada.component';
import { SellAdaComponent } from './transaction/cardano/sell-ada/sell-ada.component';
import { BuyUsdtComponent } from './transaction/tether/buy-usdt/buy-usdt.component';
import { SellUsdtComponent } from './transaction/tether/sell-usdt/sell-usdt.component';
import { TransactionListComponent } from './admin/transaction-list/transaction-list.component';




const routes: Routes = [
    { path: '', redirectTo: '/user', pathMatch: 'full' },
    {
        path: 'user', component: UserComponent,
        children: [
            { path: 'register', component: RegisterComponent },
            { path: 'login', component: LoginComponent }
        ]
    },
    { path: 'home', component: HomeComponent, canActivate: [JwtGuard] },
    { path: 'forbidden', component: ForbiddenComponent, canActivate: [JwtGuard] },
    {
        path: 'edit', component: PaymentDetailsComponent, canActivate: [JwtGuard],
        children: [
            { path: 'edit-cards', component: CardEditComponent }
        ]
    },
    {
        path: 'transaction', component: TransactionComponent, canActivate: [JwtGuard],
        children: [
            {
                path: 'btc', component: BitcoinComponent, children: [
                    { path: 'buy-btc', component: BuyBtcComponent },
                    { path: 'sell-btc', component: SellBtcComponent }
                ]
            },
            {
                path: 'ada', component: CardanoComponent, children: [
                    { path: 'buy-ada', component: BuyAdaComponent },
                    { path: 'sell-ada', component: SellAdaComponent }
                ]
            },
            {
                path: 'usdt', component: TetherComponent, children: [
                    { path: 'buy-usdt', component: BuyUsdtComponent },
                    { path: 'sell-usdt', component: SellUsdtComponent }
                ]
            },
            {
                path: 'eth', component: EthereumComponent, children: [
                    { path: 'buy-eth', component: BuyEthComponent },
                    { path: 'sell-eth', component: SellEthComponent }
                ]
            }
        ]
    },
    {
        path: 'user-edit', component: UserEditComponent, canActivate: [JwtGuard],
        children: [
            { path: 'edit-users', component: UserEditFormComponent }
        ]
    },
    {
        path: 'one-user', component: OneUserComponent, canActivate: [JwtGuard],
        children: [
            { path: 'one1-user', component: One1UserComponent },
            { path: 'one1-card', component: One1CardComponent }
        ]
    },
    { path: 'card-insert', component: CardInsertComponent, canActivate: [JwtGuard], },
    { path: 'transaction-list', component: TransactionListComponent, canActivate: [JwtGuard],}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }