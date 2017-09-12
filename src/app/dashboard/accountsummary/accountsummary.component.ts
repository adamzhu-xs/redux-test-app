import { Component, OnInit } from '@angular/core';

import { AccountActions } from '../redux/account.actions';

@Component({
    selector: 'app-accountsummary',
    templateUrl: './accountsummary.component.html',
    styleUrls: ['./accountsummary.component.scss']
})
export class AccountsummaryComponent implements OnInit {

    constructor(private accountActions: AccountActions) { }

    ngOnInit() {
        this.accountActions.loadAccounts();
    }

}
