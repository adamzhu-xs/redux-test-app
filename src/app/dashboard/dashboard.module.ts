import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard.routing.module';

import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';

import { AccountActions } from './redux/account.actions';
import { AccountAPIEpics } from './redux/account.epics';
import { AccountAPIService } from './redux/account.services';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        AccountsummaryComponent,
        AccountdetailsComponent
    ],
    providers: [AccountActions, AccountAPIEpics, AccountAPIService]
})
export class DashboardModule {

}
